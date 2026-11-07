/**
 * Baby Mo pose library — 50 renders in public/baby-mo-poses/baby-mo-<name>.png
 * (transparent). Use in StoryArt scenes with  mo: [{ pose: "<name>", x }].
 * Same shape as the Ais / friends libraries so the team pose browser can
 * list every character together.
 */
import type { AisCategory } from "./ais-poses";

export interface MoPose {
  /** file: baby-mo-<name>.png */
  name: string;
  category: AisCategory;
  mood: string;
  use: string;
  /** sitting / kneeling / lying */
  low?: boolean;
  /** feet off the ground */
  air?: boolean;
}

export const MO_POSES: MoPose[] = [
  { name: "alright", category: "joy", mood: "cheeky", use: "Wink with finger-guns. \"Alright!\", agreeing, confident, ready for a plan." },
  { name: "idea", category: "think", mood: "bright", use: "Index finger up. Getting an idea, remembering, \"I know!\"." },
  { name: "ok", category: "greet", mood: "cheerful", use: "One hand up, eyes smiling. Hello, okay, saying yes politely." },
  { name: "pose-01", category: "greet", mood: "playful", use: "Wink and wave. Hello, goodbye, a friendly greeting." },
  { name: "pose-02", category: "celebrate", mood: "overjoyed", use: "Jumping with knees tucked, laughing. Big happy moments, \"Hooray!\".", air: true },
  { name: "pose-03", category: "feel", mood: "giggly", use: "Hand over mouth, one leg up. Giggling, a secret, a funny surprise." },
  { name: "pose-04", category: "joy", mood: "proud", use: "Hands on hips. Proud, confident, \"I did it myself!\"." },
  { name: "pose-05", category: "feel", mood: "hopeful", use: "Hands clasped under chin. Asking nicely, hoping, wanting something." },
  { name: "pose-06", category: "calm", mood: "calm", use: "Sitting on the floor, legs forward. Listening, resting, waiting.", low: true },
  { name: "pose-07", category: "feel", mood: "blissful", use: "Hands on cheeks, eyes closed. Delicious food, feeling loved, shy happiness." },
  { name: "pose-08", category: "explore", mood: "excited", use: "Lunging and pointing to the side. \"Look over there!\", showing the way." },
  { name: "pose-09", category: "feel", mood: "sad", use: "Rubbing eyes, crying, one knee up. Hurt, upset, missing someone." },
  { name: "pose-10", category: "feel", mood: "sad", use: "Crouched, hands over face. Crying, scared, hiding, embarrassed.", low: true },
  { name: "pose-11", category: "play", mood: "playful", use: "Mid-jump crouch, hand up. Bouncing, playing, jumping in puddles.", air: true },
  { name: "pose-12", category: "bedtime", mood: "peaceful", use: "Sitting, hands together, eyes closed. Sleepy, calm du'a, bedtime.", low: true },
  { name: "pose-13", category: "greet", mood: "friendly", use: "Sitting back on the floor, waving. Hello from the floor, playtime.", low: true },
  { name: "pose-14", category: "calm", mood: "gentle", use: "Standing, hand on chest. Sincere, saying sorry, \"me?\", gentle talk." },
  { name: "pose-15", category: "explore", mood: "curious", use: "Arm stretched forward, pointing. Showing something, \"there it is!\"." },
  { name: "pose-16", category: "think", mood: "sly", use: "Wink, hand by cheek. Listening closely, a little secret, thinking." },
  { name: "pose-17", category: "feel", mood: "tired", use: "Lying face down on the floor. Fell over, exhausted, flopped down.", low: true },
  { name: "pose-18", category: "calm", mood: "relaxed", use: "Sitting on the floor, leaning back on one hand. Resting, watching.", low: true },
  { name: "pose-19", category: "play", mood: "focused", use: "Balancing a book on his head, arms out. Games, balance, being careful." },
  { name: "pose-20", category: "play", mood: "joyful", use: "Arms wide like an aeroplane. Running and playing, flying, balance." },
  { name: "pose-21", category: "routine", mood: "content", use: "Walking, hand on tummy. Hungry, full tummy, walking along." },
  { name: "pose-22", category: "learn", mood: "earnest", use: "Hand on chest, mouth open. Speaking up, reciting, telling a story." },
  { name: "pose-23", category: "think", mood: "unsure", use: "Shrugging, palms up. \"I don't know\", confused, asking why." },
  { name: "pose-24", category: "greet", mood: "eager", use: "One hand raised. Waving, raising a hand to answer, \"me!\"." },
  { name: "pose-25", category: "joy", mood: "happy", use: "Thumbs up and wink. Good job, agreeing, \"great!\"." },
  { name: "pose-26", category: "feel", mood: "excited", use: "Both hands up by his face. Eager, can't wait, about to open a present." },
  { name: "pose-27", category: "joy", mood: "determined", use: "Fists clenched. Determined, \"I can do it!\", getting brave." },
  { name: "pose-28", category: "feel", mood: "bashful", use: "Hands behind head, grinning. Shy, caught out, a cheeky \"oops\"." },
  { name: "pose-29", category: "joy", mood: "confident", use: "Wink, thumb pointing at himself. \"Leave it to me!\", volunteering." },
  { name: "pose-30", category: "play", mood: "carefree", use: "Leaning, eyes closed, swaying. Dancing, humming, a happy breeze." },
  { name: "pose-31", category: "feel", mood: "amazed", use: "Hands by cheeks, big eyes. Amazed, surprised, \"so cool!\"." },
  { name: "pose-32", category: "greet", mood: "cheerful", use: "Walking and waving. Arriving, leaving for school, greeting on the way." },
  { name: "pose-33", category: "feel", mood: "worried", use: "Arms out, worried face. Uh-oh, nervous, something went wrong." },
  { name: "pose-34", category: "explore", mood: "curious", use: "Leaning forward, arms back. Peeking, sneaking up, ready to dash." },
  { name: "pose-35", category: "feel", mood: "shy", use: "Hands at cheeks, blushing smile. Shy, flattered, touched." },
  { name: "pose-36", category: "calm", mood: "thoughtful", use: "Kneeling, hands crossed on chest. Quiet moment, thinking, being still.", low: true },
  { name: "pose-37", category: "joy", mood: "delighted", use: "Hands on cheeks, big smile. Delighted, excited news, yummy." },
  { name: "pose-38", category: "feel", mood: "sad", use: "Seen from behind, sitting, head down. Lonely, sulking, feeling sorry.", low: true },
  { name: "pose-39", category: "bedtime", mood: "sleepy", use: "Sitting, hugging knees, eyes closed. Sleepy, tired, sad and quiet.", low: true },
  { name: "pose-40", category: "feel", mood: "surprised", use: "Arms down, mouth open. Small surprise, \"oh!\", noticing something." },
  { name: "pose-41", category: "care", mood: "loving", use: "Arms wide open. Welcome hug, \"come here!\", happy to see someone." },
  { name: "pose-42", category: "routine", mood: "hopeful", use: "Walking, hands clasped, looking up. Going to pray, hoping, on the way." },
  { name: "run", category: "play", mood: "energetic", use: "Running fast. Racing, hurrying, chasing, playing tag." },
  { name: "thank-you", category: "care", mood: "grateful", use: "Palms together, eyes closed, smiling. Thank you, du'a, grateful." },
  { name: "wow", category: "feel", mood: "surprised", use: "Hand at mouth, big eyes. Wow, gasp, amazed." },
  { name: "yes", category: "celebrate", mood: "triumphant", use: "One arm up cheering. Yes!, winning, finishing a task." },
  { name: "yeyy", category: "celebrate", mood: "overjoyed", use: "Arms up, cheering on the move. Yay!, party, excited arrival." },
];

export const moPoseSrc = (name: string) => `/baby-mo-poses/baby-mo-${name}.png`;
