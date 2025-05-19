'use client'

import useBrandingStore from "@/stores/use-branding-store";

export default function BrandFeedbackPreview() {
  const { brandFeedback } = useBrandingStore();

  if (!brandFeedback) return null;

  return (
    <div>
      <h4 className="text-sm font-medium text-gray-700 mb-2">Brand Feedback</h4>
      <div className="bg-gray-100 rounded-md p-3">
        <p className="text-sm text-gray-600 whitespace-pre-wrap">{brandFeedback}</p>
      </div>
    </div>
  );
}