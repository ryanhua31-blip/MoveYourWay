const activityGroups = [
  {
    id: "soft-start",
    name: "Soft Start",
    energy: "Low energy",
    description: "Easy moves for when you are tired, nervous, or just trying to begin."
  },
  {
    id: "mood-boost",
    name: "Mood Boost",
    energy: "Medium energy",
    description: "Playful activities for shaking off boredom without making it too serious."
  },
  {
    id: "social-energy",
    name: "Social Energy",
    energy: "Group friendly",
    description: "Moves that give you a reason to hang out while your body quietly does the work."
  },
  {
    id: "focus-reset",
    name: "Focus Reset",
    energy: "Calm and steady",
    description: "Activities that help you breathe, reset, and feel more in control."
  },
  {
    id: "big-energy",
    name: "Big Energy",
    energy: "High energy",
    description: "For restless days when you actually want to sweat, punch, jump, sprint, or climb."
  },
  {
    id: "outside-adventure",
    name: "Outside Adventure",
    energy: "Fresh air",
    description: "Outdoor moves for people who would rather explore than count reps."
  }
];

const groupLookup = Object.fromEntries(activityGroups.map((group) => [group.id, group]));

const quizMatches = {
  "soft-start": {
    title: "Soft Start",
    text: "Low-pressure moves for days when getting started is the whole win."
  },
  "mood-boost": {
    title: "Mood Boost",
    text: "Playful moves that make exercise feel more like changing the vibe."
  },
  "social-energy": {
    title: "Social Energy",
    text: "Group-friendly moves for hanging out without standing around."
  },
  "focus-reset": {
    title: "Focus Reset",
    text: "Calm movement for stress, focus, and feeling less stuck."
  },
  "big-energy": {
    title: "Big Energy",
    text: "Higher-energy moves for burning off restlessness in a good way."
  },
  "outside-adventure": {
    title: "Outside Adventure",
    text: "Fresh-air movement for people who need scenery more than a scoreboard."
  }
};

const activities = [
  {
    name: "Basketball",
    group: "social-energy",
    description: "Shoot around, play one-on-one, or just practice trick shots with a friend.",
    icon: "ball",
    color: "#f6c56f"
  },
  {
    name: "Soccer",
    group: "social-energy",
    description: "Kick, pass, and run in short bursts. A driveway or park is enough.",
    icon: "goal",
    color: "#b9dfc0"
  },
  {
    name: "Volleyball",
    group: "social-energy",
    description: "A team sport that can be silly, social, and less intense than it looks.",
    icon: "ball",
    color: "#f4a397"
  },
  {
    name: "Badminton",
    group: "mood-boost",
    description: "Light, fast, and easier to start than most racket sports.",
    icon: "racket",
    color: "#b9d2ef"
  },
  {
    name: "Table Tennis",
    group: "mood-boost",
    description: "Quick rallies, tiny space, and no need to run across a full court.",
    icon: "racket",
    color: "#f5dfa0"
  },
  {
    name: "Tennis",
    group: "focus-reset",
    description: "Hit with a partner or bounce against a wall until it starts to click.",
    icon: "racket",
    color: "#c5e8cf"
  },
  {
    name: "Pickleball",
    group: "social-energy",
    description: "A friendly court game with shorter movements and a low-pressure vibe.",
    icon: "paddle",
    color: "#e9b4d0"
  },
  {
    name: "Swimming",
    group: "focus-reset",
    description: "Easy on joints, cool in summer, and perfect for moving without feeling sweaty.",
    icon: "wave",
    color: "#a9d9f6"
  },
  {
    name: "Skateboarding",
    group: "mood-boost",
    description: "Practice balance, small tricks, and cruising at your own speed.",
    icon: "board",
    color: "#d0c0ee"
  },
  {
    name: "Roller Skating",
    group: "mood-boost",
    description: "Music plus wheels makes movement feel more like hanging out.",
    icon: "skate",
    color: "#f1b4a9"
  },
  {
    name: "Jump Rope",
    group: "big-energy",
    description: "Start with twenty jumps and build up whenever you feel ready.",
    icon: "rope",
    color: "#f6c56f"
  },
  {
    name: "Bodyweight Circuit",
    group: "big-energy",
    description: "Try squats, wall pushups, and planks without needing equipment.",
    icon: "bolt",
    color: "#b9dfc0"
  },
  {
    name: "Yoga",
    group: "focus-reset",
    description: "Stretch, breathe, and get stronger without turning everything into a competition.",
    icon: "sun",
    color: "#f5dfa0"
  },
  {
    name: "Pilates",
    group: "focus-reset",
    description: "Slow, controlled moves that make your core feel secretly powerful.",
    icon: "arc",
    color: "#d0c0ee"
  },
  {
    name: "Dance Workout",
    group: "mood-boost",
    description: "Pick a song and move badly on purpose until it becomes fun.",
    icon: "music",
    color: "#f4a397"
  },
  {
    name: "Walking",
    group: "soft-start",
    description: "The easiest start: walk around the block, around school, or around a store.",
    icon: "foot",
    color: "#c5e8cf"
  },
  {
    name: "Jog-Walk",
    group: "big-energy",
    description: "Jog for thirty seconds, walk for two minutes, repeat as gently as needed.",
    icon: "path",
    color: "#b9d2ef"
  },
  {
    name: "Cycling",
    group: "outside-adventure",
    description: "Ride for errands, fresh air, or just to make a boring route feel different.",
    icon: "bike",
    color: "#a9d9f6"
  },
  {
    name: "Hiking",
    group: "outside-adventure",
    description: "A walk with better scenery and built-in snack breaks.",
    icon: "mountain",
    color: "#b9dfc0"
  },
  {
    name: "Frisbee",
    group: "social-energy",
    description: "Low equipment, easy rules, and lots of chances to laugh off bad throws.",
    icon: "disc",
    color: "#f5dfa0"
  },
  {
    name: "Ultimate Frisbee",
    group: "social-energy",
    description: "Team play that rewards passing, spacing, and trying again.",
    icon: "disc",
    color: "#f1b4a9"
  },
  {
    name: "Climbing",
    group: "big-energy",
    description: "Solve routes like puzzles while your arms and legs do the work.",
    icon: "mountain",
    color: "#d0c0ee"
  },
  {
    name: "Martial Arts",
    group: "focus-reset",
    description: "Learn balance, focus, and confidence one form or drill at a time.",
    icon: "star",
    color: "#f4a397"
  },
  {
    name: "Kickboxing",
    group: "big-energy",
    description: "Punch and kick pads for stress relief with clear, learnable patterns.",
    icon: "bolt",
    color: "#f6c56f"
  },
  {
    name: "Dodgeball",
    group: "social-energy",
    description: "Chaotic, quick, and funny if everyone keeps it friendly.",
    icon: "ball",
    color: "#b9d2ef"
  },
  {
    name: "Bowling",
    group: "soft-start",
    description: "A relaxed sport where snacks and friends are basically part of the game.",
    icon: "pins",
    color: "#e9b4d0"
  },
  {
    name: "Mini Golf",
    group: "soft-start",
    description: "Tiny challenges, goofy obstacles, and no need to be super serious.",
    icon: "flag",
    color: "#c5e8cf"
  },
  {
    name: "Disc Golf",
    group: "outside-adventure",
    description: "Walk a course, throw discs, and keep moving without sprinting.",
    icon: "disc",
    color: "#f5dfa0"
  },
  {
    name: "Kayaking",
    group: "outside-adventure",
    description: "Paddle on calm water and let the view do half the convincing.",
    icon: "wave",
    color: "#a9d9f6"
  },
  {
    name: "Gardening",
    group: "soft-start",
    description: "Digging, carrying, and planting count as movement, and you get results you can see.",
    icon: "leaf",
    color: "#b9dfc0"
  },
  {
    name: "Active Video Games",
    group: "mood-boost",
    description: "Use dancing, fitness, or sports games as a bridge from screen time to movement.",
    icon: "controller",
    color: "#d0c0ee"
  },
  {
    name: "Cheer Basics",
    group: "big-energy",
    description: "Learn jumps, chants, and simple routines with rhythm and energy.",
    icon: "star",
    color: "#f1b4a9"
  },
  {
    name: "Park Games",
    group: "outside-adventure",
    description: "Tag, capture the flag, or made-up rules all count if they get people moving.",
    icon: "flag",
    color: "#f6c56f"
  },
  {
    name: "Stretch Breaks",
    group: "soft-start",
    description: "A few minutes of stretching can reset your body between homework, games, or scrolling.",
    icon: "arc",
    color: "#c5e8cf"
  }
];

const iconTemplates = {
  ball: '<circle cx="50" cy="50" r="31"></circle><path d="M25 38c18 7 33 8 50 0"></path><path d="M25 62c18-7 33-8 50 0"></path><path d="M50 19c-8 18-8 44 0 62"></path>',
  goal: '<rect x="18" y="30" width="64" height="42"></rect><path d="M18 44h64M34 30v42M50 30v42M66 30v42"></path>',
  racket: '<ellipse cx="42" cy="36" rx="22" ry="28"></ellipse><path d="M57 58l25 25M32 23h20M27 36h30M32 49h20"></path>',
  paddle: '<circle cx="38" cy="36" r="23"></circle><path d="M55 55l27 27"></path><circle cx="72" cy="28" r="8"></circle>',
  wave: '<path d="M12 62c12-14 25-14 38 0s26 14 38 0"></path><path d="M12 43c12-14 25-14 38 0s26 14 38 0"></path>',
  board: '<path d="M18 60h64"></path><path d="M28 60c8 10 36 10 44 0"></path><circle cx="32" cy="76" r="6"></circle><circle cx="68" cy="76" r="6"></circle>',
  skate: '<path d="M25 26v35h40c9 0 16-7 16-16"></path><path d="M25 44h36"></path><circle cx="34" cy="76" r="6"></circle><circle cx="66" cy="76" r="6"></circle>',
  rope: '<path d="M28 30c-14 22-14 46 22 46s36-24 22-46"></path><path d="M21 24l14 11M79 24L65 35"></path>',
  bolt: '<path d="M55 12L27 55h23l-8 33 31-45H50z"></path>',
  sun: '<circle cx="50" cy="50" r="18"></circle><path d="M50 12v12M50 76v12M12 50h12M76 50h12M23 23l9 9M68 68l9 9M77 23l-9 9M32 68l-9 9"></path>',
  arc: '<path d="M17 68c20-36 46-36 66 0"></path><path d="M29 68c14-19 28-19 42 0"></path>',
  music: '<path d="M34 70V24l38-8v46"></path><circle cx="28" cy="73" r="10"></circle><circle cx="66" cy="65" r="10"></circle>',
  foot: '<path d="M41 20c14 4 18 23 13 42-4 15-15 22-25 15-11-8-5-22 0-34 4-11 2-26 12-23z"></path><circle cx="62" cy="22" r="5"></circle><circle cx="72" cy="31" r="5"></circle><circle cx="77" cy="43" r="5"></circle>',
  path: '<path d="M20 82c20-11 15-24 31-33 13-7 23-16 29-31"></path><path d="M22 52h15M44 34h14M63 20h13"></path>',
  bike: '<circle cx="28" cy="67" r="16"></circle><circle cx="72" cy="67" r="16"></circle><path d="M28 67l16-28h15l13 28M44 39l18 28M42 67h20"></path>',
  mountain: '<path d="M12 78l25-46 15 24 10-16 26 38z"></path><path d="M37 32l6 18 9 6"></path>',
  disc: '<ellipse cx="50" cy="52" rx="36" ry="14"></ellipse><path d="M20 52c12 10 48 10 60 0"></path>',
  star: '<path d="M50 14l10 24 26 2-20 17 7 25-23-14-23 14 7-25-20-17 26-2z"></path>',
  pins: '<path d="M35 22c0 13-8 28-10 47 6 8 20 8 26 0-2-19-10-34-10-47z"></path><path d="M65 22c0 13-8 28-10 47 6 8 20 8 26 0-2-19-10-34-10-47z"></path>',
  flag: '<path d="M28 84V18"></path><path d="M28 20h42l-8 15 8 15H28"></path>',
  leaf: '<path d="M20 64c35 4 55-15 60-44-31 2-55 17-60 44z"></path><path d="M20 64c17-18 35-29 60-44"></path>',
  controller: '<rect x="18" y="36" width="64" height="36" rx="15"></rect><path d="M35 54h16M43 46v16"></path><circle cx="64" cy="54" r="3"></circle><circle cx="74" cy="54" r="3"></circle>'
};

const gallery = document.querySelector("#activity-gallery");
const count = document.querySelector("#activity-count");
const quiz = document.querySelector("#move-quiz");
const quizResult = document.querySelector("#quiz-result");

function renderActivityCard(activity) {
  const group = groupLookup[activity.group];

  return `
    <article class="activity-card">
      <div class="activity-icon" style="--card-color: ${activity.color}">
        <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
          ${iconTemplates[activity.icon]}
        </svg>
      </div>
      <div class="activity-body">
        <h3>${activity.name}</h3>
        <p>${activity.description}</p>
        <span class="tag">${group.name}</span>
      </div>
    </article>
  `;
}

function renderGroupedActivities() {
  gallery.innerHTML = activityGroups.map((group) => {
    const groupActivities = activities.filter((activity) => activity.group === group.id);

    return `
      <section class="activity-group" id="group-${group.id}">
        <div class="group-heading">
          <div>
            <h3>${group.name}</h3>
            <p>${group.description}</p>
          </div>
          <span class="group-meta">${group.energy} - ${groupActivities.length} ideas</span>
        </div>
        <div class="card-grid">
          ${groupActivities.map(renderActivityCard).join("")}
        </div>
      </section>
    `;
  }).join("");

  count.textContent = `${activities.length} activities in ${activityGroups.length} mood groups`;
}

function getQuizValues() {
  return {
    energy: quiz.elements.energy.value,
    mood: quiz.elements.mood.value,
    people: quiz.elements.people.value
  };
}

function scoreQuiz() {
  const values = getQuizValues();
  const scores = Object.fromEntries(activityGroups.map((group) => [group.id, 0]));

  if (values.energy === "low") {
    scores["soft-start"] += 3;
    scores["focus-reset"] += 2;
  }

  if (values.energy === "medium") {
    scores["mood-boost"] += 3;
    scores["outside-adventure"] += 2;
    scores["social-energy"] += 1;
  }

  if (values.energy === "high") {
    scores["big-energy"] += 3;
    scores["social-energy"] += 2;
  }

  if (values.mood === "calm") {
    scores["focus-reset"] += 3;
    scores["soft-start"] += 2;
  }

  if (values.mood === "social") {
    scores["social-energy"] += 3;
    scores["mood-boost"] += 2;
  }

  if (values.mood === "bold") {
    scores["big-energy"] += 2;
    scores["outside-adventure"] += 2;
    scores["mood-boost"] += 1;
  }

  if (values.people === "solo") {
    scores["soft-start"] += 2;
    scores["focus-reset"] += 2;
    scores["outside-adventure"] += 1;
  }

  if (values.people === "friend") {
    scores["mood-boost"] += 2;
    scores["outside-adventure"] += 2;
    scores["social-energy"] += 1;
  }

  if (values.people === "group") {
    scores["social-energy"] += 3;
    scores["big-energy"] += 1;
  }

  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}

function updateQuizResult() {
  const matchId = scoreQuiz();
  const match = quizMatches[matchId];

  quizResult.innerHTML = `
    <span>Best fit</span>
    <strong>${match.title}</strong>
    <p>${match.text}</p>
    <a class="button primary" href="#group-${matchId}">See this group</a>
  `;
}

quiz.addEventListener("change", updateQuizResult);

renderGroupedActivities();
updateQuizResult();
