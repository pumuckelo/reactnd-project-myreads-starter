import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search, update, getAll } from "../BooksAPI";
import Book from "./Book";

class Search extends Component {
  state = {
    books: []
  };

  searchHandler = event => {
    // if (event.target.value === "") {
    //   this.setState({ books: [] });
    //   return;
    // }
    console.log(event.target.value);
    search(event.target.value).then(books => {
      if (!Array.isArray(books)) {
        this.setState({ books: [] });
        return;
      }

      this.props.personalBooks.forEach(book => {
        if (
          books.findIndex(searchedBook => searchedBook.id == book.id) !== -1
        ) {
          const index = books.findIndex(
            searchedBook => searchedBook.id == book.id
          );
          console.log("moin");
          if (!books[index].shelf) {
            let updatedBooks = [...books];
            updatedBooks[index].shelf = book.shelf;
            this.setState({
              books: updatedBooks
            });
            return;
          }
        }
      });
      this.setState({ books });
    });
  };

  updateBookHandler = (book, shelf) => {
    // update(book, shelf);
    this.props.updatePersonalBook(book, shelf);
    this.setState(prevState => {
      let index = prevState.books.findIndex(
        currentBook => currentBook.id == book.id
      );
      const books = [...prevState.books];
      //   books[index] = { ...book, shelf: shelf };
      books[index].shelf = shelf;
      return {
        books: books
      };
    });
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>

          <div className="search-books-input-wrapper">
            {/*
        NOTES: The search from BooksAPI is limited to a particular set of search terms.
        You can find these search terms here:
        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
        
        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
        you don't find a specific author or title. Every search is limited by search terms.
        */}
            <input
              onChange={this.searchHandler}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {Array.isArray(this.state.books) &&
              this.state.books.map(book => (
                <Book
                  key={book.id}
                  book={book}
                  onUpdateBook={this.updateBookHandler}
                />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
