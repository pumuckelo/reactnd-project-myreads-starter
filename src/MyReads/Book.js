import React from "react";

const Book = (props) => {
  const { book, onUpdateBook } = props;

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                book.imageLinks && book.imageLinks.thumbnail
                  ? `${book.imageLinks.thumbnail}`
                  : `http://via.placeholder.com/128x193?text=No%20Cover`
              })`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={(e) => {
                onUpdateBook(book, e.target.value);
              }}
              value={book.shelf}
            >
              <option disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {Array.isArray(book.authors) ? book.authors.join(", ") : book.author}
        </div>
      </div>
    </li>
  );
};

export default Book;
