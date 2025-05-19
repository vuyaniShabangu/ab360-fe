'use client'

import useBrandingStore from "@/stores/use-branding-store";
import { brandingSteps } from "@/constants/branding_constants";

export default function BrandingStepper() {
  const { activeStep } = useBrandingStore();
  
  return (
    <div className="bg-white border-b border-gray-200 py-4 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between">
          {brandingSteps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              <div className="relative">
                <div 
                  className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-medium 
                  ${step.id < activeStep ? 'bg-primary text-white' : 
                    step.id === activeStep ? 'bg-primary text-white' : 
                    'bg-gray-200 text-gray-500'}`}
                >
                  {step.id < activeStep ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step.id + 1
                  )}
                </div>
                {step.id < brandingSteps.length - 1 && (
                  <div 
                    className={`absolute top-1/2 left-full h-0.5 w-8 -translate-y-1/2 transform 
                      ${step.id < activeStep ? 'bg-primary' : 'bg-gray-200'}`}
                    style={{ width: '140%' }}
                  />
                )}
              </div>
              <div className={`mt-2 text-xs font-medium ${step.id === activeStep ? 'text-primary' : 'text-gray-500'}`}>
                {step.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}