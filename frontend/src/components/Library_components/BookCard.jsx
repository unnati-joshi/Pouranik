const BookCard = ({ cover }) => {
  return (
    <div className="w-24 md:w-28 lg:w-32 transform hover:scale-105 transition min-w-36">
      <img
        src={cover}
        alt="Book Cover"
        className="rounded shadow-[inset_-4px_0px_6px_rgba(0,0,0,0.1),4px_4px_12px_rgba(0,0,0,0.2)]"
      />
    </div>
  );
};

export default BookCard;
