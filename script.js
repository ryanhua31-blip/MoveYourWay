const activities = [
  {
    name: "Basketball",
    category: "sports",
    description: "Shoot around, play one-on-one, or just practice trick shots with a friend.",
    icon: "ball",
    color: "#f6c56f"
  },
  {
    name: "Soccer",
    category: "sports",
    description: "Kick, pass, and run in short bursts. A driveway or park is enough.",
    icon: "goal",
    color: "#b9dfc0"
  },
  {
    name: "Volleyball",
    category: "sports",
    description: "A team sport that can be silly, social, and less intense than it looks.",
    icon: "ball",
    color: "#f4a397"
  },
  {
    name: "Badminton",
    category: "sports",
    description: "Light, fast, and easier to start than most racket sports.",
    icon: "racket",
    color: "#b9d2ef"
  },
  {
    name: "Table Tennis",
    category: "sports",
    description: "Quick rallies, tiny space, and no need to run across a full court.",
    icon: "racket",
    color: "#f5dfa0"
  },
  {
    name: "Tennis",
    category: "sports",
    description: "Hit with a partner or bounce against a wall until it starts to click.",
    icon: "racket",
    color: "#c5e8cf"
  },
  {
    name: "Pickleball",
    category: "sports",
    description: "A friendly court game with shorter movements and a low-pressure vibe.",
    icon: "paddle",
    color: "#e9b4d0"
  },
  {
    name: "Swimming",
    category: "sports",
    description: "Easy on joints, cool in summer, and perfect for moving without feeling sweaty.",
    icon: "wave",
    color: "#a9d9f6"
  },
  {
    name: "Skateboarding",
    category: "sports",
    description: "Practice balance, small tricks, and cruising at your own speed.",
    icon: "board",
    color: "#d0c0ee"
  },
  {
    name: "Roller Skating",
    category: "sports",
    description: "Music plus wheels makes movement feel more like hanging out.",
    icon: "skate",
    color: "#f1b4a9"
  },
  {
    name: "Jump Rope",
    category: "workouts",
    description: "Start with twenty jumps and build up whenever you feel ready.",
    icon: "rope",
    color: "#f6c56f"
  },
  {
    name: "Bodyweight Circuit",
    category: "workouts",
    description: "Try squats, wall pushups, and planks without needing equipment.",
    icon: "bolt",
    color: "#b9dfc0"
  },
  {
    name: "Yoga",
    category: "chill",
    description: "Stretch, breathe, and get stronger without turning everything into a competition.",
    icon: "sun",
    color: "#f5dfa0"
  },
  {
    name: "Pilates",
    category: "workouts",
    description: "Slow, controlled moves that make your core feel secretly powerful.",
    icon: "arc",
    color: "#d0c0ee"
  },
  {
    name: "Dance Workout",
    category: "creative",
    description: "Pick a song and move badly on purpose until it becomes fun.",
    icon: "music",
    color: "#f4a397"
  },
  {
    name: "Walking",
    category: "chill",
    description: "The easiest start: walk around the block, around school, or around a store.",
    icon: "foot",
    color: "#c5e8cf"
  },
  {
    name: "Jog-Walk",
    category: "workouts",
    description: "Jog for thirty seconds, walk for two minutes, repeat as gently as needed.",
    icon: "path",
    color: "#b9d2ef"
  },
  {
    name: "Cycling",
    category: "outdoors",
    description: "Ride for errands, fresh air, or just to make a boring route feel different.",
    icon: "bike",
    color: "#a9d9f6"
  },
  {
    name: "Hiking",
    category: "outdoors",
    description: "A walk with better scenery and built-in snack breaks.",
    icon: "mountain",
    color: "#b9dfc0"
  },
  {
    name: "Frisbee",
    category: "outdoors",
    description: "Low equipment, easy rules, and lots of chances to laugh off bad throws.",
    icon: "disc",
    color: "#f5dfa0"
  },
  {
    name: "Ultimate Frisbee",
    category: "sports",
    description: "Team play that rewards passing, spacing, and trying again.",
    icon: "disc",
    color: "#f1b4a9"
  },
  {
    name: "Climbing",
    category: "workouts",
    description: "Solve routes like puzzles while your arms and legs do the work.",
    icon: "mountain",
    color: "#d0c0ee"
  },
  {
    name: "Martial Arts",
    category: "workouts",
    description: "Learn balance, focus, and confidence one form or drill at a time.",
    icon: "star",
    color: "#f4a397"
  },
  {
    name: "Kickboxing",
    category: "workouts",
    description: "Punch and kick pads for stress relief with clear, learnable patterns.",
    icon: "bolt",
    color: "#f6c56f"
  },
  {
    name: "Dodgeball",
    category: "sports",
    description: "Chaotic, quick, and funny if everyone keeps it friendly.",
    icon: "ball",
    color: "#b9d2ef"
  },
  {
    name: "Bowling",
    category: "chill",
    description: "A relaxed sport where snacks and friends are basically part of the game.",
    icon: "pins",
    color: "#e9b4d0"
  },
  {
    name: "Mini Golf",
    category: "chill",
    description: "Tiny challenges, goofy obstacles, and no need to be super serious.",
    icon: "flag",
    color: "#c5e8cf"
  },
  {
    name: "Disc Golf",
    category: "outdoors",
    description: "Walk a course, throw discs, and keep moving without sprinting.",
    icon: "disc",
    color: "#f5dfa0"
  },
  {
    name: "Kayaking",
    category: "outdoors",
    description: "Paddle on calm water and let the view do half the convincing.",
    icon: "wave",
    color: "#a9d9f6"
  },
  {
    name: "Gardening",
    category: "outdoors",
    description: "Digging, carrying, and planting count as movement, and you get results you can see.",
    icon: "leaf",
    color: "#b9dfc0"
  },
  {
    name: "Active Video Games",
    category: "creative",
    description: "Use dancing, fitness, or sports games as a bridge from screen time to movement.",
    icon: "controller",
    color: "#d0c0ee"
  },
  {
    name: "Cheer Basics",
    category: "creative",
    description: "Learn jumps, chants, and simple routines with rhythm and energy.",
    icon: "star",
    color: "#f1b4a9"
  },
  {
    name: "Park Games",
    category: "outdoors",
    description: "Tag, capture the flag, or made-up rules all count if they get people moving.",
    icon: "flag",
    color: "#f6c56f"
  },
  {
    name: "Stretch Breaks",
    category: "chill",
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

const grid = document.querySelector("#activity-grid");
const count = document.querySelector("#activity-count");
const filterButtons = document.querySelectorAll(".filter-button");

function renderActivities(filter) {
  const visibleActivities = filter === "all"
    ? activities
    : activities.filter((activity) => activity.category === filter);

  grid.innerHTML = visibleActivities.map((activity) => `
    <article class="activity-card">
      <div class="activity-icon" style="--card-color: ${activity.color}">
        <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
          ${iconTemplates[activity.icon]}
        </svg>
      </div>
      <div class="activity-body">
        <h3>${activity.name}</h3>
        <p>${activity.description}</p>
        <span class="tag">${activity.category}</span>
      </div>
    </article>
  `).join("");

  count.textContent = `${visibleActivities.length} activities`;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderActivities(button.dataset.filter);
  });
});

renderActivities("all");
