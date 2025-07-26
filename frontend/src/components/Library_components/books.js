import { useEffect, useState } from "react";

const useLibraryBooks = (trigger) => {
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [nextUp, setNextUp] = useState([]);
  const [finished, setFinished] = useState([]);

  useEffect(() => {
    const fetchLibrary = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await fetch("http://localhost:5000/api/v1/library", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        // console.log(data.books);

        // Categorize books based on `category`
        const current = [];
        const upcoming = [];
        const done = [];

        data.books.forEach((book) => {
          if (book.category === "currently-reading") current.push(book);
          else if (book.category === "next-up") upcoming.push(book);
          else if (book.category === "finished") done.push(book);
        });

        // console.log(current, upcoming, done);

        setCurrentlyReading(current);
        setNextUp(upcoming);
        setFinished(done);
      } catch (error) {
        console.error("Error fetching books:", error.message);
      }
    };

    fetchLibrary();
  }, [trigger]);

  return { currentlyReading, nextUp, finished };
};

export default useLibraryBooks;
