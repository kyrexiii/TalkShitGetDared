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
    id: "en_nsfw_t001",
    text: "What's your wildest sexual fantasy?",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "en_nsfw_t002",
    text: "Have you ever had a one-night stand?",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "en_nsfw_t003",
    text: "What's the kinkiest thing you've ever done?",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "en_nsfw_t004",
    text: "Have you ever cheated on a partner?",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "en_nsfw_t005",
    text: "What's your most embarrassing sexual experience?",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "en_nsfw_t006",
    text: "Have you ever been caught in the act?",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "en_nsfw_t007",
    text: "What's your guilty pleasure in bed?",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "en_nsfw_t008",
    text: "Have you ever sent nudes to someone?",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "en_nsfw_t009",
    text: "What's the most public place you've been intimate?",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "en_nsfw_t010",
    text: "Have you ever role-played in the bedroom?",
    contributor: "core#0001",
    difficulty: "medium",
    category: "personal"
  }
];