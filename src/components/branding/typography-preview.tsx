 'use client'

import useBrandingStore from "@/stores/use-branding-store";

const getFontClassName = (fontId: string) => {
  switch (fontId) {
    case 'inter':
      return 'font-inter';
    case 'lexend':
      return 'font-lexend';
    case 'poppins':
      return 'font-poppins';
    default:
      return 'font-inter';
  }
};

export default function TypographyPreview() {
  const { selectedFont } = useBrandingStore();

  if (!selectedFont) return null;

  return (
    <div>
      <h4 className="text-sm font-medium text-gray-700 mb-2">Typography</h4>
      <div className={`bg-gray-100 rounded-md p-3 text-sm text-gray-600 ${getFontClassName(selectedFont)}`}>
        <h5 className="text-lg font-semibold mb-2">Sample Heading</h5>
        <p className="text-base mb-2">This is a sample paragraph showing how your selected font looks in regular text.</p>
        <p className="text-xs text-gray-500">Small text example for captions and notes</p>
      </div>
    </div>
  );
}