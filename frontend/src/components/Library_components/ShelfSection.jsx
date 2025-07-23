import BookCard from "./BookCard";

const ShelfSection = ({ title, books }) => {
  return (
    <div className="m-10 h-[30%] w-[90%]">
      <div className="text-xl font-semibold mb-3 !text-[#a16207]">{title}</div>
      
      <div className="flex items-end space-x-4 px-2 pb-4 pt-2 overflow-x-auto hide-scrollbar">
        {books.map((book, idx) => (
          <BookCard key={idx} cover={book.cover} />
        ))}
      </div>

      <div className="bg-[#f5f0ea] h-4 rounded-t-md mx-2"></div> {/* Shelf base */}
    </div>
  );
};

export default ShelfSection;
