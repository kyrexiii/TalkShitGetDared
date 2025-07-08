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
    text: "¿Alguna vez has ignorado un mensaje a propósito?",
    contributor: "himanshu137",
    difficulty: "easy",
    category: "social"
  },
  {
    id: "es_sfw_t002",
    text: "¿Todavía stalkeas a tu ex o a un viejo crush?",
    contributor: "himanshu137",
    difficulty: "medium",
    category: "confession"
  },
  {
    id: "es_sfw_t003",
    text: "¿Cuál fue la última mentira que dijiste por mensaje?",
    contributor: "himanshu137",
    difficulty: "medium",
    category: "confession"
  },
  {
    id: "es_sfw_t004",
    text: "¿Te has sentido solo incluso mientras chateabas con alguien?",
    contributor: "himanshu137",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "es_sfw_t005",
    text: "¿Has eliminado un mensaje solo porque pensaste que era tonto?",
    contributor: "himanshu137",
    difficulty: "easy",
    category: "embarrassing"
  }
];
