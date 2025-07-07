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
    id: "en_sfw_t001",
    text: "What's your biggest fear?",
    contributor: "core#0001",
    difficulty: "easy",
    category: "personal"
  },
  {
    id: "en_sfw_t002",
    text: "What's the most embarrassing thing that's ever happened to you?",
    contributor: "core#0001",
    difficulty: "medium",
    category: "embarrassing"
  },
  {
    id: "en_sfw_t003",
    text: "What's your biggest secret?",
    contributor: "core#0001",
    difficulty: "hard",
    category: "confession"
  },
  {
    id: "en_sfw_t004",
    text: "Who was your first crush?",
    contributor: "core#0001",
    difficulty: "easy",
    category: "relationships"
  },
  {
    id: "en_sfw_t005",
    text: "What's something you've never told your parents?",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "en_sfw_t006",
    text: "What's the weirdest dream you've ever had?",
    contributor: "core#0001",
    difficulty: "easy",
    category: "funny"
  },
  {
    id: "en_sfw_t007",
    text: "If you could change one thing about yourself, what would it be?",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "en_sfw_t008",
    text: "What's the most childish thing you still do?",
    contributor: "core#0001",
    difficulty: "easy",
    category: "funny"
  },
  {
    id: "en_sfw_t009",
    text: "What's your most irrational fear?",
    contributor: "core#0001",
    difficulty: "easy",
    category: "personal"
  },
  {
    id: "en_sfw_t010",
    text: "What's the worst lie you've ever told?",
    contributor: "core#0001",
    difficulty: "hard",
    category: "confession"
  }
];