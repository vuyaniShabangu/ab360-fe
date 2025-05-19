'use client'

import useBrandingStore from "@/stores/use-branding-store";

export default function NavigationButtons() {
  const { activeStep, goToNextStep, goToPreviousStep } = useBrandingStore();
  
  // Add type for the click handler
  const handleSaveClick = (): void => {
    // Save logic would go here
    console.log("Saving progress...");
  };
  
  return (
    <div className="mt-8 flex justify-between">
      <button 
        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={activeStep === 0}
        onClick={goToPreviousStep}
      >
        Back
      </button>
      <div>
        <button 
          className="mr-3 px-4 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50"
          onClick={handleSaveClick}
        >
          Save Progress
        </button>
        <button 
          className="px-6 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary/90"
          onClick={goToNextStep}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}