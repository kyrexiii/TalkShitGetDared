// Define Prompt interface inline to avoid import issues
type DifficultyLevel = 'easy' | 'medium' | 'hard' | 'extreme';
type PromptCategory = 'personal' | 'embarrassing' | 'relationships' | 'funny' | 'physical' | 'social' | 'intimate' | 'confession';

interface Prompt {
  id: string;
  text: string;
  contributor: string;
  difficulty: DifficultyLevel;
  category: PromptCategory;
}

export const darePrompts: Prompt[] = [
  {
    id: "es_sfw_d001",
    text: "Canta una canción elegida por el grupo.",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "es_sfw_d002",
    text: "Haz tu mejor imitación de una celebridad.",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "es_sfw_d003",
    text: "Baila sin música durante 30 segundos.",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "es_sfw_d004",
    text: "Llama a un contacto aleatorio y cántale feliz cumpleaños.",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "es_sfw_d005",
    text: "Haz 10 flexiones.",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "es_sfw_d006",
    text: "Envía un mensaje a tu ex diciéndole que lo extrañas.",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "es_sfw_d007",
    text: "Publica una foto embarazosa en redes sociales.",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "es_sfw_d008",
    text: "Deja que alguien más publique un estado en tus redes sociales.",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "es_sfw_d009",
    text: "Come una cucharada de salsa picante.",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "es_sfw_d010",
    text: "Haz una parada de manos durante 30 segundos.",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  }
];