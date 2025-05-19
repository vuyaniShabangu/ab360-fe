'use client'

import BrandingStepper from './branding-stepper';
import StepContent from './step-content';
import NavigationButtons from './navigation-buttons';
import BrandPreviewPanel from './brand-preview-panel';

export default function BrandingModule() {
  return (
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
  );
}