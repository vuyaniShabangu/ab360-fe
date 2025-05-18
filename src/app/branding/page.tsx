'use client'

import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { MenuItem } from "@/types/menu-items.enum"
import { Header } from "@/components/header"
import { useState } from "react";

export default function BrandingPage() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [activeStep, setActiveStep] = useState(1);
    const steps = [
        { id: 0, title: "Brand Discovery", completed: true },
        { id: 1, title: "Visual Inspiration", completed: false },
        { id: 2, title: "Logo Exploration", completed: false },
        { id: 3, title: "Color Harmony", completed: false },
        { id: 4, title: "Typography Selection", completed: false },
        { id: 5, title: "Imagery Direction", completed: false },
        { id: 6, title: "Brand Voice", completed: false },
        { id: 7, title: "Brand Identity Suite", completed: false }
      ];
      
      const moodboardImages = [
        "/180.png",
        "/180.png",
        "/180.png",
        "/180.png",
        "/180.png",
        "/180.png",
        "/180.png",
        "/180.png",
        "/180.png",
        "/180.png",
        "/180.png",
        "/180.png",
      ];
      
      const [selectedImages, setSelectedImages] = useState([1, 4, 7]);
      
      const toggleImageSelection = (index: number) => {
        if (selectedImages.includes(index)) {
          setSelectedImages(selectedImages.filter(i => i !== index));
        } else {
          setSelectedImages([...selectedImages, index]);
        }
      };
      
  return (
    <div className="flex bg-background font-lexend">
      <DashboardSidebar activeMenuItem={MenuItem.BrandManagement} />
      <div className="flex flex-col w-full">
        <Header />
        <main className="p-6">
          <h1 className="text-3xl font-normal">Brand Management</h1>

          <section className="mt-8">
          <div className="flex flex-col min-h-screen bg-gray-50">
      

      {/* Stepper */}
      <div className="bg-white border-b border-gray-200 py-4 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between">
            {steps.map((step) => (
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
                  {step.id < steps.length - 1 && (
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

      {/* Main Content */}
      <div className="flex-grow flex">
        <div className="flex-grow py-8 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Visual Inspiration</h1>
              <p className="mt-1 text-gray-600">Select images that align with your brand&amp;s visual style and feeling.</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="mb-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-medium text-gray-900">Mood Board</h2>
                  <div className="text-sm text-gray-500">{selectedImages.length} selected</div>
                </div>
                <p className="text-sm text-gray-600 mt-1">Choose 3-5 images that best represent your brand&amp;s visual direction.</p>
              </div>

              <div className="grid grid-cols-3 gap-4 md:grid-cols-4">
                {moodboardImages.map((img, index) => (
                  <div 
                    key={index} 
                    className={`relative cursor-pointer rounded-md overflow-hidden border-2 transition-all duration-200 ${
                      selectedImages.includes(index) ? 'border-indigo-500 shadow-md' : 'border-transparent hover:border-gray-300'
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
                <p>These selections will influence your brand&amp;s visual style, color palette, and overall aesthetic direction.</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50">
                Back
              </button>
              <div>
                <button className="mr-3 px-4 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50">
                  Save Progress
                </button>
                <button className="px-6 py-2 bg-primary text-white rounded-md font-medium hover:bg-indigo-700">
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div className="w-80 border-l border-gray-200 bg-white">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Brand Preview</h3>
              <button className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Target Audience</h4>
                <div className="bg-gray-100 rounded-md p-3 text-sm text-gray-600">
                  <p>25-40 year old professionals</p>
                  <p>Urban, tech-savvy</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Visual Direction</h4>
                <div className="grid grid-cols-3 gap-2">
                  {selectedImages.map(index => (
                    <div key={index} className="rounded-md overflow-hidden border border-gray-200">
                      <img src="60.png" alt={`Selected image ${index+1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <button className="w-full px-4 py-2 bg-gray-100 rounded-md text-gray-700 font-medium hover:bg-gray-200 text-sm">
                  View Full Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
          </section>

         
        </main>
      </div>
    </div>
  )
}
