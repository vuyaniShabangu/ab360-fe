 'use client'

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import useBrandingStore from "@/stores/use-branding-store";
import { apiRequest } from "@/api";
import { HttpMethods } from "@/constants/api_methods";

interface ColorPalette {
  palette: string[];
  score: number;
}

export default function ColorHarmonyStep() {
  const { setSelectedColors } = useBrandingStore();
  const [palettes, setPalettes] = useState<ColorPalette[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedPalette, setSelectedPalette] = useState<ColorPalette | null>(null);

  const fetchPalettes = async () => {
    try {
      setLoading(true);
      const response = await apiRequest(HttpMethods.POST, "https://api.huemint.com/color", {
        mode:"transformer", // transformer, diffusion or random
            num_colors:4, // max 12, min 2
            temperature:"1.2", // max 2.4, min 0
            num_results:50, // max 50 for transformer, 5 for diffusion
            adjacency:[ "0", "65", "45", "35", "65", "0", "35", "65", "45", "35", "0", "35", "35", "65", "35", "0"], // nxn adjacency matrix as a flat array of strings
            palette:["-", "-", "-", "-"]
      });
      /*const response = await fetch("https://api.huemint.com/color", {
        method: 'POST',
        body: JSON.stringify({
            mode:"transformer", // transformer, diffusion or random
            num_colors:4, // max 12, min 2
            temperature:"1.2", // max 2.4, min 0
            num_results:50, // max 50 for transformer, 5 for diffusion
            adjacency:[ "0", "65", "45", "35", "65", "0", "35", "65", "45", "35", "0", "35", "35", "65", "35", "0"], // nxn adjacency matrix as a flat array of strings
            palette:["#ffffff", "-", "-", "-"] // locked colors as hex codes, or '-' if blank
            })
      });*/
      console.log({response})
      //const data: ColorHarmonyResponse = await response.json();
      setPalettes(response.results);
      setSelectedPalette(null);
    } catch (error) {
      toast.error("Failed to fetch color palettes");
      console.error("Error fetching palettes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPalettes();
  }, []);

  const handlePaletteSelect = (palette: ColorPalette) => {
    setSelectedPalette(palette);
    setSelectedColors(palette.palette);
  };

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Color Harmony</h1>
        <p className="mt-1 text-gray-600">Select a color palette that resonates with your brand&apos;s personality and values.</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">Color Palettes</h2>
            <Button 
              onClick={fetchPalettes} 
              disabled={loading}
              variant="outline"
            >
              {loading ? "Loading..." : "Regenerate Palettes"}
            </Button>
          </div>
          <p className="text-sm text-gray-600 mt-1">Choose a color palette that best represents your brand&apos;s visual identity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {palettes.map((palette, index) => (
            <Card
              key={index}
              className={`p-4 cursor-pointer transition-all ${
                selectedPalette === palette ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => handlePaletteSelect(palette)}
            >
              <div className="flex gap-2 mb-2">
                {palette.palette.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    className="w-12 h-12 rounded-md"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">
                Score: {palette.score.toFixed(2)}
              </div>
            </Card>
          ))}
        </div>

        {selectedPalette && (
          <div className="mt-6 p-4 border rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Selected Palette</h3>
            <div className="flex gap-4">
              {selectedPalette.palette.map((color, index) => (
                <div key={index} className="space-y-2">
                  <div
                    className="w-16 h-16 rounded-md"
                    style={{ backgroundColor: color }}
                  />
                  <div className="text-sm text-center text-gray-600">{color}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 text-sm text-gray-600">
          <p>Your selected color palette will be used throughout your brand identity to maintain consistency and visual harmony.</p>
        </div>
      </div>
    </>
  );
}