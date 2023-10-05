import Book from "./Book";
import { books } from "./books.data";

const BookList = () => {
  return (
    <div className="book-list">
      {books?.map((book, index) => {
        return <Book id={index} {...book} />;
      })}
    </div>
  );
};

export default BookList;
