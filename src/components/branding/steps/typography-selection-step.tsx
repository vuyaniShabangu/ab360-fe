'use client'

import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import useBrandingStore from "@/stores/use-branding-store";

const FONT_OPTIONS = [
  {
    id: "inter",
    name: "Inter",
    className: "font-inter",
    preview: {
      header: "The quick brown fox jumps over the lazy dog",
      subtitle: "A modern, clean typeface",
      content: "Perfect for digital interfaces and modern designs. Inter is known for its excellent readability and versatility.",
      small: "Small text example"
    }
  },
  {
    id: "lexend",
    name: "Lexend",
    className: "font-lexend",
    preview: {
      header: "The quick brown fox jumps over the lazy dog",
      subtitle: "A contemporary, professional typeface",
      content: "Lexend offers a perfect balance between modern aesthetics and professional appearance. Great for corporate and creative projects.",
      small: "Small text example"
    }
  },
  {
    id: "poppins",
    name: "Poppins",
    className: "font-poppins",
    preview: {
      header: "The quick brown fox jumps over the lazy dog",
      subtitle: "A geometric sans-serif typeface",
      content: "Poppins brings a geometric touch to your typography. Its clean lines and modern feel make it ideal for contemporary designs.",
      small: "Small text example"
    }
  }
];

export default function TypographySelectionStep() {
  const { selectedFont, setSelectedFont } = useBrandingStore();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Choose Your Typography</h2>
        <p className="text-gray-600">
          Select a font that best represents your brand&apos;s personality and ensures readability across all your materials.
        </p>
      </div>

      <RadioGroup
        value={selectedFont}
        onValueChange={setSelectedFont}
        className="space-y-6"
      >
        {FONT_OPTIONS.map((font) => (
          <Card
            key={font.id}
            className={`p-6 cursor-pointer transition-all ${
              selectedFont === font.id
                ? "border-primary ring-2 ring-primary/20"
                : "hover:border-gray-300"
            }`}
          >
            <div className="flex items-start gap-4">
              <RadioGroupItem value={font.id} id={font.id} />
              <div className="flex-1 space-y-4">
                <Label
                  htmlFor={font.id}
                  className="text-lg font-medium cursor-pointer"
                >
                  {font.name}
                </Label>
                <div className={`space-y-4 ${font.className}`}>
                  <h3 className="text-2xl font-semibold">{font.preview.header}</h3>
                  <p className="text-lg text-gray-600">{font.preview.subtitle}</p>
                  <p className="text-base">{font.preview.content}</p>
                  <p className="text-sm text-gray-500">{font.preview.small}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </RadioGroup>
    </div>
  );
}