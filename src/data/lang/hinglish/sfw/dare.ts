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
    id: "hn_sfw_d001",
    text: "Apni sabse dramatic avaaz mai ek voice note bhejo 'I miss you so much 😩' bolte huye.",
    contributor: "godkode",
    difficulty: "easy",
    category: "funny"
  },
  {
    id: "hn_sfw_d002",
    text: "Apni profile picture hatake uske jagah koi cursed image laga do 10 minutes ke liye.",
    contributor: "godkode",
    difficulty: "medium",
    category: "embarrassing"
  },
  {
    id: "hn_sfw_d003",
    text: "Apna agla message aankhe band karke type krna — editing allowed nahi hai.",
    contributor: "godkode",
    difficulty: "easy",
    category: "funny"
  },
  {
    id: "hn_sfw_d004",
    text: "Apne gallery mai se sabse recent screenshot bhejo (private nahi ho toh).",
    contributor: "godkode",
    difficulty: "medium",
    category: "social"
  },
  {
    id: "hn_sfw_d005",
    text: "Apne partner ya kisi dost ko koi cringey pickup line bhejo.",
    contributor: "godkode",
    difficulty: "easy",
    category: "funny"
  },
  {
    id: "hn_sfw_d006",
    text: "Kisi random gaane ka chorus gaake voice note bhejo.",
    contributor: "godkode",
    difficulty: "medium",
    category: "embarrassing"
  },
  {
    id: "hn_sfw_d007",
    text: "Apne crush ya best friend ko 'Do you ever think about me?' likh ke bhejo aur unke reply ka screenshot bhejo.`                                                                        ` and screenshot the reply.",
    contributor: "godkode",
    difficulty: "hard",
    category: "social"
  },
  {
    id: "hn_sfw_d008",
    text: "Voice ya text mai kisi celebrity hone ki acting karo jo fake apology video bana raha ho.",
    contributor: "godkode",
    difficulty: "easy",
    category: "funny"
  },
  {
    id: "hn_sfw_d009",
    text: "Apne selfie bhejo abhi, bina filters ke aur bina retakes ke.",
    contributor: "godkode",
    difficulty: "medium",
    category: "embarrassing"
  },
  {
    id: "hn_sfw_d010",
    text: "Apne story pe 'I'm feeling cute today 😌' post kar do 5 minute ke liye.",
    contributor: "godkode",
    difficulty: "hard",
    category: "social"
  },
  {
    id: "hn_sfw_d011",
    text: "Ek gif bhejo aapke current mood ko perfectly represent kare.",
    contributor: "godkode",
    difficulty: "easy",
    category: "personal"
  },
  {
    id: "hn_sfw_d012",
    text: "Ek fake dramatic breakup text like ke kisi random insaan ko bhejo (badme explain karna ye dare tha).",
    contributor: "godkode",
    difficulty: "hard",
    category: "funny"
  },
  {
    id: "hn_sfw_d013",
    text: "Agle 5 messages ke liye sirf emojis mai baat karo.",
    contributor: "godkode",
    difficulty: "medium",
    category: "funny"
  },
  {
    id: "hn_sfw_d014",
    text: "Apne bio mai 'I'm single again 😭' likh do agle 10 minute ke liye.",
    contributor: "godkode",
    difficulty: "hard",
    category: "social"
  },
  {
    id: "hn_sfw_d015",
    text: "text-to-speech ka use karke apne dosto ka diya ek weird paragraph padho.",
    contributor: "godkode",
    difficulty: "medium",
    category: "funny"
  },
  {
    id: "hn_sfw_d016",
    text: "Apne DM list mai sabse pehle user ko ek wholesome compliment do.",
    contributor: "godkode",
    difficulty: "easy",
    category: "social"
  },
  {
    id: "hn_sfw_d017",
    text: "AI voice changer ka use karke kisi cartoon character ki avaaz mai ek line bolke bhejo.",
    contributor: "godkode",
    difficulty: "medium",
    category: "funny"
  },
  {
    id: "hn_sfw_d018",
    text: "Aise natak karo jaise tumhara dil tut gaya ko apne pet rock ko khone ke wajah se aur usko voice note mai bhejo.",
    contributor: "godkode",
    difficulty: "medium",
    category: "funny"
  },
  {
    id: "hn_sfw_d019",
    text: "Apne current mood ke baare mai ek 5 second ka rap banake bhejo.",
    contributor: "godkode",
    difficulty: "medium",
    category: "funny"
  },
  {
    id: "hn_sfw_d020",
    text: "Tumhara last saved meme dikhao aur usko 1-10 ke bich mai rate karo.",
    contributor: "godkode",
    difficulty: "easy",
    category: "personal"
  },
  {
    id: "hn_sfw_d021",
    text: "Apne AI assistant (jese Siri ya Alexa) ko 'I love you' bolo and unke reply ko record karke bhejo.",
    contributor: "godkode",
    difficulty: "easy",
    category: "funny"
  },
  {
    id: "hn_sfw_d022",
    text: "Ek tongue twister ko jaldi se 3 baar repeat karke uska voice note bhejo.",
    contributor: "godkode",
    difficulty: "medium",
    category: "funny"
  }
];
