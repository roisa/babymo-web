/**
 * Baby Mo & friends pose library — Adam (older brother) and Ayah (Dad).
 *
 *   public/adam-poses/adam-<name>.png   34 renders (incl. 3 six-frame tennis swings)
 *   public/ayah-poses/ayah-<name>.png   90 renders (3 of them with Baby Mo in the image)
 *
 * Every PNG is 800×800, transparent, feet on the same ground line as Baby Mo
 * and Baby Ais (y = 725). Scale is normalised by head size, so a sitting pose
 * sits at the right height next to a standing one.
 *
 * In StoryArt scenes:  mo: [{ who: "adam", pose: "<name>", x }]
 * StoryArt draws friends bigger than the twins (FRIEND_SCALE): Adam stands
 * 1.4× Baby Mo's height, Ayah 1.9×. Keep `s` the same as Mo's in a scene.
 *
 * Pick by `use`. `alt` marks a near-duplicate kept so neighbouring pages
 * don't repeat the same image. `duo` poses already include Baby Mo.
 */
import type { AisCategory } from "./ais-poses";

export type Friend = "adam" | "ayah";
export type FriendCategory = AisCategory;

export interface FriendPose {
  /** file: <who>-<name>.png */
  name: string;
  category: FriendCategory;
  mood: string;
  /** objects drawn in the image (so the scene doesn't add them twice) */
  props?: string[];
  /** what the pose shows and the story moments it suits */
  use: string;
  /** sitting / kneeling / lying — the figure is lower */
  low?: boolean;
  /** near-duplicate of another pose */
  alt?: boolean;
  /** feet off the ground (jump) */
  air?: boolean;
  /** Baby Mo is part of the image */
  duo?: boolean;
}

/** Display size relative to Baby Mo / Ais at the same `s`. */
export const FRIEND_SCALE: Record<Friend, number> = { adam: 1.315, ayah: 1.784 };

export const ADAM_POSES: FriendPose[] = [
  { name: "wave-hello", category: "greet", mood: "happy", use: "Standing, one hand up waving, big smile. Arrivals, hello, goodbye." },
  { name: "dua-hands", category: "worship", mood: "calm", use: "Standing, palms cupped in du'a, eyes closed. Before eating, bedtime du'a, thanking Allah." },
  { name: "quran-read-sit", category: "worship", mood: "calm", props: ["Qur'an"], use: "Sitting cross-legged holding an open Qur'an, gentle smile. Reading, Ramadan, teaching the twins.", low: true },
  { name: "sedekah-box", category: "care", mood: "happy", props: ["charity box", "coin"], use: "Dropping a coin into a \"Sedekah\" box. Charity, sharing, Friday, Ramadan stories." },
  { name: "tennis-forehand-1", category: "play", mood: "focused", props: ["racket"], use: "Forehand frame 1/6: ready stance. Animation or the start of a rally." },
  { name: "tennis-forehand-2", category: "play", mood: "focused", props: ["racket"], use: "Forehand frame 2/6: racket up, turning." },
  { name: "tennis-forehand-3", category: "play", mood: "focused", props: ["racket"], use: "Forehand frame 3/6: take-back, free hand reaching out." },
  { name: "tennis-forehand-4", category: "play", mood: "focused", props: ["racket"], use: "Forehand frame 4/6: racket dropping low, stepping in." },
  { name: "tennis-forehand-5", category: "play", mood: "focused", props: ["racket", "ball"], use: "Forehand frame 5/6: contact, ball on the strings." },
  { name: "tennis-forehand-6", category: "play", mood: "happy", props: ["racket"], use: "Forehand frame 6/6: follow-through, satisfied smile." },
  { name: "tennis-backhand-1", category: "play", mood: "calm", props: ["racket"], use: "Two-handed backhand 1/6: ready stance." },
  { name: "tennis-backhand-2", category: "play", mood: "focused", props: ["racket"], use: "Backhand 2/6: shoulder turn, racket up." },
  { name: "tennis-backhand-3", category: "play", mood: "focused", props: ["racket"], use: "Backhand 3/6: take-back over the shoulder." },
  { name: "tennis-backhand-4", category: "play", mood: "focused", props: ["racket"], use: "Backhand 4/6: swing low, stepping in." },
  { name: "tennis-backhand-5", category: "play", mood: "focused", props: ["racket", "ball"], use: "Backhand 5/6: contact, ball on the strings." },
  { name: "tennis-backhand-6", category: "play", mood: "happy", props: ["racket"], use: "Backhand 6/6: follow-through over the shoulder, laughing." },
  { name: "tennis-swing-1", category: "play", mood: "calm", props: ["racket"], use: "Second forehand set 1/6: ready, smiling. Front-facing, friendlier for book pages." },
  { name: "tennis-swing-2", category: "play", mood: "focused", props: ["racket"], use: "Swing 2/6: racket up, free hand pointing at the ball." },
  { name: "tennis-swing-3", category: "play", mood: "focused", props: ["racket", "ball"], use: "Swing 3/6: take-back, ball coming in." },
  { name: "tennis-swing-4", category: "play", mood: "focused", props: ["racket", "ball"], use: "Swing 4/6: contact, determined face." },
  { name: "tennis-swing-5", category: "play", mood: "happy", props: ["racket"], use: "Swing 5/6: follow-through." },
  { name: "tennis-swing-6", category: "play", mood: "happy", props: ["racket"], use: "Swing 6/6: finish over the shoulder, cheering." },
  { name: "tennis-hold-ball", category: "play", mood: "calm", props: ["racket", "ball"], use: "Standing relaxed, racket down, ball in hand. Before a match, \"want to play?\"" },
  { name: "tennis-serve-toss", category: "play", mood: "excited", props: ["racket", "ball"], use: "Serve: tossing the ball up, racket back. Start of a game." },
  { name: "tennis-hit-forehand", category: "play", mood: "happy", props: ["racket", "ball"], use: "Hitting a forehand, ball on the racket. Single-image \"playing tennis\"." },
  { name: "tennis-hit-backhand", category: "play", mood: "focused", props: ["racket", "ball"], use: "Two-handed backhand hit, ball arriving. Practice, trying hard." },
  { name: "tennis-ready-wide", category: "play", mood: "happy", props: ["racket"], use: "Wide ready stance, racket up, cheerful. Waiting for the ball, teaching." },
  { name: "tennis-win-fist", category: "celebrate", mood: "joy", props: ["racket"], use: "Fist up, eyes closed laughing, racket in hand. Winning a point, \"I did it!\"" },
  { name: "tennis-lunge-low", category: "play", mood: "happy", props: ["racket", "ball"], use: "Low lunge to a ball near the ground. Effort, not giving up." },
  { name: "tennis-jump-reach", category: "play", mood: "excited", props: ["racket"], use: "Jumping with racket and arms out. Big energy, excitement.", air: true },
  { name: "tennis-backhand-set", category: "play", mood: "focused", props: ["racket"], use: "Determined backhand set-up. Concentration, practice." },
  { name: "tennis-stretch-reach", category: "play", mood: "focused", props: ["racket", "ball"], use: "Stretching far, racket low to the ball. Trying hard, a near miss.", low: true },
  { name: "tennis-net-volley", category: "play", mood: "happy", props: ["racket", "ball", "net"], use: "At the net, volleying. The net is part of the image." },
  { name: "tennis-rest-bench", category: "routine", mood: "calm", props: ["bench", "towel", "water bottle", "racket", "ball"], use: "Resting on a bench, towel round his neck, drinking water. Break time, staying hydrated.", low: true },
];

export const AYAH_POSES: FriendPose[] = [
  { name: "calm-sit", category: "calm", mood: "calm", use: "Sitting cross-legged, eyes closed, hands resting on knees. Calm breathing, being patient, quiet moment.", low: true },
  { name: "eat-fruit-sit", category: "food", mood: "happy", props: ["fruit bowl"], use: "Sitting, eating fruit from a bowl. Healthy food, breakfast, sharing snacks.", low: true },
  { name: "drink-bottle-sit", category: "food", mood: "calm", props: ["water bottle"], use: "Sitting, drinking from a blue bottle, eyes closed. Thirst, after play, iftar.", low: true },
  { name: "cheer-fists-sit", category: "joy", mood: "joy", use: "Sitting, both fists up, laughing. Proud of the kids, \"hore!\"", low: true },
  { name: "grateful-heart-sit", category: "care", mood: "loving", props: ["heart"], use: "Sitting, hands on chest, eyes closed, little heart. Love, gratitude, alhamdulillah.", low: true },
  { name: "wave-welcome-sit", category: "greet", mood: "happy", use: "Sitting, waving with one hand, other hand open. Welcoming, calling the kids over.", low: true },
  { name: "idea-bulb-sit", category: "think", mood: "happy", props: ["light bulb"], use: "Sitting, finger on temple, light bulb. Having an idea, solving a problem.", low: true },
  { name: "question-shrug-sit", category: "think", mood: "puzzled", props: ["question mark"], use: "Sitting, palms up, question mark. Asking \"why?\", not knowing.", low: true },
  { name: "wave-thumbs-sit", category: "greet", mood: "happy", use: "Sitting, wave and thumbs up with a wink. Encouraging, \"good job!\"", low: true },
  { name: "arms-up-joy-sit", category: "celebrate", mood: "joy", use: "Sitting, both arms up, cheering. Big celebration, good news.", low: true },
  { name: "write-notebook-sit", category: "learn", mood: "focused", props: ["notebook", "pen"], use: "Sitting, writing in a notebook. Planning, homework help, lists.", low: true },
  { name: "video-call-sit", category: "screen", mood: "happy", props: ["tablet", "video icon"], use: "Sitting, waving at a video call on a tablet. Calling grandparents, Ayah away from home.", low: true },
  { name: "calm-sit-2", category: "calm", mood: "calm", use: "Alt of calm-sit (slightly different hands).", low: true, alt: true },
  { name: "eat-fruit-sit-2", category: "food", mood: "happy", props: ["fruit bowl"], use: "Alt of eat-fruit-sit.", low: true, alt: true },
  { name: "drink-bottle-sit-2", category: "food", mood: "calm", props: ["water bottle"], use: "Alt of drink-bottle-sit.", low: true, alt: true },
  { name: "doze-sit", category: "bedtime", mood: "sleepy", props: ["zzz"], use: "Sitting, head on hands, dozing, zzz. Tired, late night, bedtime.", low: true },
  { name: "cheer-arm-up-sit", category: "celebrate", mood: "joy", use: "Sitting, one fist up high, laughing. Victory, \"we did it!\"", low: true },
  { name: "read-book-happy-sit", category: "learn", mood: "happy", props: ["book"], use: "Sitting, reading a book, delighted. Story time, finding something in a book.", low: true },
  { name: "stand-arms-crossed", category: "calm", mood: "confident", use: "Standing, arms crossed, warm smile. Default standing Ayah, watching proudly." },
  { name: "idea-point-stand", category: "think", mood: "happy", use: "Standing, finger up, hand on hip. \"I know!\", explaining a rule." },
  { name: "thumbs-up-wink-lean", category: "joy", mood: "happy", use: "Leaning, thumbs up, wink. Approval, encouragement." },
  { name: "backpack-walk", category: "travel", mood: "happy", props: ["backpack"], use: "Walking with a backpack. Leaving for work, going on a trip, coming home." },
  { name: "wave-folder", category: "greet", mood: "happy", props: ["folder"], use: "Standing, waving, folder under the arm. Off to work, back from work." },
  { name: "check-watch", category: "routine", mood: "alert", props: ["watch"], use: "Standing, checking his watch. Time for prayer, running late, schedules." },
  { name: "laptop-stand", category: "screen", mood: "happy", props: ["laptop"], use: "Standing, typing on a laptop. Working from home, looking something up." },
  { name: "phone-call", category: "screen", mood: "happy", props: ["phone"], use: "Standing, talking on the phone, gesturing. Calling someone, good news." },
  { name: "cheer-knee-up", category: "celebrate", mood: "joy", use: "Standing, fists up, one knee raised. Excited celebration." },
  { name: "megaphone", category: "role", mood: "excited", props: ["megaphone"], use: "Announcing with a megaphone. Calling everyone, announcements, games." },
  { name: "clipboard-check", category: "routine", mood: "focused", props: ["clipboard", "pen"], use: "Ticking a checklist. Packing, chores, routines." },
  { name: "stop-hand", category: "feel", mood: "worried", use: "Palm out, \"wait!\", worried face. Stopping danger, being careful." },
  { name: "sleep-blanket", category: "bedtime", mood: "sleepy", props: ["pillow", "blanket"], use: "Lying asleep under a blanket. Night, nap, sick day. Wide image.", low: true },
  { name: "read-book-sit", category: "learn", mood: "happy", props: ["book"], use: "Sitting, reading a blue book. Story time, reading to the kids.", low: true },
  { name: "eat-salad-sit", category: "food", mood: "happy", props: ["salad bowl"], use: "Sitting, eating salad. Healthy meals, vegetables.", low: true },
  { name: "run", category: "play", mood: "happy", use: "Jogging. Exercise, hurrying, chasing the kids." },
  { name: "tablet-stylus-sit", category: "screen", mood: "focused", props: ["tablet", "stylus"], use: "Sitting, writing on a tablet. Work, drawing with the kids.", low: true },
  { name: "dua-mat-kneel", category: "worship", mood: "calm", props: ["prayer mat"], use: "Kneeling on a prayer mat, hands raised in du'a. After salat, praying for the family.", low: true },
  { name: "arms-open-welcome", category: "greet", mood: "happy", use: "Standing, arms wide. \"Come here!\", hug invitation, welcoming home." },
  { name: "hands-together-thanks", category: "care", mood: "calm", use: "Standing, palms together, eyes closed. Thank you, sorry, polite greeting." },
  { name: "traveller-suitcase", category: "travel", mood: "happy", props: ["backpack", "suitcase"], use: "Standing with a suitcase and backpack. Trips, umrah, mudik, coming home." },
  { name: "think-chin-stand", category: "think", mood: "thoughtful", use: "Standing, hand on chin, thinking. Deciding, wondering." },
  { name: "idea-book-stand", category: "learn", mood: "happy", props: ["book"], use: "Standing with an open book, finger up. Teaching, reading out a lesson." },
  { name: "cheer-knee-up-2", category: "celebrate", mood: "joy", use: "Alt of cheer-knee-up.", alt: true },
  { name: "thumbs-up-sit", category: "joy", mood: "happy", use: "Sitting, thumbs up. Good job, approval.", low: true },
  { name: "surprised-cheeks-sit", category: "feel", mood: "surprised", use: "Sitting, hands on cheeks, \"oh!\" Surprise, wonder.", low: true },
  { name: "wave-big-sit", category: "greet", mood: "joy", use: "Sitting, big wave, eyes closed laughing. Hello, goodbye.", low: true },
  { name: "laptop-sit", category: "screen", mood: "happy", props: ["laptop"], use: "Sitting with a laptop. Working, video, research.", low: true },
  { name: "headphones-listen-sit", category: "calm", mood: "calm", props: ["headphones"], use: "Sitting with headphones, eyes closed. Listening to murottal or a nasheed.", low: true },
  { name: "write-notepad-sit", category: "learn", mood: "focused", props: ["notepad", "pen"], use: "Sitting, writing on a notepad. Lists, plans.", low: true },
  { name: "hug-pillow-sit", category: "bedtime", mood: "cosy", props: ["pillow"], use: "Sitting, hugging a pillow, cosy smile. Bedtime, comfort.", low: true },
  { name: "calm-sit-3", category: "calm", mood: "calm", use: "Alt of calm-sit.", low: true, alt: true },
  { name: "stretch-up-sit", category: "routine", mood: "happy", use: "Sitting, arms stretched overhead. Waking up, morning.", low: true },
  { name: "idea-bulb-sit-2", category: "think", mood: "happy", props: ["light bulb"], use: "Alt of idea-bulb-sit.", low: true, alt: true },
  { name: "puzzled-scratch-sit", category: "think", mood: "puzzled", props: ["question mark"], use: "Sitting, scratching his head, question mark. Confused, figuring it out.", low: true },
  { name: "ok-wink-sit", category: "joy", mood: "happy", use: "Sitting, OK sign, wink. \"All good!\"", low: true },
  { name: "cheer-fists-sit-2", category: "joy", mood: "joy", use: "Alt of cheer-fists-sit.", low: true, alt: true },
  { name: "yawn-sit", category: "bedtime", mood: "sleepy", use: "Sitting, yawning. Tired, late, bedtime.", low: true },
  { name: "stressed-head-sit", category: "feel", mood: "stressed", use: "Sitting, hands on head, eyes shut. Overwhelmed, headache, \"oh no\".", low: true },
  { name: "calm-sit-4", category: "calm", mood: "calm", use: "Alt of calm-sit.", low: true, alt: true },
  { name: "stretch-side-sit", category: "routine", mood: "happy", use: "Sitting, side stretch. Morning, exercise.", low: true },
  { name: "drink-water-sit", category: "food", mood: "calm", props: ["water bottle"], use: "Sitting, drinking from a clear bottle.", low: true },
  { name: "backpack-wave-walk", category: "travel", mood: "happy", props: ["backpack"], use: "Walking with a backpack, waving. Leaving, arriving, school run." },
  { name: "drink-cup-sit", category: "food", mood: "happy", props: ["cup"], use: "Sitting, sipping from a cup. Tea time, breakfast, sahur.", low: true },
  { name: "listen-sit-box", category: "calm", mood: "thoughtful", props: ["box seat"], use: "Sitting on a low box, chin on hand. Listening, watching the kids play.", low: true },
  { name: "kneel-arms-open", category: "care", mood: "loving", use: "Kneeling, arms wide. Welcoming the kids at their height.", low: true },
  { name: "teach-book-sit", category: "learn", mood: "happy", props: ["book"], use: "Sitting with a book, finger up. Explaining a story or a lesson.", low: true },
  { name: "kneel-present", category: "learn", mood: "happy", use: "Kneeling, both hands presenting to the side. \"Look at this!\"", low: true },
  { name: "hug-mo", category: "care", mood: "loving", props: ["Baby Mo"], use: "Kneeling, hugging Baby Mo. Comfort, love, welcome home. Mo is part of the image.", low: true, duo: true },
  { name: "read-with-mo", category: "learn", mood: "happy", props: ["Baby Mo", "book"], use: "Sitting, reading a book with Baby Mo on his lap. Story time.", low: true, duo: true },
  { name: "high-five-mo", category: "celebrate", mood: "joy", props: ["Baby Mo"], use: "Kneeling, high-five with Baby Mo. Well done, teamwork.", low: true, duo: true },
  { name: "dua-kneel", category: "worship", mood: "calm", use: "Kneeling, hands raised in du'a, eyes closed.", low: true },
  { name: "thumbs-up-kneel", category: "joy", mood: "happy", use: "Kneeling, thumbs up, laughing. Encouraging the kids at their level.", low: true },
  { name: "quran-mat-kneel", category: "worship", mood: "happy", props: ["Qur'an", "prayer mat"], use: "Kneeling on a prayer mat with an open Qur'an. Teaching iqra, Ramadan.", low: true },
  { name: "tie-shoes", category: "routine", mood: "happy", use: "Crouching, tying a shoelace. Getting ready to go out.", low: true },
  { name: "grateful-hug-sit", category: "care", mood: "content", use: "Sitting, arms crossed on chest, content. Gratitude, warm feeling.", low: true },
  { name: "sujud", category: "worship", mood: "calm", use: "Sujud (prostration). Salat scenes; fills the Ais gap. Wide image.", low: true },
  { name: "bored-chin-sit", category: "feel", mood: "bored", use: "Sitting, cheek on hand, unimpressed. Bored, waiting, sulking.", low: true },
  { name: "cheer-kneel", category: "celebrate", mood: "joy", use: "Kneeling, fists up, laughing.", low: true },
  { name: "shocked-kneel", category: "feel", mood: "shocked", use: "Kneeling, hands on head, mouth open. \"Oh no!\", big surprise.", low: true },
  { name: "calm-sit-5", category: "calm", mood: "calm", use: "Alt of calm-sit.", low: true, alt: true },
  { name: "stretch-side-stand", category: "routine", mood: "happy", use: "Standing side stretch. Morning exercise." },
  { name: "yawn-stretch-stand", category: "bedtime", mood: "sleepy", use: "Standing, yawning with one arm up. Waking up, Subuh." },
  { name: "arms-open-sit", category: "care", mood: "happy", use: "Sitting, arms open. Inviting a hug, welcome.", low: true },
  { name: "hand-heart-kneel", category: "care", mood: "calm", use: "Kneeling, hands on heart, eyes closed. Love, gratitude, apology.", low: true },
  { name: "teach-point-kneel", category: "learn", mood: "happy", use: "Kneeling, finger up. Teaching, a gentle reminder.", low: true },
  { name: "wave-hello", category: "greet", mood: "happy", use: "Standing, waving. Default hello/goodbye." },
  { name: "read-book-sit-2", category: "learn", mood: "happy", props: ["book"], use: "Alt of read-book-sit.", low: true, alt: true },
  { name: "dua-kneel-2", category: "worship", mood: "calm", use: "Alt of dua-kneel.", low: true, alt: true },
  { name: "thumbs-up-stand", category: "joy", mood: "happy", use: "Standing, thumbs up, hand in pocket. Approval." },
  { name: "cheer-fists-stand", category: "celebrate", mood: "joy", use: "Standing, fists up, knee raised, laughing." },
  { name: "think-chin-stand-2", category: "think", mood: "thoughtful", use: "Alt of think-chin-stand.", alt: true },
];

export const FRIEND_POSES: Record<Friend, FriendPose[]> = { adam: ADAM_POSES, ayah: AYAH_POSES };

/** Quick picks for common story moments (first = best). */
export const ADAM_FOR: Record<string, string[]> = {
  hello: ["wave-hello"],
  dua: ["dua-hands"],
  quran: ["quran-read-sit"],
  sedekah: ["sedekah-box"],
  tennis: ["tennis-hit-forehand", "tennis-ready-wide", "tennis-hold-ball", "tennis-serve-toss"],
  effort: ["tennis-lunge-low", "tennis-stretch-reach", "tennis-backhand-set"],
  win: ["tennis-win-fist", "tennis-jump-reach"],
  rest: ["tennis-rest-bench"],
  /** six-frame sequences, frame 1 → 6 */
  forehandFrames: ["tennis-forehand-1", "tennis-forehand-2", "tennis-forehand-3", "tennis-forehand-4", "tennis-forehand-5", "tennis-forehand-6"],
  backhandFrames: ["tennis-backhand-1", "tennis-backhand-2", "tennis-backhand-3", "tennis-backhand-4", "tennis-backhand-5", "tennis-backhand-6"],
  swingFrames: ["tennis-swing-1", "tennis-swing-2", "tennis-swing-3", "tennis-swing-4", "tennis-swing-5", "tennis-swing-6"],
};

export const AYAH_FOR: Record<string, string[]> = {
  hello: ["wave-hello", "wave-big-sit", "wave-welcome-sit"],
  welcomeHome: ["arms-open-welcome", "kneel-arms-open", "arms-open-sit"],
  leaving: ["backpack-walk", "backpack-wave-walk", "wave-folder", "traveller-suitcase"],
  proud: ["thumbs-up-stand", "stand-arms-crossed", "thumbs-up-kneel", "cheer-fists-sit"],
  celebrate: ["cheer-fists-stand", "cheer-knee-up", "arms-up-joy-sit", "cheer-kneel"],
  withMo: ["hug-mo", "read-with-mo", "high-five-mo"],
  teach: ["teach-point-kneel", "teach-book-sit", "idea-book-stand", "kneel-present"],
  idea: ["idea-bulb-sit", "idea-point-stand"],
  think: ["think-chin-stand", "listen-sit-box"],
  question: ["question-shrug-sit", "puzzled-scratch-sit"],
  surprised: ["surprised-cheeks-sit", "shocked-kneel"],
  worried: ["stop-hand", "stressed-head-sit"],
  bored: ["bored-chin-sit"],
  love: ["grateful-heart-sit", "hand-heart-kneel", "grateful-hug-sit"],
  thanks: ["hands-together-thanks", "hand-heart-kneel"],
  dua: ["dua-kneel", "dua-mat-kneel"],
  salat: ["sujud", "dua-mat-kneel"],
  quran: ["quran-mat-kneel"],
  read: ["read-book-sit", "read-book-happy-sit", "read-with-mo"],
  calm: ["calm-sit", "headphones-listen-sit"],
  eat: ["eat-fruit-sit", "eat-salad-sit", "drink-cup-sit"],
  drink: ["drink-bottle-sit", "drink-water-sit", "drink-cup-sit"],
  sleepy: ["yawn-sit", "doze-sit", "yawn-stretch-stand"],
  sleep: ["sleep-blanket"],
  morning: ["stretch-up-sit", "yawn-stretch-stand", "stretch-side-stand"],
  work: ["laptop-stand", "laptop-sit", "phone-call", "tablet-stylus-sit"],
  call: ["phone-call", "video-call-sit"],
  plan: ["clipboard-check", "write-notebook-sit", "write-notepad-sit", "check-watch"],
  goingOut: ["tie-shoes", "backpack-walk"],
  exercise: ["run", "stretch-side-stand"],
  announce: ["megaphone"],
};

/** Moments with no render yet — brief new art or work around them. */
export const FRIEND_GAPS = [
  "Ayah: salat standing, ruku and sitting (only sujud and du'a exist)",
  "Ayah: carrying or holding a twin, holding hands walking",
  "Ayah: angry or crying",
  "Ayah: cooking, driving, fixing things",
  "Adam: everyday feelings (sad, angry, scared), school, bedtime, salat",
  "Adam with the twins (only Ayah has duo poses)",
];

export const friendPoseSrc = (who: Friend, name: string) => `/${who}-poses/${who}-${name}.png`;
export const getFriendPose = (who: Friend, name: string) => FRIEND_POSES[who].find((p) => p.name === name);
