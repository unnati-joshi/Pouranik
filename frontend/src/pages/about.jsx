import React from "react";

export default function AboutUs() {
  const sections = [
    {
      title: " What's Pouranik? ",
      bg: "bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50",
      borderColor: "border-indigo-200",
      glowColor: "shadow-indigo-200/50",
      textColor: "text-indigo-700",

      content: ` Pouranik is an open-source platform that celebrates the love for reading. Whether you're into fantasy, self-help, or tech—this is your cozy digital library. Search books, write reviews, join clubs, set reading goals, and even buy/sell second-hand books.`,
    },
    {
      title: " Why the Name 'Pouranik'?",
      bg: "bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50",
      borderColor: "border-amber-200",
      glowColor: "shadow-amber-200/50",
      textColor: "text-amber-700",
      content: ` "Pouranik" is derived from the Sanskrit word Paurāṇika, meaning ancient or timeless. Stories are eternal—this platform brings readers together to rediscover that timeless magic. `,
    },
    {
      title: " Features",
      bg: "bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50",
      borderColor: "border-emerald-200",
      glowColor: "shadow-emerald-200/50",
      textColor: "text-emerald-700",
      content: ` • Search and explore books via APIs\n • Browse genres and discover gems\n • Read & write reviews\n• Join book clubs and group chats\n • Set reading goals with timers\n• Buy/sell second-hand books\n• User profiles & reading shelves`,
    },
    {
      title: " Tech Stack",
      bg: "bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50",
      borderColor: "border-rose-200",
      glowColor: "shadow-rose-200/50",
      textColor: "text-rose-700",
      content: ` • Frontend: React + Tailwind\n • API: Google Books / OpenLibrary\n• Backend: Node.js + Express (planned)\n• Database: MongoDB / Firebase (planned)\n• Hosting: Vercel / Render`,
    },
    {
      title: " Community",
      bg: "bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50",
      borderColor: "border-violet-200",
      glowColor: "shadow-violet-200/50",
      textColor: "text-violet-700",
      content: ` Pouranik is built with ❤️ by contributors and book lovers.\nGitHub Discussions & Discord launching soon for feedback, collaboration, and more!`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 text-gray-800 pb-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="relative px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-center">
          <div className="animate-pulse duration-2000">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 sm:mb-6">
              📚 Pouranik
            </h1>
          </div>
        <div className="flex items-center justify-center w-full h-32">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light text-center">
  Where timeless stories meet modern readers
</p>
            </div>
          <div className="mt-6 sm:mb-8 w-24 sm:w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto"></div>
        </div>
      </div>
      <div className="margin-bottom-12"></div>

      {/* Main Content */}
<div className="py-12 sm:py-16 md:py-20 w-full flex justify-center items-center flex-col">
  <div className="flex flex-col items-center gap-12 w-full">
    {sections.map((section, index) => (
      <div
        key={index}
        className={`group relative overflow-hidden ${section.bg} ${section.borderColor} border-2 rounded-2xl px-10 py-14 sm:px-14 sm:py-16 md:px-20 md:py-20 w-full max-w-4xl mx-auto transition-transform duration-500 hover:scale-[1.02] hover:${section.glowColor} hover:shadow-2xl`}
        style={{
          animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
        }}
      >
              {/* Glow Effects */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/30 to-transparent rounded-full transform translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-white/20 to-transparent rounded-full transform -translate-x-10 translate-y-10 group-hover:scale-125 transition-transform duration-700"></div>

              {/* Text */}
              <div className="relative z-10 text-center">
                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 ${section.textColor}`}>
                  {section.title}
                </h2>
                <div className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed space-y-4 text-center">
                  {section.content.split("\n").map((line, i) => (
                    <p 
                      key={i}
                      className={`group relative overflow-hidden ${section.bg} ${section.borderColor} border-2 rounded-2xl px-10 py-14 sm:px-14 sm:py-16 md:px-20 md:py-20 w-full max-w-4xl mx-auto transition-transform duration-500 hover:scale-[1.02] hover:${section.glowColor} hover:shadow-2xl`}
  style={{
    animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
  }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add spacing before footer */}
      <div className="h-12 sm:h-16"></div>
    </div>
  );
}
