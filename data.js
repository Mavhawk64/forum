var defaultThreads = [
  {
    id: 1,
    title: "Thread 1",
    author: "Maverick",
    date: Date.now(),
    content: "Thread content",
    comments: [
      {
        author: "Jack",
        date: Date.now(),
        content: "Hello World!"
      },
      {
        author: "Billy",
        date: Date.now(),
        content: "How do you do?"
      }
    ]
  },
  {
    id: 2,
    title: "How do you remember the directions?",
    author: "Lisa",
    date: Date.now(),
    content: "I like to use Never Eat Soggy Waffles or NEWS.",
    comments: [
      {
        author: "John",
        date: Date.now(),
        content: "Very Cool!"
      },
      {
        author: "Cathy",
        date: Date.now(),
        content: "Thank you!"
      }
    ]
  }
];

var threads;
if(localStorage && localStorage.getItem('threads')) {
  threads = JSON.parse(localStorage.getItem('threads'));
} else {
  threads = defaultThreads;
  localStorage.setItem('threads', JSON.stringify(defaultThreads));
}
