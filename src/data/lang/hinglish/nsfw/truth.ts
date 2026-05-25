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
        id: "hi_nsfw_t001",
        text: "Tumhara sabse wild sexual fantasy kya hai?",
        contributor: "kyrexiii",
        difficulty: "hard",
        category: "intimate"
    },
    {
        id: "hi_nsfw_t002",
        text: "Kya tumne kabhi sexting ki hai? Agar haan, toh kiske saath?",
        contributor: "kyrexiii",
        difficulty: "medium",
        category: "confession"
    },
    {
        id: "hi_nsfw_t003",
        text: "Tumhari favorite sex position kaunsi hai?",
        contributor: "kyrexiii",
        difficulty: "medium",
        category: "intimate"
    },
    {
        id: "hi_nsfw_t004",
        text: "Kya tumne kabhi public place mein makeout ya sex kiya hai?",
        contributor: "kyrexiii",
        difficulty: "hard",
        category: "confession"
    },
    {
        id: "hi_nsfw_t005",
        text: "Tumhara sabse bada turn-on kya hai?",
        contributor: "kyrexiii",
        difficulty: "easy",
        category: "intimate"
    },
    {
        id: "hi_nsfw_t006",
        text: "Kya tumne kabhi one-night stand kiya hai?",
        contributor: "kyrexiii",
        difficulty: "medium",
        category: "confession"
    },
    {
        id: "hi_nsfw_t007",
        text: "Kya tumne kabhi apne dost ke bhai/behen ke baare mein ganda socha hai?",
        contributor: "kyrexiii",
        difficulty: "hard",
        category: "confession"
    },
    {
        id: "hi_nsfw_t008",
        text: "Tumne last time porn kab dekha tha?",
        contributor: "kyrexiii",
        difficulty: "easy",
        category: "personal"
    },
    {
        id: "hi_nsfw_t009",
        text: "Kya tumne kabhi nudes bheje hain?",
        contributor: "kyrexiii",
        difficulty: "medium",
        category: "confession"
    },
    {
        id: "hi_nsfw_t010",
        text: "Tumhara sabse embarrassing sex moment kya tha?",
        contributor: "kyrexiii",
        difficulty: "hard",
        category: "embarrassing"
    },
    {
        id: "hi_nsfw_t011",
        text: "Kya tumne kabhi roleplay try kiya hai?",
        contributor: "kyrexiii",
        difficulty: "medium",
        category: "intimate"
    },
    {
        id: "hi_nsfw_t012",
        text: "Agar tumhe is room mein kisi ke saath hookup karna ho, toh wo kaun hoga?",
        contributor: "kyrexiii",
        difficulty: "extreme",
        category: "social"
    },
    {
        id: "hi_nsfw_t013",
        text: "Kya tumne kabhi fake orgasm kiya hai?",
        contributor: "kyrexiii",
        difficulty: "medium",
        category: "confession"
    },
    {
        id: "hi_nsfw_t014",
        text: "Tumhara sabse bada turn-off kya hai?",
        contributor: "kyrexiii",
        difficulty: "easy",
        category: "intimate"
    },
    {
        id: "hi_nsfw_t015",
        text: "Kya tumne kabhi threesome kiya hai ya karna chahoge?",
        contributor: "kyrexiii",
        difficulty: "hard",
        category: "intimate"
    }
];
