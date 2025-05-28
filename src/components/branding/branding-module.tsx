"use client";

import BrandingStepper from "./branding-stepper";
import StepContent from "./step-content";
import NavigationButtons from "./navigation-buttons";
import BrandPreviewPanel from "./brand-preview-panel";
import useProjectStore from "@/stores/use-project-store";
import { useEffect, useState } from "react";
import { APIRoutes } from "@/constants/api_routes";
import { apiRequest } from "@/api";
import { HttpMethods } from "@/constants/api_methods";
import ClientProjectSelect from "../client-project-select";

interface TargetAudience {
  ageRange: number[];
  gender: string;
  income: string;
  education: string;
  location: string;
}

interface Personality {
  formalCasual: number;
  traditionalModern: number;
  seriousPlayful: number;
}

interface Brand {
  brandDiscovery?: {
    targetAudience?: TargetAudience;
    industry?: string;
    values?: string[];
    competitors?: string;
    differentiation?: string;
    personality?: Personality;
    problemsSolved?: string[];
    shortTermGoals?: string;
    longTermGoals?: string;
    visualPreferences?: string;
    visualAversions?: string;
  };
  selectedImages?: number[];
  selectedLogo?: null;
  selectedColors?: any[];
  selectedFont?: string;
  selectedImagerySet?: null;
  selectedVoiceSet?: null;
  brandFeedback?: string;
}

export default function BrandingModule() {
  const [brand, setBrand] = useState<Brand | null>(null);
  const currentProject = useProjectStore(
    (state) => state.currentSelectedProject
  );

  useEffect(() => {
    if (currentProject.id) {
      getBranding(currentProject.id);
    }
  }, [currentProject]);

  const getBranding = async (id: string) => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL_LOCAL}${APIRoutes.ORGANIZATIONS.GET_ORGANIZATION}/branding/${id}`;
      const branding = await apiRequest(HttpMethods.GET, url, {});
      setBrand(branding.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {!currentProject.id || brand == null ? (
        <div className="flex items-center gap-4">
          <ClientProjectSelect />
        </div>
      ) : (
        <div className="flex flex-col min-h-screen bg-gray-50">
          {/* Stepper */}
          <BrandingStepper />

          {/* Main Content Area */}
          <main className="flex-grow flex">
            {/* Step Content */}
            <div className="flex-grow">
              <StepContent />

              {/* Navigation Buttons - placed within the content area for proper spacing */}
              <div className="max-w-4xl mx-auto px-6 pb-6">
                <NavigationButtons />
              </div>
            </div>

            {/* Side Panel */}
            <BrandPreviewPanel />
          </main>
        </div>
      )}
    </div>
  );
}
