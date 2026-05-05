require("dotenv").config();
const mongoose = require("mongoose");
const Book = require("./models/Book");

mongoose.connect(process.env.MONGO_URI);

const books = [

  // ❤️ ROMANTIC
  {
    title: "It Ends With Us",
    author: "Colleen Hoover",
    genre: "Romantic",
    price: 499,
    rating: 4.8,
    tagline: "Love hurts 💔",
    overview: "Lily moves to Boston to start fresh. She meets Ryle and falls deeply in love. Everything feels perfect at first. Slowly, his darker side begins to show. She struggles between love and pain. In the end, she chooses herself.",
    image: "https://covers.openlibrary.org/b/id/15123232-L.jpg"
  },
  {
    title: "It Starts With Us",
    author: "Colleen Hoover",
    genre: "Romantic",
    price: 450,
    rating: 4.7,
    tagline: "Second chances ❤️",
    overview: "Lily reconnects with her first love Atlas. Their past memories return strongly. She now has a child and a complicated life. Love finds its way again. They try to rebuild what was lost. A story of healing and hope.",
    image: "https://ia801909.us.archive.org/view_archive.php?archive=/31/items/l_covers_0013/l_covers_0013_77.zip&file=0013775341-L.jpg"
  },
  {
    title: "Ugly Love",
    author: "Colleen Hoover",
    genre: "Romantic",
    price: 420,
    rating: 4.6,
    tagline: "Messy love 💔",
    overview: "Tate meets Miles and agrees to a no-strings relationship. He avoids love completely. Slowly emotions begin to grow. His painful past comes in between. They struggle to stay apart. Love eventually finds its way.",
    image: "https://m.media-amazon.com/images/I/71E8VNPC1dL._SY466_.jpg"
  },
  {
    title: "Love & Other Words",
    author: "Christina Lauren",
    genre: "Romantic",
    price: 420,
    rating: 4.6,
    tagline: "Childhood love 💕",
    overview: "Macy reunites with her childhood friend Elliot. Their past memories slowly unfold. Something broke them years ago. They try to fix what was lost. Pain and love mix together. A deeply emotional journey.",
    image: "https://m.media-amazon.com/images/I/51Z4Pngqs+L._SY445_SX342_FMwebp_.jpg"
  },
  {
    title: "The Fault in Our Stars",
    author: "John Green",
    genre: "Romantic",
    price: 399,
    rating: 4.8,
    tagline: "Love beyond life ✨",
    overview: "Hazel meets Augustus in a cancer support group. They fall deeply in love. Together they explore life and dreams. Their bond grows stronger each day. Life throws unexpected challenges. A heartbreaking yet beautiful story.",
    image: "https://ia601705.us.archive.org/view_archive.php?archive=/29/items/l_covers_0008/l_covers_0008_82.zip&file=0008824679-L.jpg"
  },

  // 😂 COMEDY
  {
    title: "Diary of a Wimpy Kid",
    author: "Jeff Kinney",
    genre: "Comedy",
    price: 350,
    rating: 4.5,
    tagline: "School chaos 😂",
    overview: "Greg writes about his daily school struggles. Everything goes wrong in funny ways. His friendship creates more trouble. He tries to be popular but fails. Life turns into comedy. A super fun read.",
    image: "https://covers.openlibrary.org/b/id/15112755-L.jpg"
  },
  {
    title: "Bossypants",
    author: "Tina Fey",
    genre: "Comedy",
    price: 380,
    rating: 4.4,
    tagline: "Funny life 😂",
    overview: "Tina Fey shares her life journey. From awkward childhood to success. She explains struggles in a funny way. Her experiences inspire readers. Humor and reality blend perfectly. A light comedy memoir.",
    image: "https://ia600507.us.archive.org/view_archive.php?archive=/8/items/l_covers_0009/l_covers_0009_07.zip&file=0009079230-L.jpg"
  },
  {
    title: "The Hitchhiker's Guide",
    author: "Douglas Adams",
    genre: "Comedy",
    price: 399,
    rating: 4.7,
    tagline: "Don't panic 😂",
    overview: "Earth gets destroyed suddenly. Arthur travels across space. He meets strange aliens and situations. Everything feels absurd and funny. Chaos follows everywhere. A legendary sci-fi comedy.",
    image: "https://m.media-amazon.com/images/I/91t2EXhrJwL._SY342_.jpg"
  },

  // ⏳ TIME TRAVEL
  {
    title: "The Time Machine",
    author: "H.G. Wells",
    genre: "Time Travel",
    price: 299,
    rating: 4.4,
    tagline: "Future journey ⏳",
    overview: "A scientist builds a time machine. He travels far into the future. Humanity has changed completely. Strange creatures appear. He struggles to survive. A classic sci-fi story.",
    image: "https://covers.openlibrary.org/b/id/15143630-L.jpg"
  },
  {
    title: "Dark Matter",
    author: "Blake Crouch",
    genre: "Time Travel",
    price: 550,
    rating: 4.6,
    tagline: "Alternate worlds 🌌",
    overview: "Jason is kidnapped into another reality. He sees alternate versions of his life. Every choice leads to a different path. He tries to find his real life. Danger surrounds him. A thrilling ride.",
    image: "https://covers.openlibrary.org/b/id/15104743-L.jpg"
  },
  {
    title: "Recursion",
    author: "Blake Crouch",
    genre: "Time Travel",
    price: 420,
    rating: 4.6,
    tagline: "Memory chaos 🧠",
    overview: "People start remembering lives they never lived. A scientist discovers time manipulation. Reality begins to break apart. Past and present collide. Chaos spreads globally. A mind-bending thriller.",
    image: "https://ia600404.us.archive.org/view_archive.php?archive=/33/items/l_covers_0010/l_covers_0010_52.zip&file=0010526597-L.jpg"
  },

  // 💡 SELF HELP
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self Help",
    price: 599,
    rating: 4.9,
    tagline: "Tiny changes 🚀",
    overview: "Success comes from small habits. Focus on daily improvements. Consistency matters the most. Build better routines slowly. Avoid big sudden changes. A powerful guide for life.",
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg"
  },
  {
    title: "Think Like a Monk",
    author: "Jay Shetty",
    genre: "Self Help",
    price: 500,
    rating: 4.6,
    tagline: "Inner peace 🧘",
    overview: "Learn to control your thoughts. Let go of negativity. Focus on purpose and clarity. Life becomes simpler with discipline. Happiness comes from within. A calm and mindful book.",
    image: "https://ia800404.us.archive.org/view_archive.php?archive=/33/items/l_covers_0010/l_covers_0010_43.zip&file=0010434513-L.jpg"
  },

  // 🌍 FICTION / FANTASY
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    genre: "Fantasy",
    price: 700,
    rating: 4.9,
    tagline: "Magic world ⚡",
    overview: "Harry discovers he is a wizard. He joins a magical school. Faces dark forces and enemies. Friendship helps him survive. Courage defines his journey. A magical adventure.",
    image: "https://m.media-amazon.com/images/I/81YOuOGFCJL.jpg"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    price: 450,
    rating: 4.8,
    tagline: "Epic journey 🏔",
    overview: "Bilbo joins dwarves on an adventure. They seek treasure guarded by a dragon. The journey is full of danger. He discovers his courage. Unexpected events occur. A fantasy masterpiece.",
    image: "https://m.media-amazon.com/images/I/51B9ZIPwB9L._SY445_SX342_FMwebp_.jpg"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    price: 399,
    rating: 4.8,
    tagline: "Follow dreams ✨",
    overview: "A shepherd dreams of treasure. He travels far to find it. Meets many people along the way. Learns life lessons deeply. Destiny guides him forward. A philosophical story.",
    image: "https://i.pinimg.com/originals/4e/89/1a/4e891a008a3c7d70957375d3544a4e30.jpg"
  },

  // 🔥 EXTRA BOOKS (to reach 25)
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Thriller",
    price: 450,
    rating: 4.6,
    tagline: "Silent mystery 🤫",
    overview: "A woman stops speaking after a crime. A therapist tries to uncover truth. Her silence hides secrets. The story slowly unfolds. Twists shock the reader. A gripping thriller.",
    image: "https://covers.openlibrary.org/b/id/15105887-L.jpg"
  },
  {
    title: "Verity",
    author: "Colleen Hoover",
    genre: "Thriller",
    price: 420,
    rating: 4.7,
    tagline: "Dark secrets 😳",
    overview: "A writer is hired to complete a novel. She discovers hidden manuscripts. Truth becomes disturbing. Reality and lies mix together. Fear grows with each page. A psychological thriller.",
    image: "https://m.media-amazon.com/images/I/91GK2UcpNmL._SX342_.jpg"
  },
  {
    title: "Ikigai",
    author: "Hector Garcia",
    genre: "Self Help",
    price: 399,
    rating: 4.7,
    tagline: "Purpose of life 🌸",
    overview: "Explore the Japanese concept of Ikigai. Find your life purpose. Happiness comes from small things. Live longer and peacefully. Balance is key. A calm life guide.",
    image: "https://m.media-amazon.com/images/I/51-QPfmmlaL._SY300_SX300_QL70_FMwebp_.jpg"
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    genre: "Finance",
    price: 450,
    rating: 4.7,
    tagline: "Money mindset 💰",
    overview: "Two fathers teach different lessons. One focuses on jobs. The other focuses on investing. Financial education is important. Learn money management. A beginner-friendly guide.",
    image: "https://m.media-amazon.com/images/I/51NuMV9SJ8L._SY300_SX300_QL70_FMwebp_.jpg"
  }
];

const seed = async () => {
  await Book.deleteMany({});
  await Book.insertMany(books);
  console.log("🔥 25 Books Added");
  process.exit();
};

seed();