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
    text: "Escribe tu próximo mensaje con los ojos cerrados.",
    contributor: "kyrexiii",
    difficulty: "easy",
    category: "funny"
  },
  {
    id: "es_sfw_d002",
    text: "Envía un emoji que represente cómo te sientes ahora.",
    contributor: "kyrexiii",
    difficulty: "easy",
    category: "personal"
  },
  {
    id: "es_sfw_d003",
    text: "Graba un audio diciendo 'Estoy enamorado de mi almohada 🥲' como si fuera serio.",
    contributor: "kyrexiii",
    difficulty: "medium",
    category: "funny"
  },
  {
    id: "es_sfw_d004",
    text: "Envía tu última foto de galería (si no es privada).",
    contributor: "kyrexiii",
    difficulty: "medium",
    category: "embarrassing"
  },
  {
    id: "es_sfw_d005",
    text: "Cambia tu estado o nombre de usuario a algo ridículo por 5 minutos.",
    contributor: "kyrexiii",
    difficulty: "medium",
    category: "funny"
  }
];
