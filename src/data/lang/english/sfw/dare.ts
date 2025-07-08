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
    id: "en_sfw_d001",
    text: "Send a voice note saying 'I miss you so much 😩' in your most dramatic voice.",
    contributor: "kyrexiii",
    difficulty: "easy",
    category: "funny"
  },
  {
    id: "en_sfw_d002",
    text: "Change your profile picture to a cursed image for 10 minutes.",
    contributor: "kyrexiii",
    difficulty: "medium",
    category: "embarrassing"
  },
  {
    id: "en_sfw_d003",
    text: "Type your next message with your eyes closed — no edits.",
    contributor: "kyrexiii",
    difficulty: "easy",
    category: "funny"
  },
  {
    id: "en_sfw_d004",
    text: "Send your most recent screenshot in the group chat (unless it’s private).",
    contributor: "kyrexiii",
    difficulty: "medium",
    category: "social"
  },
  {
    id: "en_sfw_d005",
    text: "Send a cringey pickup line to your partner or a random friend.",
    contributor: "kyrexiii",
    difficulty: "easy",
    category: "funny"
  },
  {
    id: "en_sfw_d006",
    text: "Sing the chorus of a random song in voice message — no backing track.",
    contributor: "kyrexiii",
    difficulty: "medium",
    category: "embarrassing"
  },
  {
    id: "en_sfw_d007",
    text: "Text your crush or best friend: 'Do you ever think about me?' and screenshot the reply.",
    contributor: "kyrexiii",
    difficulty: "hard",
    category: "social"
  },
  {
    id: "en_sfw_d008",
    text: "Pretend you’re a celebrity giving a fake apology video in voice or text.",
    contributor: "kyrexiii",
    difficulty: "easy",
    category: "funny"
  },
  {
    id: "en_sfw_d009",
    text: "Send a selfie right now, no filters or retakes allowed.",
    contributor: "kyrexiii",
    difficulty: "medium",
    category: "embarrassing"
  },
  {
    id: "en_sfw_d010",
    text: "Post 'I'm feeling cute today 😌' on your story for 5 minutes.",
    contributor: "kyrexiii",
    difficulty: "hard",
    category: "social"
  },
  {
    id: "en_sfw_d011",
    text: "Send a gif that perfectly represents your current mood.",
    contributor: "kyrexiii",
    difficulty: "easy",
    category: "personal"
  },
  {
    id: "en_sfw_d012",
    text: "Write a fake dramatic breakup text and send it to someone (then explain it's a dare).",
    contributor: "kyrexiii",
    difficulty: "hard",
    category: "funny"
  },
  {
    id: "en_sfw_d013",
    text: "Talk in emojis only for the next 5 messages.",
    contributor: "kyrexiii",
    difficulty: "medium",
    category: "funny"
  },
  {
    id: "en_sfw_d014",
    text: "Put 'I'm single again 😭' in your bio for 10 minutes.",
    contributor: "kyrexiii",
    difficulty: "hard",
    category: "social"
  },
  {
    id: "en_sfw_d015",
    text: "Use text-to-speech and read a weird paragraph your friends give you.",
    contributor: "kyrexiii",
    difficulty: "medium",
    category: "funny"
  },
  {
    id: "en_sfw_d016",
    text: "Send a wholesome compliment to the first person in your DM list.",
    contributor: "kyrexiii",
    difficulty: "easy",
    category: "social"
  },
  {
    id: "en_sfw_d017",
    text: "Use an AI voice changer to sound like a cartoon character and send a line.",
    contributor: "kyrexiii",
    difficulty: "medium",
    category: "funny"
  },
  {
    id: "en_sfw_d018",
    text: "Act like you're heartbroken over losing a pet rock in voice message.",
    contributor: "kyrexiii",
    difficulty: "medium",
    category: "funny"
  },
  {
    id: "en_sfw_d019",
    text: "Make a 5-second rap about your current mood and send it.",
    contributor: "kyrexiii",
    difficulty: "medium",
    category: "funny"
  },
  {
    id: "en_sfw_d020",
    text: "Show the last meme you saved and rate it 1–10.",
    contributor: "kyrexiii",
    difficulty: "easy",
    category: "personal"
  },
  {
    id: "en_sfw_d021",
    text: "Tell your AI assistant (like Siri or Alexa) 'I love you' and record the reply.",
    contributor: "kyrexiii",
    difficulty: "easy",
    category: "funny"
  },
  {
    id: "en_sfw_d022",
    text: "Try to say a tongue twister in a voice message — three times fast.",
    contributor: "kyrexiii",
    difficulty: "medium",
    category: "funny"
  }
];
