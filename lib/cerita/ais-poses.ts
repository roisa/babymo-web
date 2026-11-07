
/**
 * Baby Ais pose library — 110 renders in public/baby-ais-poses/baby-ais-<name>.png
 * (800×800, transparent, feet on the same ground line and scale as Baby Mo).
 * Use in StoryArt scenes with  mo: [{ who: "ais", pose: "<name>", x }].
 *
 * Pick by `use`: each entry says which story moments it suits. `alt` marks a
 * near-duplicate kept so two neighbouring pages don't repeat the same image.
 */
export type AisCategory =
  | "greet"
  | "joy"
  | "celebrate"
  | "think"
  | "feel"
  | "calm"
  | "worship"
  | "learn"
  | "school"
  | "care"
  | "bedtime"
  | "routine"
  | "food"
  | "nature"
  | "explore"
  | "weather"
  | "play"
  | "create"
  | "screen"
  | "travel"
  | "role";

export const AIS_CATEGORIES: Record<AisCategory, string> = {
  "greet": "Salam & greeting",
  "joy": "Happy & excited",
  "celebrate": "Celebrate & gifts",
  "think": "Thinking & asking",
  "feel": "Feelings (surprise, sad, sick, shy)",
  "calm": "Calm & listening",
  "worship": "Worship & du'a",
  "learn": "Reading & learning",
  "school": "School",
  "care": "Love, hugs & caring",
  "bedtime": "Bedtime & waking",
  "routine": "Routines",
  "food": "Eating & drinking",
  "nature": "Plants & nature",
  "explore": "Exploring & discovering",
  "weather": "Weather",
  "play": "Play & sport",
  "create": "Art & making",
  "screen": "Screens & devices",
  "travel": "Travel & outdoors",
  "role": "Dress-up roles"
};

export interface AisPose {
  /** file: baby-ais-<name>.png */
  name: string;
  category: AisCategory;
  mood: string;
  /** props drawn into the render (don't add the same prop again in the scene) */
  props: string[];
  /** what she is doing + which story moments it fits */
  use: string;
  /** sitting / kneeling / lying (needs less height in the scene) */
  low?: boolean;
  /** model-consistency warning from review */
  check?: string;
}

export const AIS_POSES: AisPose[] = [
  { name: "sit-wave", category: "greet", mood: "cheerful", props: [], use: "Sitting cross-legged, waving. Hello on a calm page, saying salam from the floor, start of a story.", low: true },
  { name: "hug-teddy", category: "care", mood: "content", props: ["teddy"], use: "Standing, eyes closed, hugging a teddy. Comfort, missing someone, bedtime, feeling safe." },
  { name: "draw-crayons", category: "create", mood: "focused", props: ["crayons", "paper"], use: "Kneeling and drawing a sun. Making a card/drawing for someone (Nenek, Umi).", low: true },
  { name: "binoculars", category: "explore", mood: "excited", props: ["binoculars"], use: "Standing with binoculars. Spotting games, looking far (Cari Ciptaan Allah, birds, moon)." },
  { name: "jump-cheer", category: "joy", mood: "ecstatic", props: [], use: "Mid-air jump, fists up, eyes closed laughing. Big win, surprise reveal, reunion. Use move:'hop'." },
  { name: "tablet-headphones", category: "screen", mood: "happy", props: ["tablet", "headphones"], use: "Sitting with a tablet and headphones. Screen-time stories (Langit Merah Muda), video calls.", low: true },
  { name: "plant-trowel", category: "nature", mood: "happy", props: ["trowel", "potted plant"], use: "Kneeling, digging with a trowel next to a potted plant. Planting a seed, gardening.", low: true },
  { name: "eat-watermelon", category: "food", mood: "delighted", props: ["watermelon"], use: "Sitting, eyes closed, biting watermelon. Enjoying food, breaking the fast, gratitude for food.", low: true },
  { name: "quran-rehal", category: "worship", mood: "serene", props: ["Qur'an on rehal"], use: "Kneeling, eyes closed, Qur'an on a wooden stand. Reading/reciting Qur'an, tilawah, Ramadan.", low: true },
  { name: "hug-globe-kneel", category: "care", mood: "loving", props: ["globe", "hearts"], use: "Kneeling, hugging the Earth with hearts. Caring for the world, all of Allah's creation, environment.", low: true },
  { name: "magnifier-wink", category: "explore", mood: "curious", props: ["magnifying glass"], use: "Crouching, magnifier over one eye, wink. Investigating, spot-the-difference, looking closely." },
  { name: "think-question", category: "think", mood: "puzzled", props: ["question mark"], use: "Standing, finger on chin, '?' above. Asking a question (all 'Apa itu / Kenapa' stories)." },
  { name: "idea-bulb", category: "think", mood: "bright", props: ["light bulb"], use: "Standing, pointing up, light bulb. Getting an idea, figuring it out, 'aha!' page." },
  { name: "explorer-map", category: "explore", mood: "adventurous", props: ["safari hat", "backpack", "map"], use: "Explorer with hat, backpack and map. Trips, adventures, camping, treasure hunts." },
  { name: "scientist-flask", category: "role", mood: "curious", props: ["lab coat", "goggles", "flask"], use: "Scientist with flask. Experiments (the biscuit experiment), wondering how things work." },
  { name: "doctor-kit", category: "role", mood: "caring", props: ["lab coat", "stethoscope", "first-aid kit"], use: "Doctor with stethoscope and first-aid kit. Playing doctor, caring for a sick Umi/Nenek." },
  { name: "chef-whisk", category: "role", mood: "happy", props: ["chef hat", "apron", "whisk", "bowl"], use: "Chef, eyes closed, whisk and bowl. Baking with Umi, cooking for a neighbour." },
  { name: "tennis", category: "play", mood: "sporty", props: ["racket", "ball"], use: "Swinging a tennis racket. Sports, Forehand Beat, exercise, 'strong believer'." },
  { name: "bicycle", category: "play", mood: "proud", props: ["pink bike", "helmet"], use: "Riding a pink bicycle with helmet. Learning to ride (Sepeda Roda Dua), going out." },
  { name: "sleep-star-pillow", category: "bedtime", mood: "asleep", props: ["star plush", "moon pillow", "zzz"], use: "Asleep hugging a star on a moon pillow. End-of-story bedtime, 'zzz' pages. Use move:'still'.", low: true },
  { name: "wave-hello", category: "greet", mood: "cheerful", props: [], use: "Standing, waving. Default friendly Ais; greeting, saying bye, welcoming someone." },
  { name: "giggle", category: "joy", mood: "giggly", props: [], use: "Standing, hands over mouth, giggling. Laughing at something funny, keeping a secret." },
  { name: "hug-kitten", category: "care", mood: "loving", props: ["kitten"], use: "Sitting, hugging a white kitten. Kindness to animals (Kucing di Bawah Hujan).", low: true },
  { name: "blocks-build", category: "play", mood: "focused", props: ["blocks"], use: "Kneeling, building blocks. Playing, building, patience, trying again.", low: true },
  { name: "kick-ball", category: "play", mood: "energetic", props: ["soccer ball"], use: "Kicking a football. Park, playtime, running about." },
  { name: "paint-palette", category: "create", mood: "proud", props: ["brush", "palette"], use: "Holding paintbrush and palette. Art, making something beautiful, creativity." },
  { name: "watering-can", category: "nature", mood: "gentle", props: ["watering can", "plant"], use: "Kneeling, watering a small plant. Caring for plants, patience, growth stories.", low: true },
  { name: "scooter", category: "play", mood: "excited", props: ["scooter", "helmet"], use: "Riding a scooter with helmet. Going out, play, speed." },
  { name: "dua-kneel", category: "worship", mood: "peaceful", props: [], use: "Kneeling, eyes closed, hands together. Quiet du'a, being thankful, pleading softly, forgiving.", low: true },
  { name: "trophy-cheer", category: "celebrate", mood: "proud", props: ["trophy"], use: "Holding a trophy, fist up. Winning, achieving a goal (also a good 'well done' page)." },
  { name: "read-book-happy", category: "learn", mood: "happy", props: ["book (mosque cover)"], use: "Sitting, reading an Islamic book, eyes closed smile. Story time, learning, Qur'an class.", low: true },
  { name: "draw-floor", category: "create", mood: "focused", props: ["crayon", "paper"], use: "Kneeling, drawing on the floor. Making a card or picture, homework.", low: true },
  { name: "arms-wide-joy", category: "joy", mood: "joyful", props: [], use: "Standing, arms wide, eyes closed laughing. Pure happiness, 'Alhamdulillah!', big hug coming." },
  { name: "hug-teddy-wink", category: "care", mood: "playful", props: ["teddy", "heart"], use: "Standing, hugging teddy with a wink and heart. Sharing/lending a toy, cosy love." },
  { name: "blocks-castle", category: "play", mood: "focused", props: ["blocks", "flag"], use: "Kneeling, finishing a block castle. Building together, completing something.", low: true },
  { name: "binoculars-2", category: "explore", mood: "excited", props: ["binoculars"], use: "Binoculars, upright. Alternate for 004 — use when two spotting pages sit next to each other." },
  { name: "thumbs-up-backpack", category: "school", mood: "confident", props: ["backpack"], use: "Backpack on, wink and thumbs up. Ready for school, 'I can do it!', new class." },
  { name: "headphones-dance", category: "joy", mood: "carefree", props: ["headphones", "music notes"], use: "Dancing with headphones. Songs, nasheed, happy music moment." },
  { name: "magnifier-leaf", category: "nature", mood: "curious", props: ["magnifier", "leaf"], use: "Magnifier on a leaf. Studying nature, 'look at Allah's creation closely'." },
  { name: "hug-globe-sit", category: "care", mood: "loving", props: ["globe", "hearts"], use: "Sitting, hugging the Earth, eyes closed. Love for creation, gratitude, quiet ending page.", low: true },
  { name: "wonder-question", category: "think", mood: "wondering", props: ["question mark"], use: "Looking up, finger on chin, '?'. A softer 'I wonder…' question (faith-question stories)." },
  { name: "idea-point", category: "think", mood: "excited", props: ["light bulb"], use: "Pointing up with a bulb. 'I know!' — use after 041 on the next page." },
  { name: "magnifier-peek", category: "explore", mood: "playful", props: ["magnifier"], use: "Bending forward with magnifier, wink. Searching for something lost (Pak Telinga)." },
  { name: "surprised", category: "feel", mood: "surprised", props: ["exclamation"], use: "Hands on cheeks, 'oh!' mouth. Shock, discovery, 'something happened!' (thunder, broken glass)." },
  { name: "backpack-walk", category: "school", mood: "cheerful", props: ["backpack"], use: "Walking with backpack, waving. Going to school, setting off, saying goodbye." },
  { name: "drink-bottle", category: "food", mood: "content", props: ["milk bottle"], use: "Sitting, drinking from a bottle, eyes closed. Drinking, breakfast, little-sister moments.", low: true },
  { name: "eat-bowl", category: "food", mood: "happy", props: ["bowl", "spoon"], use: "Sitting, eating fruit from a bowl. Mealtime, iftar, sharing food.", low: true },
  { name: "hug-star-sit", category: "care", mood: "cosy", props: ["star plush", "hearts"], use: "Sitting, hugging star plush. Comfort, calming down after tears, bedtime.", low: true },
  { name: "sleep-pillow", category: "bedtime", mood: "asleep", props: ["pillow", "zzz"], use: "Lying asleep on a pillow. Night pages, 'tidur' scenes. Lying pose: give it a wider scene.", low: true },
  { name: "read-cushion", category: "learn", mood: "attentive", props: ["book", "cushion"], use: "Sitting on a cushion reading. Story time, listening to Umi, learning.", low: true },
  { name: "cheer-wink", category: "joy", mood: "excited", props: ["sparkles"], use: "Fist up with wink and confetti. 'Yeay!', small win." },
  { name: "point-star", category: "think", mood: "amazed", props: ["star"], use: "Pointing up at a star. Stars, night sky, 'look up there!'." },
  { name: "hug-bunny-stand", category: "care", mood: "sweet", props: ["bunny plush"], use: "Standing, hugging a bunny. Mr Ears (Pak Telinga) is found! Comfort toy." },
  { name: "clapperboard", category: "role", mood: "playful", props: ["clapperboard"], use: "Holding a film clapperboard. Videos, making a film, 'action!' pages." },
  { name: "headphones-kneel", category: "calm", mood: "peaceful", props: ["headphones", "notes"], use: "Kneeling with headphones, eyes closed. Listening to Qur'an recitation/nasheed calmly.", low: true },
  { name: "chef-bowl-wink", category: "role", mood: "cheeky", props: ["chef hat", "apron", "whisk", "bowl"], use: "Chef with wink. Baking stories (alt to 017/098)." },
  { name: "doctor-heart", category: "role", mood: "caring", props: ["lab coat", "stethoscope", "heart"], use: "Doctor holding a heart. Caring, visiting the sick, 'heart' themes." },
  { name: "kick-ball-2", category: "play", mood: "energetic", props: ["soccer ball"], use: "Kicking a ball (alt to 025)." },
  { name: "traveller", category: "travel", mood: "excited", props: ["sunglasses", "backpack", "suitcase"], use: "Pulling a suitcase with sunglasses. Trips, going to Nenek's, holidays (Perjalanan Panjang)." },
  { name: "telescope", category: "explore", mood: "amazed", props: ["telescope"], use: "Kneeling at a telescope. Stars, moon, shooting stars, night sky stories.", low: true },
  { name: "thumbs-up-walk", category: "joy", mood: "confident", props: [], use: "Walking with thumbs up and wink. 'Good job!', agreement, heading off happily." },
  { name: "heart-hands", category: "care", mood: "loving", props: ["heart"], use: "Making a heart with her hands. 'I love you', thanks to Umi/Abi, sweet ending." },
  { name: "megaphone", category: "role", mood: "loud", props: ["megaphone"], use: "Shouting into a megaphone. Announcements, calling everyone, 'Ayo!'" },
  { name: "birthday-cake", category: "celebrate", mood: "joyful", props: ["cake"], use: "Carrying a cake with candles. Surprises, celebrations, baking result." },
  { name: "peek-wall", category: "feel", mood: "shy", props: ["wall edge"], use: "Peeking from behind a wall. Hide-and-seek, shy, curious peek, surprise." },
  { name: "sad-tears", category: "feel", mood: "sad", props: ["tears"], use: "Kneeling, crying, worried face. Sad, hurt, lost something, missed someone.", low: true },
  { name: "sick-blanket", category: "feel", mood: "sick", props: ["blanket", "ice pack", "tissue"], use: "Wrapped in blanket with ice pack and tissue. Being ill, needing care, du'a for the sick.", low: true },
  { name: "wake-stretch", category: "bedtime", mood: "fresh", props: ["bed", "pillow", "blanket"], use: "Waking up in bed, stretching. Morning, 'Alhamdulillah' wake-up du'a.", low: true },
  { name: "gift-box", category: "celebrate", mood: "excited", props: ["gift"], use: "Holding a wrapped gift. Giving/receiving presents, Eid, surprises." },
  { name: "hug-star-stand", category: "care", mood: "happy", props: ["star plush", "hearts"], use: "Standing, hugging a star. Gratitude 'stars', bedtime, cosy." },
  { name: "ok-wink", category: "joy", mood: "confident", props: [], use: "OK sign with wink. 'All good!', agreement." },
  { name: "video-play", category: "screen", mood: "excited", props: ["tablet with play button"], use: "Pointing at a video. Watching, choosing a video, screen-time stories." },
  { name: "hug-globe-stand", category: "care", mood: "loving", props: ["globe"], use: "Standing, hugging the Earth. Creation, love the world." },
  { name: "point-moon", category: "think", mood: "amazed", props: ["moon & star"], use: "Pointing up at a crescent moon. Ramadan moon, night sky, Hijri months." },
  { name: "dua-mat", category: "worship", mood: "devout", props: ["prayer mat"], use: "Kneeling on a prayer mat, hands raised in du'a, eyes closed. Prayer, du'a after sholat.", low: true },
  { name: "read-quran-sit", category: "worship", mood: "happy", props: ["Qur'an/Islamic book"], use: "Sitting, reading a book with a mosque cover. Reading Qur'an/iqra, learning.", low: true },
  { name: "lantern", category: "worship", mood: "glowing", props: ["lantern"], use: "Holding a glowing lantern. Ramadan nights, Eid, night walk, light." },
  { name: "hug-bunny-sit", category: "care", mood: "cosy", props: ["bunny plush"], use: "Sitting, hugging bunny, eyes closed. Comfort, bedtime, missing someone.", low: true },
  { name: "brush-teeth", category: "routine", mood: "fresh", props: ["toothbrush", "cup"], use: "Brushing teeth with a cup. Morning/bedtime routine, wudu-adjacent cleanliness." },
  { name: "rain-umbrella", category: "weather", mood: "playful", props: ["umbrella", "raincoat", "puddle"], use: "Raincoat, umbrella, splashing a puddle. Rain stories, rain du'a, playing in rain." },
  { name: "camera", category: "create", mood: "excited", props: ["camera"], use: "Taking a photo. Capturing a moment, trips, 'look at this!'." },
  { name: "painter-apron", category: "create", mood: "proud", props: ["apron", "brush", "palette"], use: "Painter in apron. Art projects, making a card." },
  { name: "blocks-tower", category: "play", mood: "focused", props: ["blocks"], use: "Kneeling, building a tall tower. Building, patience, not giving up.", low: true },
  { name: "hiker", category: "travel", mood: "determined", props: ["hat", "backpack", "walking stick"], use: "Hiking with stick on a rock. Long walks, effort, adventure." },
  { name: "calm-sit", category: "calm", mood: "peaceful", props: [], use: "Sitting cross-legged, eyes closed, hands resting. Calming down, deep breath, dhikr, quiet.", low: true },
  { name: "gardener-sapling", category: "nature", mood: "happy", props: ["straw hat", "watering can", "sapling"], use: "Gardener planting a sapling. Planting trees, patience, sadaqah jariyah.", low: true },
  { name: "trophy-win", category: "celebrate", mood: "proud", props: ["trophy"], use: "Lifting trophy, fist up. Winning (alt to 030)." },
  { name: "hug-cat", category: "care", mood: "loving", props: ["grey cat", "hearts"], use: "Kneeling, hugging a grey cat. Pets, kindness to animals.", low: true },
  { name: "read-on-books", category: "learn", mood: "happy", props: ["stack of books"], use: "Sitting on a stack of books, reading. Loves learning, library, knowledge.", low: true },
  { name: "hug-earth-smile", category: "care", mood: "loving", props: ["smiling Earth", "hearts"], use: "Kneeling, hugging a smiling Earth. Environment, litter-picking, creation.", low: true },
  { name: "cheer-fist", category: "joy", mood: "excited", props: ["sparkles"], use: "Fist up, wink. 'Yes!' moment (alt to 051)." },
  { name: "gift-yellow", category: "celebrate", mood: "happy", props: ["yellow gift"], use: "Holding a yellow present. Giving gifts, sharing." },
  { name: "hug-heart", category: "care", mood: "loving", props: ["big heart"], use: "Kneeling, hugging a big heart. Love, kindness, forgiveness, 'pelukan'.", low: true },
  { name: "checklist", category: "routine", mood: "organised", props: ["notepad", "pencil"], use: "Holding a checklist. Plans, routines, holiday jar, to-do, prayer streak." },
  { name: "laptop", category: "screen", mood: "friendly", props: ["laptop"], use: "Sitting with a laptop, waving. Video call with Nenek, online class.", low: true },
  { name: "dreamy-delight", category: "feel", mood: "delighted", props: ["sparkles"], use: "Hands on cheeks, sparkly eyes. Delighted, in awe, 'so pretty!'." },
  { name: "headphones-music", category: "joy", mood: "happy", props: ["headphones", "notes"], use: "Standing with headphones and music. Songs, nasheed." },
  { name: "chef-bowl", category: "role", mood: "happy", props: ["chef hat", "apron", "whisk", "bowl"], use: "Chef holding whisk and bowl (alt to 017)." },
  { name: "doctor-clipboard", category: "role", mood: "helpful", props: ["lab coat", "stethoscope", "clipboard"], use: "Doctor with clipboard, pointing up. Explaining, health tips." },
  { name: "traveller-hat", category: "travel", mood: "excited", props: ["sun hat", "sunglasses", "suitcase"], use: "Traveller with sun hat and suitcase. Trips, holidays, going away." },
  { name: "arms-open-welcome", category: "greet", mood: "welcoming", props: [], use: "Arms open wide. Welcome, 'come here!', reunion hug, 'all of this!'." },
  { name: "excited-fists", category: "joy", mood: "excited", props: [], use: "Fists clenched at chest, eyes closed, kick. Can't wait, excitement building." },
  { name: "wave-big", category: "greet", mood: "cheerful", props: [], use: "Big wave. Calling someone, 'Assalamu'alaikum!', bye." },
  { name: "heart-hands-smile", category: "care", mood: "sweet", props: [], use: "Heart hands with gentle smile. Thank you, love, kind words." },
  { name: "jump-joy", category: "joy", mood: "ecstatic", props: [], use: "Jumping with arms up. Celebration, 'hooray!'. Use move:'hop'." },
  { name: "sit-chin-hands", category: "calm", mood: "attentive", props: [], use: "Sitting, chin in hands, smiling. Listening to a story, waiting patiently, daydreaming.", low: true },
  { name: "read-book-sit", category: "learn", mood: "engaged", props: ["book"], use: "Sitting, reading a book, smiling. Reading, learning (alt to 031/076).", low: true },
  { name: "lie-chin-hands", category: "calm", mood: "dreamy", props: [], use: "Lying on tummy, chin in hands. Daydreaming, listening, lazy afternoon. Wide pose.", low: true },
  { name: "dua-hands-closed", category: "worship", mood: "peaceful", props: [], use: "Kneeling, palms together, eyes closed. Du'a, gratitude, saying sorry (alt to 029).", low: true },
  { name: "hug-bunny-happy", category: "care", mood: "happy", props: ["bunny plush"], use: "Sitting, hugging bunny, eyes closed smile. Toy found, comfort, bedtime.", low: true },
  /* ── gap batch (sujud, grumpy, crying, running, scared, shrug) ── */
  { name: "sujud", category: "worship", mood: "calm", props: ["prayer mat"], use: "Sujud on a prayer mat. Fills the Ais sujud gap.", low: true },
  { name: "grumpy", category: "feel", mood: "grumpy", props: [], use: "Arms crossed, frowning, little grey cloud. Grumpy, cross, sulking." },
  { name: "cry-sit", category: "feel", mood: "sad", props: [], use: "Sitting on the floor crying, rubbing her eyes. A fall, a big upset.", low: true },
  { name: "run", category: "play", mood: "happy", props: [], use: "Running fast and happy." },
  { name: "scared-hide", category: "feel", mood: "scared", props: [], use: "Crouching, hiding her face behind her hands, peeking. Scared, shy, thunder.", low: true },
  { name: "shrug", category: "think", mood: "puzzled", props: [], use: "Palms up, puzzled, question mark. \"I don't know\"." },
];

/** Quick picks for common story moments (first = best). */
export const AIS_FOR: Record<string, string[]> = {
  hello: ["wave-hello", "wave-big", "sit-wave", "arms-open-welcome"],
  goodbye: ["backpack-walk", "wave-big", "thumbs-up-walk"],
  happy: ["arms-wide-joy", "giggle", "cheer-wink", "ok-wink"],
  celebrate: ["jump-cheer", "jump-joy", "trophy-cheer", "excited-fists"],
  question: ["think-question", "wonder-question"],
  idea: ["idea-bulb", "idea-point"],
  surprised: ["surprised", "dreamy-delight"],
  awe: ["dreamy-delight", "point-star", "point-moon", "telescope"],
  sad: ["sad-tears", "cry-sit", "hug-bunny-sit", "hug-star-sit"],
  grumpy: ["grumpy"],
  scared: ["scared-hide", "peek-wall"],
  dontKnow: ["shrug"],
  run: ["run"],
  sujud: ["sujud"],
  sick: ["sick-blanket"],
  shy: ["peek-wall"],
  calm: ["calm-sit", "sit-chin-hands", "headphones-kneel"],
  listening: ["sit-chin-hands", "read-cushion", "lie-chin-hands"],
  dua: ["dua-mat", "dua-kneel", "dua-hands-closed", "sujud"],
  thankful: ["dua-hands-closed", "heart-hands", "heart-hands-smile"],
  sorry: ["dua-hands-closed", "hug-heart"],
  quran: ["quran-rehal", "read-quran-sit"],
  ramadan: ["lantern", "point-moon", "eat-watermelon", "quran-rehal"],
  love: ["heart-hands", "hug-heart", "heart-hands-smile"],
  hugToy: ["hug-teddy", "hug-bunny-stand", "hug-bunny-sit", "hug-star-stand"],
  animals: ["hug-kitten", "hug-cat"],
  creation: ["hug-globe-sit", "hug-earth-smile", "magnifier-leaf", "binoculars"],
  sleep: ["sleep-pillow", "sleep-star-pillow"],
  wakeUp: ["wake-stretch"],
  routine: ["brush-teeth", "checklist"],
  eat: ["eat-bowl", "eat-watermelon", "drink-bottle"],
  plant: ["plant-trowel", "watering-can", "gardener-sapling"],
  rain: ["rain-umbrella"],
  search: ["magnifier-peek", "magnifier-wink", "binoculars"],
  build: ["blocks-tower", "blocks-castle", "blocks-build"],
  draw: ["draw-crayons", "draw-floor", "paint-palette"],
  read: ["read-book-happy", "read-book-sit", "read-on-books", "read-cushion"],
  school: ["thumbs-up-backpack", "backpack-walk"],
  play: ["kick-ball", "bicycle", "scooter", "tennis"],
  gift: ["gift-box", "gift-yellow", "birthday-cake"],
  cook: ["chef-whisk", "chef-bowl", "chef-bowl-wink"],
  caring: ["doctor-kit", "doctor-heart"],
  trip: ["traveller", "traveller-hat", "explorer-map", "hiker"],
  screen: ["tablet-headphones", "video-play", "laptop"],
};

/** Moments with no Ais render yet — use Baby Mo, change the scene, or brief new art. */
export const AIS_GAPS = [
  "pointing sideways at something on the ground (only pointing up)",
  "sitting at a table eating with family",
];

export const aisPoseSrc = (name: string) => `/baby-ais-poses/baby-ais-${name}.png`;
export const getAisPose = (name: string) => AIS_POSES.find((p) => p.name === name);
