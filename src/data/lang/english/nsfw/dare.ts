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
    id: "en_nsfw_d001",
    text: "Send a risky voice note pretending you're moaning their name... make it cringey on purpose.",
    contributor: "himanshu137",
    difficulty: "medium",
    category: "intimate"
  },
  {
    id: "en_nsfw_d002",
    text: "Tell your partner you dreamt of your ex last night and don’t explain for 5 minutes.",
    contributor: "himanshu137",
    difficulty: "hard",
    category: "confession"
  },
  {
    id: "en_nsfw_d003",
    text: "Send your most embarrassing selfie to your partner right now.",
    contributor: "himanshu137",
    difficulty: "easy",
    category: "embarrassing"
  },
  {
    id: "en_nsfw_d004",
    text: "Write a 'breakup message' and send it. Wait 30 seconds before saying it's a dare.",
    contributor: "himanshu137",
    difficulty: "extreme",
    category: "relationships"
  },
  {
    id: "en_nsfw_d005",
    text: "Send a flirty message to your ex and screenshot their reply (or fake one and scare your partner).",
    contributor: "himanshu137",
    difficulty: "extreme",
    category: "confession"
  },
  {
    id: "en_nsfw_d006",
    text: "Call your partner by your ex’s name during VC or chat and act normal.",
    contributor: "himanshu137",
    difficulty: "hard",
    category: "funny"
  },
  {
    id: "en_nsfw_d007",
    text: "Send a blurry teasing picture, then act like it was a mistake.",
    contributor: "himanshu137",
    difficulty: "medium",
    category: "intimate"
  },
  {
    id: "en_nsfw_d008",
    text: "Tell your partner one private thing you still remember about your ex.",
    contributor: "himanshu137",
    difficulty: "hard",
    category: "confession"
  },
  {
    id: "en_nsfw_d009",
    text: "Send a pickup line... but it's meant for someone else 'by mistake'.",
    contributor: "himanshu137",
    difficulty: "medium",
    category: "social"
  },
  {
    id: "en_nsfw_d010",
    text: "Voice message: Rate your partner’s looks like a food review (with ASMR style).",
    contributor: "himanshu137",
    difficulty: "hard",
    category: "funny"
  },
  {
    id: "en_nsfw_d011",
    text: "Send a risky confession you've never told your partner before.",
    contributor: "himanshu137",
    difficulty: "hard",
    category: "confession"
  },
  {
    id: "en_nsfw_d012",
    text: "Pretend to flirt with a bot or AI and act serious for 2 minutes.",
    contributor: "himanshu137",
    difficulty: "easy",
    category: "funny"
  },
  {
    id: "en_nsfw_d013",
    text: "Send a shirtless/makeup-free selfie with the caption 'Rate me'.",
    contributor: "himanshu137",
    difficulty: "medium",
    category: "embarrassing"
  },
  {
    id: "en_nsfw_d014",
    text: "Text your partner: 'I think we should take a break' and ghost them for 10 minutes.",
    contributor: "himanshu137",
    difficulty: "extreme",
    category: "relationships"
  },
  {
    id: "en_nsfw_d015",
    text: "Post 'Who wants to flirt?' on your story for 2 minutes.",
    contributor: "himanshu137",
    difficulty: "extreme",
    category: "social"
  },
  {
    id: "en_nsfw_d016",
    text: "Send a flirty compliment to someone random in a group chat.",
    contributor: "himanshu137",
    difficulty: "hard",
    category: "social"
  },
  {
    id: "en_nsfw_d017",
    text: "Create a meme about your partner's bad habits and send it.",
    contributor: "himanshu137",
    difficulty: "medium",
    category: "funny"
  },
  {
    id: "en_nsfw_d018",
    text: "Send a paragraph describing your 'dream date'... but don’t include your current partner in it.",
    contributor: "himanshu137",
    difficulty: "hard",
    category: "relationships"
  },
  {
    id: "en_nsfw_d019",
    text: "Ask your partner what they hate most about your behavior — and don’t react.",
    contributor: "himanshu137",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "en_nsfw_d020",
    text: "Send a super cringe love poem made in under 60 seconds.",
    contributor: "himanshu137",
    difficulty: "easy",
    category: "funny"
  },
  {
    id: "en_nsfw_d021",
    text: "Send a pic of your most 'unsexy' face right now.",
    contributor: "himanshu137",
    difficulty: "easy",
    category: "embarrassing"
  },
  {
    id: "en_nsfw_d022",
    text: "Send your full Google search history for today.",
    contributor: "himanshu137",
    difficulty: "hard",
    category: "confession"
  },
  {
    id: "en_nsfw_d023",
    text: "Let your partner go through your last 5 DMs (screenshot).",
    contributor: "himanshu137",
    difficulty: "hard",
    category: "relationships"
  },
  {
    id: "en_nsfw_d024",
    text: "Call your partner and just breathe heavily for 15 seconds.",
    contributor: "himanshu137",
    difficulty: "medium",
    category: "intimate"
  },
  {
    id: "en_nsfw_d025",
    text: "Reveal one thing you wish your partner did more (in bed or emotionally).",
    contributor: "himanshu137",
    difficulty: "medium",
    category: "confession"
  },
  {
    id: "en_nsfw_d026",
    text: "Send a text like: 'I’ve been thinking of someone else lately...' then drop a pet’s name.",
    contributor: "himanshu137",
    difficulty: "hard",
    category: "funny"
  },
  {
    id: "en_nsfw_d027",
    text: "Write a breakup message and get feedback from the group.",
    contributor: "himanshu137",
    difficulty: "extreme",
    category: "relationships"
  },
  {
    id: "en_nsfw_d028",
    text: "Send a dirty joke to your crush or partner.",
    contributor: "himanshu137",
    difficulty: "easy",
    category: "intimate"
  },
  {
    id: "en_nsfw_d029",
    text: "Reveal your guilty pleasure — something you'd never admit publicly.",
    contributor: "himanshu137",
    difficulty: "medium",
    category: "confession"
  },
  {
    id: "en_nsfw_d030",
    text: "Pretend to have a crush on your partner’s sibling (just for the chaos).",
    contributor: "himanshu137",
    difficulty: "extreme",
    category: "funny"
  },
  {
    id: "en_nsfw_d031",
    text: "Call your partner and say 'I have something to tell you...' then act frozen in silence.",
    contributor: "himanshu137",
    difficulty: "medium",
    category: "funny"
  },
  {
    id: "en_nsfw_d032",
    text: "Act like you’re mad at your partner and ignore them for 5 minutes.",
    contributor: "himanshu137",
    difficulty: "hard",
    category: "relationships"
  },
  {
    id: "en_nsfw_d033",
    text: "Do a seductive voice message using your best anime character impression.",
    contributor: "himanshu137",
    difficulty: "medium",
    category: "funny"
  },
  {
    id: "en_nsfw_d034",
    text: "Reveal your weirdest fantasy and act it out (voice or text).",
    contributor: "himanshu137",
    difficulty: "hard",
    category: "intimate"
  },
  {
    id: "en_nsfw_d035",
    text: "Pretend to cry on call and say 'you’re not enough' just to test their reaction (apologize after).",
    contributor: "himanshu137",
    difficulty: "extreme",
    category: "relationships"
  },
  {
    id: "en_nsfw_d036",
    text: "Send your most recent pic in bed, no matter how awkward.",
    contributor: "himanshu137",
    difficulty: "easy",
    category: "embarrassing"
  },
  {
    id: "en_nsfw_d037",
    text: "Send a dare to your partner that they *must* complete or face a penalty (you decide).",
    contributor: "himanshu137",
    difficulty: "medium",
    category: "personal"
  },
  {
    id: "en_nsfw_d038",
    text: "Tell the group your biggest red flag in a partner — be brutally honest.",
    contributor: "himanshu137",
    difficulty: "medium",
    category: "confession"
  },
  {
    id: "en_nsfw_d039",
    text: "Send a fake sext message and post it in the group.",
    contributor: "himanshu137",
    difficulty: "hard",
    category: "funny"
  },
  {
    id: "en_nsfw_d040",
    text: "Confess something you still stalk about your ex.",
    contributor: "himanshu137",
    difficulty: "hard",
    category: "confession"
  }
];