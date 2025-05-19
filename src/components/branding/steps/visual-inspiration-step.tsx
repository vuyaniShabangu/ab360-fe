'use client'

import { moodboardImages } from "@/constants/branding_constants";
import useBrandingStore from "@/stores/use-branding-store";

export default function VisualInspirationStep() {
  const { selectedImages, toggleImageSelection } = useBrandingStore();
  
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Visual Inspiration</h1>
        <p className="mt-1 text-gray-600">Select images that align with your brand&apos;s visual style and feeling.</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">Mood Board</h2>
            <div className="text-sm text-gray-500">{selectedImages.length} selected</div>
          </div>
          <p className="text-sm text-gray-600 mt-1">Choose 3-5 images that best represent your brand&apos;s visual direction.</p>
        </div>
        
        <div className="grid grid-cols-3 gap-4 md:grid-cols-4">
          {moodboardImages.map((img, index) => (
            <div 
              key={index} 
              className={`relative cursor-pointer rounded-md overflow-hidden border-2 transition-all duration-200 ${
                selectedImages.includes(index) ? 'border-gradient-gold shadow-md' : 'border-transparent hover:border-gray-300'
              }`}
              onClick={() => toggleImageSelection(index)}
            >
              <img src={img} alt={`Mood board image ${index+1}`} className="w-full h-full object-cover" />
              {selectedImages.includes(index) && (
                <div className="absolute top-2 right-2 h-6 w-6 bg-primary rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-sm text-gray-600">
          <p>These selections will influence your brand&apos;s visual style, color palette, and overall aesthetic direction.</p>
        </div>
      </div>
    </>
  );
}