// src/components/branding/steps/imagery-direction-step.tsx
'use client'

import { useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import useBrandingStore from "@/stores/use-branding-store";

const IMAGERY_SETS = [
  {
    id: "set1",
    name: "Modern & Minimal",
    description: "Clean, contemporary imagery with a focus on simplicity and space",
    searchQuery: "minimal modern architecture"
  },
  {
    id: "set2",
    name: "Bold & Dynamic",
    description: "Energetic, vibrant imagery that captures attention and movement",
    searchQuery: "bold dynamic abstract"
  },
  {
    id: "set3",
    name: "Natural & Organic",
    description: "Authentic, earthy imagery that feels genuine and approachable",
    searchQuery: "natural organic landscape"
  }
];

interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string;
}

export default function ImageryDirectionStep() {
  const { selectedImagerySet, setSelectedImagerySet } = useBrandingStore();
  const [images, setImages] = useState<{ [key: string]: UnsplashImage[] }>({});
  const [loading, setLoading] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const fetchImages = async (setId: string, query: string) => {
      setLoading(prev => ({ ...prev, [setId]: true }));
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=3&client_id=_pe6n0hWqmd718RzzomvHI9A9HFzbPpzAbXWUS4GkE4`
        );
        const data = await response.json();
        setImages(prev => ({ ...prev, [setId]: data.results }));
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(prev => ({ ...prev, [setId]: false }));
      }
    };

    // Fetch images for each set
    IMAGERY_SETS.forEach(set => {
      fetchImages(set.id, set.searchQuery);
    });
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Choose Your Imagery Direction</h2>
        <p className="text-gray-600">
          Select a set of images that best represents your brand&apos;s visual style and messaging.
        </p>
      </div>

      <RadioGroup
        value={selectedImagerySet}
        onValueChange={setSelectedImagerySet}
        className="space-y-6"
      >
        {IMAGERY_SETS.map((set) => (
          <Card
            key={set.id}
            className={`p-6 cursor-pointer transition-all ${
              selectedImagerySet === set.id
                ? "border-primary ring-2 ring-primary/20"
                : "hover:border-gray-300"
            }`}
          >
            <div className="flex items-start gap-4">
              <RadioGroupItem value={set.id} id={set.id} />
              <div className="flex-1 space-y-4">
                <div>
                  <Label
                    htmlFor={set.id}
                    className="text-lg font-medium cursor-pointer"
                  >
                    {set.name}
                  </Label>
                  <p className="text-sm text-gray-600 mt-1">{set.description}</p>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {loading[set.id] ? (
                    // Loading state
                    Array(3).fill(0).map((_, index) => (
                      <div
                        key={index}
                        className="aspect-square rounded-lg bg-gray-200 animate-pulse"
                      />
                    ))
                  ) : images[set.id] ? (
                    // Images loaded
                    images[set.id].map((image) => (
                      <div
                        key={image.id}
                        className="aspect-square rounded-lg overflow-hidden border border-gray-200"
                      >
                        <img
                          src={image.urls.regular}
                          alt={image.alt_description || set.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))
                  ) : (
                    // Error state
                    Array(3).fill(0).map((_, index) => (
                      <div
                        key={index}
                        className="aspect-square rounded-lg bg-gray-100 flex items-center justify-center text-gray-400"
                      >
                        Failed to load image
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </RadioGroup>
    </div>
  );
}