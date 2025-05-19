// src/components/branding/imagery-preview.tsx
'use client'

import { useEffect, useState } from 'react';
import useBrandingStore from "@/stores/use-branding-store";

const IMAGERY_SETS = [
  {
    id: "set1",
    name: "Modern & Minimal",
    searchQuery: "minimal modern architecture"
  },
  {
    id: "set2",
    name: "Bold & Dynamic",
    searchQuery: "bold dynamic abstract"
  },
  {
    id: "set3",
    name: "Natural & Organic",
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

export default function ImageryPreview() {
  const { selectedImagerySet } = useBrandingStore();
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      if (!selectedImagerySet) return;

      setLoading(true);
      const set = IMAGERY_SETS.find(s => s.id === selectedImagerySet);
      if (!set) return;

      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${encodeURIComponent(set.searchQuery)}&per_page=3&client_id=_pe6n0hWqmd718RzzomvHI9A9HFzbPpzAbXWUS4GkE4`
        );
        const data = await response.json();
        setImages(data.results);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [selectedImagerySet]);

  if (!selectedImagerySet) return null;

  const selectedSet = IMAGERY_SETS.find(set => set.id === selectedImagerySet);
  if (!selectedSet) return null;

  return (
    <div>
      <h4 className="text-sm font-medium text-gray-700 mb-2">Imagery Direction</h4>
      <div className="bg-gray-100 rounded-md p-3">
        <p className="text-sm text-gray-600 mb-3">{selectedSet.name}</p>
        <div className="grid grid-cols-3 gap-2">
          {loading ? (
            // Loading state
            Array(3).fill(0).map((_, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg bg-gray-200 animate-pulse"
              />
            ))
          ) : images.length > 0 ? (
            // Images loaded
            images.map((image) => (
              <div
                key={image.id}
                className="aspect-square rounded-lg overflow-hidden border border-gray-200"
              >
                <img
                  src={image.urls.regular}
                  alt={image.alt_description || selectedSet.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))
          ) : (
            // Error state
            <div className="col-span-3 text-center text-gray-400">
              Failed to load images
            </div>
          )}
        </div>
      </div>
    </div>
  );
}