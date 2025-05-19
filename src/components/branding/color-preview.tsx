// src/components/branding/color-preview.tsx
'use client'

import useBrandingStore from "@/stores/use-branding-store";

export default function ColorPreview() {
  const { selectedColors } = useBrandingStore();

  if (!selectedColors || selectedColors.length === 0) return null;

  return (
    <div>
      <h4 className="text-sm font-medium text-gray-700 mb-2">Color Palette</h4>
      <div className="bg-gray-100 rounded-md p-3">
        <div className="flex flex-wrap gap-2">
          {selectedColors.map((color, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className="w-12 h-12 rounded-md border border-gray-200"
                style={{ backgroundColor: color }}
              />
              <span className="text-xs text-gray-500 mt-1">{color}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}