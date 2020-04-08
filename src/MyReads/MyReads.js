import React, { Component } from "react";
import { getAll, update } from "../BooksAPI";
import { Switch, Route } from "react-router-dom";
import Search from "./Search";
import Categories from "./Categories";

class MyReads extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    getAll().then((books) => this.setState({ books }));
  }

  updateBookHandler = (book, shelf) => {
    //replace the book at the old position in array with the updated book

    if (
      this.state.books.findIndex(
        (currentBook) => currentBook.id === book.id
      ) !== -1
    ) {
      this.setState((prevState) => {
        let index = prevState.books.findIndex(
          (currentBook) => currentBook.id === book.id
        );
        const books = [...prevState.books];

        books[index].shelf = shelf;
        return {
          books: books,
        };
      });
    } else {
      this.setState((prevState) => ({
        books: [...prevState.books, { ...book, shelf: shelf }],
      }));
    }

    //update book via api on backend
    update(book, shelf);
  };

  render() {
    return (
      <Switch>
        <Route
          path="/search"
          render={() => (
            <Search
              updatePersonalBook={this.updateBookHandler}
              personalBooks={this.state.books}
            />
          )}
        />
        <Route
          path="/"
          render={() => (
            <Categories
              books={this.state.books}
              onUpdateBook={this.updateBookHandler}
            />
          )}
        />
      </Switch>
    );
  }
}

export default MyReads;
