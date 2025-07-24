import BookCard from "./BookCard";

const ShelfSection = ({ title, books }) => {
  return (
    <div className="!my-8 h-[30%] w-[96%]">
      <div className="text-xl font-semibold mb-3 !text-[#a16207]">{title}</div>
      
      <div className="flex items-end space-x-4 !px-2 pt-2 overflow-x-auto hide-scrollbar">
        {books.map((book, idx) => (
          <BookCard key={idx} book={book} />
        ))}
      </div>

      <div className="bg-amber-800 h-4 w-full rounded-t-md"></div> {/* Shelf base */}
    </div>
  );
};

export default ShelfSection;
