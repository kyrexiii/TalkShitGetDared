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

export const truthPrompts: Prompt[] = [
  {
    id: "es_sfw_t001",
    text: "¿Cuál es tu mayor miedo?",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "es_sfw_t002",
    text: "¿Cuál es la cosa más embarazosa que te ha pasado?",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "es_sfw_t003",
    text: "¿Cuál es tu mayor secreto?",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "es_sfw_t004",
    text: "¿Quién fue tu primer amor?",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "es_sfw_t005",
    text: "¿Qué es algo que nunca le has dicho a tus padres?",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "es_sfw_t006",
    text: "¿Cuál es el sueño más extraño que has tenido?",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "es_sfw_t007",
    text: "Si pudieras cambiar una cosa sobre ti mismo, ¿qué sería?",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "es_sfw_t008",
    text: "¿Qué es lo más infantil que aún haces?",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "es_sfw_t009",
    text: "¿Cuál es tu miedo más irracional?",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "es_sfw_t010",
    text: "¿Cuál es la peor mentira que has dicho?",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  }
];