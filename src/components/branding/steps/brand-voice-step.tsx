'use client'

import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import useBrandingStore from "@/stores/use-branding-store";

const VOICE_SETS = [
  {
    id: "professional",
    name: "Professional & Authoritative",
    description: "A confident, established voice that commands respect and trust",
    hero: "Elevating Excellence Through Innovation",
    descriptive: "We are committed to delivering exceptional solutions that set new industry standards. Our expertise and dedication ensure that every project exceeds expectations.",
    persona: {
      name: "Dr. Sarah Chen",
      age: 42,
      occupation: "Chief Medical Officer at a leading research hospital",
      background: "Harvard Medical School graduate with 15 years of experience in medical research and healthcare management",
      personality: "Sarah is methodical, precise, and deeply knowledgeable. She speaks with confidence and authority, always backing her statements with data and research. Her communication is clear, structured, and focused on delivering value. She's the person everyone turns to for expert advice and guidance.",
      communicationStyle: "Direct, evidence-based, and solution-oriented. She uses precise language and maintains a professional tone while being approachable and empathetic."
    }
  },
  {
    id: "friendly",
    name: "Friendly & Approachable",
    description: "A warm, inviting voice that makes everyone feel welcome",
    hero: "Making Great Things Happen, Together",
    descriptive: "We believe in the power of collaboration and genuine connections. Our approach is all about making things easier and more enjoyable for everyone we work with.",
    persona: {
      name: "Marcus Rodriguez",
      age: 35,
      occupation: "Community Center Director and former social worker",
      background: "Master's in Social Work, 10 years of experience in community building and youth development",
      personality: "Marcus is warm, empathetic, and naturally connects with people from all walks of life. He has a talent for making complex things simple and always finds the human element in any situation. His energy is infectious, and he has a way of making everyone feel heard and valued.",
      communicationStyle: "Conversational, encouraging, and inclusive. He uses relatable examples and often incorporates humor to make points more engaging. His tone is always supportive and positive."
    }
  },
  {
    id: "innovative",
    name: "Innovative & Dynamic",
    description: "A bold, forward-thinking voice that embraces change and creativity",
    hero: "Breaking Boundaries, Building Tomorrow",
    descriptive: "We're not just following trends – we're creating them. Our passion for innovation drives us to explore new possibilities and push the limits of what's possible.",
    persona: {
      name: "Alex Kim",
      age: 29,
      occupation: "Tech Entrepreneur and AI Researcher",
      background: "Stanford Computer Science graduate, founded two successful tech startups, regular speaker at tech conferences",
      personality: "Alex is brilliant, curious, and always thinking three steps ahead. They're constantly experimenting with new ideas and approaches, never satisfied with the status quo. Their enthusiasm for innovation is contagious, and they have a talent for making complex technology feel exciting and accessible.",
      communicationStyle: "Energetic, forward-thinking, and inspiring. They use dynamic language and often incorporate tech metaphors. Their tone is confident but not arrogant, always pushing boundaries while remaining grounded in reality."
    }
  }
];

export default function BrandVoiceStep() {
  const { selectedVoiceSet, setSelectedVoiceSet } = useBrandingStore();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Choose Your Brand Voice</h2>
        <p className="text-gray-600">
          Select a voice that best represents how your brand communicates with your audience.
        </p>
      </div>

      <RadioGroup
        value={selectedVoiceSet}
        onValueChange={setSelectedVoiceSet}
        className="space-y-6"
      >
        {VOICE_SETS.map((set) => (
          <Card
            key={set.id}
            className={`p-6 cursor-pointer transition-all ${
              selectedVoiceSet === set.id
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
                <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Hero Text</h4>
                    <p className="text-lg font-semibold">{set.hero}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Descriptive Text</h4>
                    <p className="text-base text-gray-600">{set.descriptive}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Brand Persona</h4>
                    <div className="text-xs text-gray-700 space-y-1">
                      <p><span className="font-medium">Name:</span> {set.persona.name}, age {set.persona.age}, {set.persona.occupation}</p>
                      <p><span className="font-medium">Background:</span> {set.persona.background}</p>
                      <p><span className="font-medium">Personality:</span> {set.persona.personality}</p>
                      <p><span className="font-medium">Communication Style:</span> {set.persona.communicationStyle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </RadioGroup>
    </div>
  );
}