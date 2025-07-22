import React from "react";

export default function AboutUs() {
  const sections = [
    {
      title: "📚 Pouranik - Read. Share. Connect.",
      content: `Welcome to Pouranik, an open-source book exploration and reading habit platform for everyone who loves books and stories. Whether you're into self-help, fantasy, biographies, or technology, this is your cozy digital library and community corner.`,
    },
    {
      title: "🔍 What's Pouranik?",
      content: `Pouranik is a web platform where you can:
• Search and explore books from public APIs (like Google Books)
• Browse genres and discover hidden gems
• Write reviews and read what others say
• Join book groups, share your thoughts, and build reading circles
• Buy and sell second-hand books
• Set reading goals and finish books with a personal timer
• Chat with group members, like a digital book club!

It’s more than a reading app. It’s your reading journey, tracked and shared.`,
    },
    {
      title: "🧠 Why the name 'Pouranik'?",
      content: `The name "Pouranik" comes from the Sanskrit word *Paurāṇika*, meaning ancient, mythical, or timeless. 

We chose this name because stories—whether from ancient scriptures or modern fiction—are timeless. Pouranik is built on that idea: to help people connect with the magic of reading, share thoughts, and grow together through books.`,
    },
    {
      title: "🚀 Features (and what's coming!)",
      content: `• Book search with API integration (Google Books/Open Library)
• Genre-based sections: Fiction, Self-help, Tech, etc.
• Book detail page with summary, rating, and reviews
• User reviews system
• Book clubs and group pages
• Messaging in groups (coming soon!)
• Sell/buy second-hand books
• Reading goals and timer tracker
• User profiles and reading shelves (To-Read, Finished)
• Language and accessibility support

✨ Want to help bring these features to life? Scroll to the contributions section!`,
    },
    {
      title: "🛠️ Tech Stack",
      content: `Frontend: React + Tailwind CSS  
API: Google Books API / OpenLibrary API  
Backend: Node.js + Express (planned)  
Database: MongoDB / Firebase (planned)  
Hosting: Vercel / Render`,
    },
    {
      title: "🤝 Contributing to Pouranik",
      content: `We welcome all contributors! Whether you're a beginner or experienced dev, there's always something you can do.

You Can Contribute By:  
• Adding UI components  
• Improving CSS/responsiveness  
• Creating or editing content (genres, book data)  
• Fixing bugs or typos  
• Writing documentation  
• Adding new features (like messaging or timer)`,
    },
    {
      title: "🏷️ Labels You’ll See",
      content: `• \`good first issue\`: Perfect for beginners  
• \`design\`: UI/UX related tasks  
• \`feature\`: New functionality  
• \`bug\`: Something’s not working  
• \`documentation\`: Improve README, guides, etc.`,
    },
    {
      title: "🌐 Community and Support",
      content: `We’ll soon launch GitHub Discussions and a Discord channel for connecting, asking questions, and brainstorming features. Stay tuned!`,
    },
    {
      title: "📖 Inspired By...",
      content: `Every reader who ever felt seen in a story. Let’s build this platform for curious minds across the world.`,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans section-padding">
      <div className="container-md">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: 'var(--primary-700)' }}>
          About <span style={{ color: 'var(--accent-orange)' }}>Pouranik</span>
        </h1>

        <div className="grid gap-10">
          {sections.map((sec, index) => (
            <div
              key={index}
              className="card-modern p-8 md:p-10 fade-in"
              style={{
                background: 'linear-gradient(135deg, var(--primary-50), var(--primary-100))',
                border: '1px solid var(--primary-200)',
              }}
            >
              <h2 className="text-2xl font-semibold mb-3" style={{ color: 'var(--primary-700)' }}>
                {sec.title}
              </h2>
              <pre className="text-lg leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--text-secondary)' }}>
                {sec.content}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
