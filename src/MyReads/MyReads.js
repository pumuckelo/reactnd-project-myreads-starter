import React, { Component } from "react";
import { getAll, update } from "../BooksAPI";
import Category from "./Category";
import { stringHelper } from "../helper/stringHelper";
import { Link } from "react-router-dom";

class MyReads extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    getAll().then(books => this.setState({ books }));
  }

  updateBookHandler = (book, shelf) => {
    //replace the book at the old position in array with the updated book
    this.setState(prevState => {
      let index = prevState.books.indexOf(book);
      const books = [...prevState.books];
      //   books[index] = { ...book, shelf: shelf };
      books[index].shelf = shelf;
      return {
        books: books
      };
    });
    console.log(`Book: ${JSON.stringify(book)}, Shelf: ${shelf}`);
    //update book via api on backend
    update(book, shelf);
  };

  render() {
    console.log(this.state.books);

    const wantToReadCategory = this.state.books.filter(
      book => book.shelf === "wantToRead"
    );

    const currentlyReadingCategory = this.state.books.filter(
      book => book.shelf === "currentlyReading"
    );

    const readCategory = this.state.books.filter(book => book.shelf === "read");

    return (
      <div>
        <h1
          style={{
            backgroundColor: "green",
            padding: "1rem",
            textAlign: "center",
            width: "100%",
            marginTop: "0",
            color: "white"
          }}
        >
          My Reads
        </h1>
        <Category
          key={stringHelper.hash("currentlyReadingCategory")}
          onUpdateBook={this.updateBookHandler}
          title="Currently Reading"
          books={currentlyReadingCategory}
        />
        <Category
          key={stringHelper.hash("wantToReadCategory")}
          onUpdateBook={this.updateBookHandler}
          title="Want to read"
          books={wantToReadCategory}
        />
        <Category
          key={stringHelper.hash("readCategory")}
          onUpdateBook={this.updateBookHandler}
          title="Read"
          books={readCategory}
        />
        <div className="open-search">
          <Link to="/search">
            <button onClick={() => this.setState({ showSearchPage: true })}>
              Add a book
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default MyReads;
