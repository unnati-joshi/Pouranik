import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaStar, FaUser, FaLaptopCode, FaLandmark, FaBolt, FaMicroscope, FaHeart, FaUserSecret, FaDragon, FaGhost, FaMapMarkedAlt, FaSearch } from 'react-icons/fa';
import './Genres.css';

const genres = [
  { 
    name: 'Fiction', 
    icon: <FaBook className="genre-icon" style={{ color: 'var(--primary-700)' }} />, 
    description: 'Imaginative stories, novels, and literary works', 
    color: 'from-purple-500 to-pink-500',
    bookCount: '15M+'
  },
  { 
    name: 'Self-Help', 
    icon: <FaStar className="genre-icon" style={{ color: 'var(--primary-700)' }} />, 
    description: 'Personal development and growth guides', 
    color: 'from-blue-500 to-cyan-500',
    bookCount: '2M+'
  },
  { 
    name: 'Biography', 
    icon: <FaUser className="genre-icon" style={{ color: 'var(--primary-700)' }} />, 
    description: 'Real life stories of inspiring people', 
    color: 'from-green-500 to-teal-500',
    bookCount: '1.5M+'
  },
  { 
    name: 'Technology', 
    icon: <FaLaptopCode className="genre-icon" style={{ color: 'var(--primary-700)' }} />, 
    description: 'Programming, AI, and digital innovation', 
    color: 'from-gray-500 to-slate-600',
    bookCount: '500K+'
  },
  { 
    name: 'History', 
    icon: <FaLandmark className="genre-icon" style={{ color: 'var(--primary-700)' }} />, 
    description: 'Past events, civilizations, and cultures', 
    color: 'from-yellow-500 to-orange-500',
    bookCount: '3M+'
  },
  { 
    name: 'Mythology', 
    icon: <FaBolt className="genre-icon" style={{ color: 'var(--primary-700)' }} />, 
    description: 'Ancient myths, legends, and folklore', 
    color: 'from-red-500 to-pink-500',
    bookCount: '200K+'
  },
  { 
    name: 'Science', 
    icon: <FaMicroscope className="genre-icon" style={{ color: 'var(--primary-700)' }} />, 
    description: 'Scientific discoveries and research', 
    color: 'from-indigo-500 to-purple-500',
    bookCount: '1M+'
  },
  { 
    name: 'Romance', 
    icon: <FaHeart className="genre-icon" style={{ color: 'var(--primary-700)' }} />, 
    description: 'Love stories and relationship novels', 
    color: 'from-pink-500 to-rose-500',
    bookCount: '8M+'
  },
  { 
    name: 'Mystery', 
    icon: <FaUserSecret className="genre-icon" style={{ color: 'var(--primary-700)' }} />, 
    description: 'Thrilling detective and crime stories', 
    color: 'from-gray-700 to-gray-900',
    bookCount: '4M+'
  },
  { 
    name: 'Fantasy', 
    icon: <FaDragon className="genre-icon" style={{ color: 'var(--primary-700)' }} />, 
    description: 'Magical worlds and epic adventures', 
    color: 'from-purple-600 to-indigo-600',
    bookCount: '6M+'
  },
  { 
    name: 'Horror', 
    icon: <FaGhost className="genre-icon" style={{ color: 'var(--primary-700)' }} />, 
    description: 'Spine-chilling and supernatural tales', 
    color: 'from-gray-800 to-black',
    bookCount: '3.5M+'
  },
  { 
    name: 'Adventure', 
    icon: <FaMapMarkedAlt className="genre-icon" style={{ color: 'var(--primary-700)' }} />, 
    description: 'Exciting journeys and exploration', 
    color: 'from-green-600 to-emerald-600',
    bookCount: '2.5M+'
  }
];

export default function Genres() {
  const [hoveredGenre, setHoveredGenre] = useState(null);

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      {/*<section className="page-hero section-spacing-small">*/}
      <section className="page-hero section-spacing-small genres-hero"> {/*fixed alignment to the center*/}


        <div className="container-modern text-center">
          <h1 className="heading-primary genres-heading">
            <FaBook className="inline mr-2" /> Explore Genres
          </h1>
          <p className="text-body-large genres-description">
            Discover books by your favorite categories and explore new literary territories. 
            Each genre offers a unique journey into different worlds of knowledge and imagination.
          </p>
          
          {/* Stats */}
          <div className="genres-stats glass-effect">
            <div className="genres-stats-grid">
              <div>
                <div className="stat-value">40M+</div>
                <div className="stat-label">Total Books</div>
              </div>
              <div>
                <div className="stat-value">12</div>
                <div className="stat-label">Popular Genres</div>
              </div>
              <div>
                <div className="stat-value">100+</div>
                <div className="stat-label">Languages</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Genres Grid */}
      <section className="section-spacing-small">
        <div className="container-modern">
          <div className="grid-modern grid-3">
            {genres.map((genre, index) => {
  const delay = `${index * 0.1}s`;

  return (
    <Link
      key={genre.name}
      to={`/explore?genre=${encodeURIComponent(genre.name)}`}
      className="block no-underline slide-in-animation"
      style={{ animationDelay: delay }}
      onMouseEnter={() => setHoveredGenre(index)}
      onMouseLeave={() => setHoveredGenre(null)}
    >
      <article className={`genre-card ${hoveredGenre === index ? 'scale-105' : ''}`}>
                  
                  {/* Background Gradient */}
                  <div className={`genre-card-bg bg-gradient-to-br ${genre.color}`}></div>
                  
                  {/* Decorative Elements */}
                  <div className="decorative-circle-1"></div>
                  <div className="decorative-circle-2"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="genre-emoji">
                        {genre.icon}
                      </div>
                      <h3 className="genre-name heading-tertiary">
                        {genre.name}
                      </h3>
                      <div className="genre-count">
                        <span>{genre.bookCount} books</span>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="genre-description text-center">
                      {genre.description}
                    </p>
                    
                    {/* Action Button */}
                    <div className="genre-action-button">
                      <span>
                        <FaSearch className="inline mr-1" />
                        Explore {genre.name}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-spacing">
        <div className="container-narrow">
          <div className="glass-effect-strong card-modern border-gradient py-12 px-8">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center cta-heading-container">
                <FaSearch className="text-2xl md:text-3xl" style={{ minWidth: '24px', color: 'var(--primary-700)', marginRight: '1.5rem' }} />
                <h3 className="heading-secondary text-2xl md:text-3xl font-bold m-0" style={{ color: 'var(--primary-700)' }}>
                  Can't Find Your Perfect Genre?
                </h3>
              </div>
              <p className="text-body-large max-w-lg text-center cta-subtext" style={{ color: 'var(--text-secondary)' }}>
                Use our advanced search to find books by specific topics, authors, keywords, or even ISBN numbers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 cta-buttons">
                <Link 
                  to="/explore" 
                  className="button-primary inline-flex items-center gap-3 no-underline"
                >
                  Advanced Search
                </Link>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="button-secondary inline-flex items-center gap-3"
                >Back to Top
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Combinations */}
      <section className="popular-combinations">
        <div className="container-modern py-12">
          <div className="text-center mb-12">
            <h3 className="heading-tertiary text-white mb-4">
              Popular Genre Combinations
            </h3>
            <p className="text-body text-gray-300 max-w-2xl mx-auto">
              Try these popular search combinations to discover unique book collections
            </p>
          </div>
          
          <div className="combinations-grid">
            {[
              { name: 'Science Fiction Fantasy', icon: <FaDragon className="inline-block mb-1 mr-2" /> },
              { name: 'Mystery Thriller', icon: <FaUserSecret className="inline-block mb-1 mr-2" /> },
              { name: 'Historical Fiction', icon: <FaLandmark className="inline-block mb-1 mr-2" /> },
              { name: 'Self Help Business', icon: <FaStar className="inline-block mb-1 mr-2" /> },
              { name: 'Biography History', icon: <FaUser className="inline-block mb-1 mr-2" /> },
              { name: 'Romance Adventure', icon: <FaHeart className="inline-block mb-1 mr-2" /> },
              { name: 'Horror Mystery', icon: <FaGhost className="inline-block mb-1 mr-2" /> },
              { name: 'Technology Science', icon: <FaLaptopCode className="inline-block mb-1 mr-2" /> }
            ].map(({ name, icon }) => (
              <Link
                key={name}
                to={`/explore?genre=${encodeURIComponent(name)}`}
                className="combination-card"
              >
                <span className="combination-text">
                  {icon}
                  {name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
