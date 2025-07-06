// Define Prompt interface inline to avoid import issues
interface Prompt {
  id: string;
  prompt: string;
}

export const truthPrompts: Prompt[] = [
  {
    id: "en_nsfw_t001",
    prompt: "What's your biggest turn-on?"
  },
  {
    id: "en_nsfw_t002",
    prompt: "What's your biggest turn-off?"
  },
  {
    id: "en_nsfw_t003",
    prompt: "What's your favorite position?"
  },
  {
    id: "en_nsfw_t004",
    prompt: "What's the kinkiest thing you've ever done?"
  },
  {
    id: "en_nsfw_t005",
    prompt: "What's your wildest fantasy?"
  },
  {
    id: "en_nsfw_t006",
    prompt: "Have you ever had a one-night stand?"
  },
  {
    id: "en_nsfw_t007",
    prompt: "What's the most romantic thing someone has done for you?"
  },
  {
    id: "en_nsfw_t008",
    prompt: "What's your biggest regret in bed?"
  },
  {
    id: "en_nsfw_t009",
    prompt: "What's the most embarrassing thing that's happened to you during intimacy?"
  },
  {
    id: "en_nsfw_t010",
    prompt: "What's the weirdest thing that turns you on?"
  }
];