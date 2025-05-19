'use client'

import useBrandingStore from "@/stores/use-branding-store";

const VOICE_SETS = [
  {
    id: "professional",
    name: "Professional & Authoritative",
    hero: "Elevating Excellence Through Innovation",
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
    hero: "Making Great Things Happen, Together",
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
    hero: "Breaking Boundaries, Building Tomorrow",
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

export default function BrandVoicePreview() {
  const { selectedVoiceSet } = useBrandingStore();

  if (!selectedVoiceSet) return null;

  const selectedSet = VOICE_SETS.find(set => set.id === selectedVoiceSet);
  if (!selectedSet) return null;

  return (
    <div>
      <h4 className="text-sm font-medium text-gray-700 mb-2">Brand Voice</h4>
      <div className="bg-gray-100 rounded-md p-3 space-y-3">
        <div>
          <p className="text-sm font-medium text-gray-900">{selectedSet.name}</p>
          <p className="text-sm text-gray-600 mt-1">{selectedSet.hero}</p>
        </div>
        <div className="mt-2 text-xs text-gray-700 space-y-1">
          <p><span className="font-medium">Persona:</span> {selectedSet.persona.name}, age {selectedSet.persona.age}, {selectedSet.persona.occupation}</p>
          <p><span className="font-medium">Background:</span> {selectedSet.persona.background}</p>
          <p><span className="font-medium">Personality:</span> {selectedSet.persona.personality}</p>
          <p><span className="font-medium">Communication Style:</span> {selectedSet.persona.communicationStyle}</p>
        </div>
      </div>
    </div>
  );
}