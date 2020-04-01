import React from "react";
import Book from "./Book";

const Category = props => {
  const { onUpdateBook, books, title } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <Book key={book.id} onUpdateBook={onUpdateBook} book={book} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Category;
