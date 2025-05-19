'use client'

import BrandDiscoveryStep from './steps/brand-discovery-step';
import VisualInspirationStep from './steps/visual-inspiration-step';
import LogoExplorationStep from './steps/logo-exploration-step';
import ColorHarmonyStep from './steps/color-harmony-step';
import useBrandingStore from "@/stores/use-branding-store";
import TypographySelectionStep from './steps/typography-selection-step';
import ImageryDirectionStep from './steps/imagery-direction-step';
import BrandVoiceStep from './steps/brand-voice-step';
import BrandIdentitySuiteStep from './steps/brand-identity-suite-step';
// This component decides which step to show based on the activeStep in the store
export default function StepContent() {
  const { activeStep } = useBrandingStore();
  
  // Render the appropriate step based on activeStep
  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return <BrandDiscoveryStep />;
      case 1:
        return <VisualInspirationStep />;
      case 2:
        return <LogoExplorationStep />;
      case 3:
        return <ColorHarmonyStep />;
      case 4:
        return <TypographySelectionStep />;
      case 5:
        return <ImageryDirectionStep />;
      case 6:
        return <BrandVoiceStep />;
      case 7:
            return <BrandIdentitySuiteStep />;
      default:
        // Placeholder for future steps
        return (
          <div className="flex items-center justify-center h-96">
            <p className="text-lg text-gray-500">Content for step {activeStep + 1} will be implemented soon.</p>
          </div>
        );
    }
  };
  
  return (
    <section className="flex-grow py-8 px-6">
      <div className="max-w-4xl mx-auto">
        {renderStep()}
      </div>
    </section>
  );
}