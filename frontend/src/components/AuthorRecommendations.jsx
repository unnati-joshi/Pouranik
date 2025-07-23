

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function AuthorRecommendations({ currentBookId, author }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!author) return;

    setLoading(true);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${encodeURIComponent(author)}&maxResults=6`)
      .then(res => res.json())
      .then(data => {
        const filtered = data.items?.filter(item => item.id !== currentBookId) || [];
        setBooks(filtered);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch recommended books:", err);
        setLoading(false);
      });
  }, [author, currentBookId]);

  if (loading || books.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span className="text-yellow-500 text-3xl">📚</span>
          More Books by {author}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map(bookItem => {
            const info = bookItem.volumeInfo || {};
            const image = info.imageLinks?.extraLarge ||
              info.imageLinks?.large ||
              info.imageLinks?.medium ||
              info.imageLinks?.thumbnail ||
              info.imageLinks?.smallThumbnail ||
              '';

            return (
              <Link
                key={bookItem.id}
                to={`/book/${bookItem.id}`}
                className="block p-4 bg-gray-50 rounded-lg hover:shadow-md transition"
              >
                {image ? (
                <img
                    src={image.replace('http:', 'https:')}
                    alt={info.title}
                    className="w-full h-48 object-cover rounded mb-6"
                />
                ) : (
                <div className="w-full h-48 bg-gray-200 rounded mb-6 flex items-center justify-center text-gray-500 text-sm">
                    No Image Available
                </div>
                )}
                <h3 className="text-lg font-semibold text-gray-800">{info.title}</h3>
                {info.publishedDate && (
                  <p className="text-sm text-gray-500 mt-1">{info.publishedDate}</p>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
