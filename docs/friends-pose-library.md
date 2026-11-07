# Baby Mo & friends — pose library (Adam and Ayah)

There are 124 transparent renders. Use them in StoryArt scenes next to Baby Mo and Baby Ais.

| Character | Poses | Files | Reference sheet |
| --- | --- | --- | --- |
| Adam (older brother, about 7) | 34 | `public/adam-poses/adam-<name>.png` | [adam-pose-library.jpg](adam-pose-library.jpg) |
| Ayah (Dad) | 90 | `public/ayah-poses/ayah-<name>.png` | [ayah-pose-library.jpg](ayah-pose-library.jpg) |

The code lives in `lib/cerita/friends-poses.ts`. It holds `ADAM_POSES`, `AYAH_POSES`, the quick picks `ADAM_FOR` and `AYAH_FOR`, and `FRIEND_GAPS`.

## Using them in a scene

```ts
scene: {
  focus: 330,
  mo: [
    { who: "ayah", pose: "kneel-arms-open", x: 300 },
    { pose: "pose-01", x: 420 },
  ],
}
```

- **Size is automatic.** At the same `s`, StoryArt draws Adam 1.4× Baby Mo's height and Ayah 1.9× (`FRIEND_SCALE`). Keep `s` the same for everyone in a scene.
- **Same ground line.** Every PNG is 800×800 with the feet at y = 725, like the Ais renders. Sitting and kneeling poses (marked `low`) are scaled by head size, so they sit at the right height.
- **Ayah fills the page.** He is tall. On a phone page, put him at the edge of the 280-unit visible band and the kids in the middle. Kneeling and sitting poses keep him at the kids' eye level.
- **`duo` poses already include Baby Mo** (`hug-mo`, `read-with-mo`, `high-five-mo`). Don't add a second Mo.
- **`alt` poses are near-duplicates.** Use them so two neighbouring pages don't show the same image.

## How the files were made

- **Adam:** 4 single sheets from the "Kak Ibrahim" Drive folder, plus 5 tennis sheets sent in chat.
- **Ayah:** 30 three-pose sheets from the second Drive folder.
- **Processing:**
  - Each figure was cut out and the background haze removed. One forehand sheet had a grey fog behind it, and that is gone.
  - Scale was evened out by head size, then each figure was placed on the shared ground line.
- **Small losses:** the "zzz" on `ayah-sleep-blanket` was dropped as a stray speck.
- **Wrong outfit:** the tennis sheets show Adam in his blue hoodie, not the tennis outfit from the brief.

## Adam — 34 poses

![Adam pose library](adam-pose-library.jpg)

| Pose | Type | Notes and story use |
| --- | --- | --- |
| `wave-hello` | greet | Standing, one hand up waving, big smile. Arrivals, hello, goodbye. |
| `dua-hands` | worship | Standing, palms cupped in du'a, eyes closed. Before eating, bedtime du'a, thanking Allah. |
| `quran-read-sit` | worship · low | Sitting cross-legged holding an open Qur'an, gentle smile. Reading, Ramadan, teaching the twins. |
| `sedekah-box` | care | Dropping a coin into a "Sedekah" box. Charity, sharing, Friday, Ramadan stories. |
| `tennis-forehand-1` | play | Forehand frame 1/6: ready stance. Animation or the start of a rally. |
| `tennis-forehand-2` | play | Forehand frame 2/6: racket up, turning. |
| `tennis-forehand-3` | play | Forehand frame 3/6: take-back, free hand reaching out. |
| `tennis-forehand-4` | play | Forehand frame 4/6: racket dropping low, stepping in. |
| `tennis-forehand-5` | play | Forehand frame 5/6: contact, ball on the strings. |
| `tennis-forehand-6` | play | Forehand frame 6/6: follow-through, satisfied smile. |
| `tennis-backhand-1` | play | Two-handed backhand 1/6: ready stance. |
| `tennis-backhand-2` | play | Backhand 2/6: shoulder turn, racket up. |
| `tennis-backhand-3` | play | Backhand 3/6: take-back over the shoulder. |
| `tennis-backhand-4` | play | Backhand 4/6: swing low, stepping in. |
| `tennis-backhand-5` | play | Backhand 5/6: contact, ball on the strings. |
| `tennis-backhand-6` | play | Backhand 6/6: follow-through over the shoulder, laughing. |
| `tennis-swing-1` | play | Second forehand set 1/6: ready, smiling. Front-facing, friendlier for book pages. |
| `tennis-swing-2` | play | Swing 2/6: racket up, free hand pointing at the ball. |
| `tennis-swing-3` | play | Swing 3/6: take-back, ball coming in. |
| `tennis-swing-4` | play | Swing 4/6: contact, determined face. |
| `tennis-swing-5` | play | Swing 5/6: follow-through. |
| `tennis-swing-6` | play | Swing 6/6: finish over the shoulder, cheering. |
| `tennis-hold-ball` | play | Standing relaxed, racket down, ball in hand. Before a match, "want to play?" |
| `tennis-serve-toss` | play | Serve: tossing the ball up, racket back. Start of a game. |
| `tennis-hit-forehand` | play | Hitting a forehand, ball on the racket. Single-image "playing tennis". |
| `tennis-hit-backhand` | play | Two-handed backhand hit, ball arriving. Practice, trying hard. |
| `tennis-ready-wide` | play | Wide ready stance, racket up, cheerful. Waiting for the ball, teaching. |
| `tennis-win-fist` | celebrate | Fist up, eyes closed laughing, racket in hand. Winning a point, "I did it!" |
| `tennis-lunge-low` | play | Low lunge to a ball near the ground. Effort, not giving up. |
| `tennis-jump-reach` | play · air | Jumping with racket and arms out. Big energy, excitement. |
| `tennis-backhand-set` | play | Determined backhand set-up. Concentration, practice. |
| `tennis-stretch-reach` | play · low | Stretching far, racket low to the ball. Trying hard, a near miss. |
| `tennis-net-volley` | play | At the net, volleying. The net is part of the image. |
| `tennis-rest-bench` | routine · low | Resting on a bench, towel round his neck, drinking water. Break time, staying hydrated. |

The three tennis sets (`tennis-forehand-1…6`, `tennis-backhand-1…6`, `tennis-swing-1…6`) are six-frame swings. Use frame 4 or 5 as a single book image, or play them in order as an animation.

## Ayah — 90 poses

![Ayah pose library](ayah-pose-library.jpg)

| Pose | Type | Notes and story use |
| --- | --- | --- |
| `calm-sit` | calm · low | Sitting cross-legged, eyes closed, hands resting on knees. Calm breathing, being patient, quiet moment. |
| `eat-fruit-sit` | food · low | Sitting, eating fruit from a bowl. Healthy food, breakfast, sharing snacks. |
| `drink-bottle-sit` | food · low | Sitting, drinking from a blue bottle, eyes closed. Thirst, after play, iftar. |
| `cheer-fists-sit` | joy · low | Sitting, both fists up, laughing. Proud of the kids, "hore!" |
| `grateful-heart-sit` | care · low | Sitting, hands on chest, eyes closed, little heart. Love, gratitude, alhamdulillah. |
| `wave-welcome-sit` | greet · low | Sitting, waving with one hand, other hand open. Welcoming, calling the kids over. |
| `idea-bulb-sit` | think · low | Sitting, finger on temple, light bulb. Having an idea, solving a problem. |
| `question-shrug-sit` | think · low | Sitting, palms up, question mark. Asking "why?", not knowing. |
| `wave-thumbs-sit` | greet · low | Sitting, wave and thumbs up with a wink. Encouraging, "good job!" |
| `arms-up-joy-sit` | celebrate · low | Sitting, both arms up, cheering. Big celebration, good news. |
| `write-notebook-sit` | learn · low | Sitting, writing in a notebook. Planning, homework help, lists. |
| `video-call-sit` | screen · low | Sitting, waving at a video call on a tablet. Calling grandparents, Ayah away from home. |
| `calm-sit-2` | calm · low, alt | Alt of calm-sit (slightly different hands). |
| `eat-fruit-sit-2` | food · low, alt | Alt of eat-fruit-sit. |
| `drink-bottle-sit-2` | food · low, alt | Alt of drink-bottle-sit. |
| `doze-sit` | bedtime · low | Sitting, head on hands, dozing, zzz. Tired, late night, bedtime. |
| `cheer-arm-up-sit` | celebrate · low | Sitting, one fist up high, laughing. Victory, "we did it!" |
| `read-book-happy-sit` | learn · low | Sitting, reading a book, delighted. Story time, finding something in a book. |
| `stand-arms-crossed` | calm | Standing, arms crossed, warm smile. Default standing Ayah, watching proudly. |
| `idea-point-stand` | think | Standing, finger up, hand on hip. "I know!", explaining a rule. |
| `thumbs-up-wink-lean` | joy | Leaning, thumbs up, wink. Approval, encouragement. |
| `backpack-walk` | travel | Walking with a backpack. Leaving for work, going on a trip, coming home. |
| `wave-folder` | greet | Standing, waving, folder under the arm. Off to work, back from work. |
| `check-watch` | routine | Standing, checking his watch. Time for prayer, running late, schedules. |
| `laptop-stand` | screen | Standing, typing on a laptop. Working from home, looking something up. |
| `phone-call` | screen | Standing, talking on the phone, gesturing. Calling someone, good news. |
| `cheer-knee-up` | celebrate | Standing, fists up, one knee raised. Excited celebration. |
| `megaphone` | role | Announcing with a megaphone. Calling everyone, announcements, games. |
| `clipboard-check` | routine | Ticking a checklist. Packing, chores, routines. |
| `stop-hand` | feel | Palm out, "wait!", worried face. Stopping danger, being careful. |
| `sleep-blanket` | bedtime · low | Lying asleep under a blanket. Night, nap, sick day. Wide image. |
| `read-book-sit` | learn · low | Sitting, reading a blue book. Story time, reading to the kids. |
| `eat-salad-sit` | food · low | Sitting, eating salad. Healthy meals, vegetables. |
| `run` | play | Jogging. Exercise, hurrying, chasing the kids. |
| `tablet-stylus-sit` | screen · low | Sitting, writing on a tablet. Work, drawing with the kids. |
| `dua-mat-kneel` | worship · low | Kneeling on a prayer mat, hands raised in du'a. After salat, praying for the family. |
| `arms-open-welcome` | greet | Standing, arms wide. "Come here!", hug invitation, welcoming home. |
| `hands-together-thanks` | care | Standing, palms together, eyes closed. Thank you, sorry, polite greeting. |
| `traveller-suitcase` | travel | Standing with a suitcase and backpack. Trips, umrah, mudik, coming home. |
| `think-chin-stand` | think | Standing, hand on chin, thinking. Deciding, wondering. |
| `idea-book-stand` | learn | Standing with an open book, finger up. Teaching, reading out a lesson. |
| `cheer-knee-up-2` | celebrate · alt | Alt of cheer-knee-up. |
| `thumbs-up-sit` | joy · low | Sitting, thumbs up. Good job, approval. |
| `surprised-cheeks-sit` | feel · low | Sitting, hands on cheeks, "oh!" Surprise, wonder. |
| `wave-big-sit` | greet · low | Sitting, big wave, eyes closed laughing. Hello, goodbye. |
| `laptop-sit` | screen · low | Sitting with a laptop. Working, video, research. |
| `headphones-listen-sit` | calm · low | Sitting with headphones, eyes closed. Listening to murottal or a nasheed. |
| `write-notepad-sit` | learn · low | Sitting, writing on a notepad. Lists, plans. |
| `hug-pillow-sit` | bedtime · low | Sitting, hugging a pillow, cosy smile. Bedtime, comfort. |
| `calm-sit-3` | calm · low, alt | Alt of calm-sit. |
| `stretch-up-sit` | routine · low | Sitting, arms stretched overhead. Waking up, morning. |
| `idea-bulb-sit-2` | think · low, alt | Alt of idea-bulb-sit. |
| `puzzled-scratch-sit` | think · low | Sitting, scratching his head, question mark. Confused, figuring it out. |
| `ok-wink-sit` | joy · low | Sitting, OK sign, wink. "All good!" |
| `cheer-fists-sit-2` | joy · low, alt | Alt of cheer-fists-sit. |
| `yawn-sit` | bedtime · low | Sitting, yawning. Tired, late, bedtime. |
| `stressed-head-sit` | feel · low | Sitting, hands on head, eyes shut. Overwhelmed, headache, "oh no". |
| `calm-sit-4` | calm · low, alt | Alt of calm-sit. |
| `stretch-side-sit` | routine · low | Sitting, side stretch. Morning, exercise. |
| `drink-water-sit` | food · low | Sitting, drinking from a clear bottle. |
| `backpack-wave-walk` | travel | Walking with a backpack, waving. Leaving, arriving, school run. |
| `drink-cup-sit` | food · low | Sitting, sipping from a cup. Tea time, breakfast, sahur. |
| `listen-sit-box` | calm · low | Sitting on a low box, chin on hand. Listening, watching the kids play. |
| `kneel-arms-open` | care · low | Kneeling, arms wide. Welcoming the kids at their height. |
| `teach-book-sit` | learn · low | Sitting with a book, finger up. Explaining a story or a lesson. |
| `kneel-present` | learn · low | Kneeling, both hands presenting to the side. "Look at this!" |
| `hug-mo` | care · low, duo | Kneeling, hugging Baby Mo. Comfort, love, welcome home. Mo is part of the image. |
| `read-with-mo` | learn · low, duo | Sitting, reading a book with Baby Mo on his lap. Story time. |
| `high-five-mo` | celebrate · low, duo | Kneeling, high-five with Baby Mo. Well done, teamwork. |
| `dua-kneel` | worship · low | Kneeling, hands raised in du'a, eyes closed. |
| `thumbs-up-kneel` | joy · low | Kneeling, thumbs up, laughing. Encouraging the kids at their level. |
| `quran-mat-kneel` | worship · low | Kneeling on a prayer mat with an open Qur'an. Teaching iqra, Ramadan. |
| `tie-shoes` | routine · low | Crouching, tying a shoelace. Getting ready to go out. |
| `grateful-hug-sit` | care · low | Sitting, arms crossed on chest, content. Gratitude, warm feeling. |
| `sujud` | worship · low | Sujud (prostration). Salat scenes; fills the Ais gap. Wide image. |
| `bored-chin-sit` | feel · low | Sitting, cheek on hand, unimpressed. Bored, waiting, sulking. |
| `cheer-kneel` | celebrate · low | Kneeling, fists up, laughing. |
| `shocked-kneel` | feel · low | Kneeling, hands on head, mouth open. "Oh no!", big surprise. |
| `calm-sit-5` | calm · low, alt | Alt of calm-sit. |
| `stretch-side-stand` | routine | Standing side stretch. Morning exercise. |
| `yawn-stretch-stand` | bedtime | Standing, yawning with one arm up. Waking up, Subuh. |
| `arms-open-sit` | care · low | Sitting, arms open. Inviting a hug, welcome. |
| `hand-heart-kneel` | care · low | Kneeling, hands on heart, eyes closed. Love, gratitude, apology. |
| `teach-point-kneel` | learn · low | Kneeling, finger up. Teaching, a gentle reminder. |
| `wave-hello` | greet | Standing, waving. Default hello/goodbye. |
| `read-book-sit-2` | learn · low, alt | Alt of read-book-sit. |
| `dua-kneel-2` | worship · low, alt | Alt of dua-kneel. |
| `thumbs-up-stand` | joy | Standing, thumbs up, hand in pocket. Approval. |
| `cheer-fists-stand` | celebrate | Standing, fists up, knee raised, laughing. |
| `think-chin-stand-2` | think · alt | Alt of think-chin-stand. |

## Still missing

- Ayah: salat standing, ruku and sitting (only sujud and du'a exist)
- Ayah: carrying or holding a twin, holding hands walking
- Ayah: angry or crying
- Ayah: cooking, driving, fixing things
- Adam: everyday feelings (sad, angry, scared), school, bedtime, salat — batches 1–12 of the Adam brief cover these
- Adam with the twins (batches 13–14 of the Adam brief)
