// src/components/branding/steps/brand-identity-suite-step.tsx
'use client'

import { useEffect, useState } from 'react';
import { Textarea } from "@/components/ui/textarea";
import useBrandingStore from "@/stores/use-branding-store";

const PDFS = ['/a.pdf', '/b.pdf', '/c.pdf'] as const;

export default function BrandIdentitySuiteStep() {
  const { brandFeedback, setBrandFeedback } = useBrandingStore();
  const [currentPdfIndex, setCurrentPdfIndex] = useState<number>(0);

  useEffect(() => {
    // Get the last shown PDF index from sessionStorage
    const lastShownIndex = sessionStorage.getItem('lastShownPdfIndex');
    let nextIndex: number;

    if (lastShownIndex !== null) {
      // Convert to number and ensure we don't show the same PDF twice
      const lastIndex = parseInt(lastShownIndex);
      nextIndex = (lastIndex + 1) % PDFS.length;
    } else {
      // If no last shown index, start with a random one
      nextIndex = Math.floor(Math.random() * PDFS.length);
    }

    // Update the current index and store it
    setCurrentPdfIndex(nextIndex);
    sessionStorage.setItem('lastShownPdfIndex', nextIndex.toString());
  }, []); // Empty dependency array means this runs once when component mounts

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Brand Identity Suite</h2>
        <p className="text-gray-600">
          Review your complete brand identity and provide any feedback or suggestions for adjustments.
        </p>
      </div>

      <div className="space-y-8">
        {/* PDF Preview */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Brand Preview</h3>
          <div className="w-full aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
            <iframe
              src={PDFS[currentPdfIndex]}
              className="w-full h-full"
              title="Brand Identity Suite Preview"
            />
          </div>
        </div>

        {/* Feedback Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Feedback</h3>
          <Textarea
            placeholder="Share your thoughts about the brand identity. What works well? What could be improved?"
            value={brandFeedback}
            onChange={(e) => setBrandFeedback(e.target.value)}
            className="min-h-[200px]"
          />
          <p className="text-sm text-gray-500">
            Your feedback will help us refine the brand identity to better match your vision.
          </p>
        </div>
      </div>
    </div>
  );
}