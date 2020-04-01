// import React from "react";
// import { stringHelper } from "../helper/stringHelper";
// import Category from "./Category";
// import { Link } from "react-router-dom";

// const Categorys = props => {
//   const { books, onUpdateBook } = props;

//   const wantToReadCategory = books.filter(book => book.shelf === "wantToRead");

//   const currentlyReadingCategory = books.filter(
//     book => book.shelf === "currentlyReading"
//   );

//   const readCategory = books.filter(book => book.shelf === "read");

//   return (
//     <div>
//       <h1
//         style={{
//           backgroundColor: "green",
//           padding: "1rem",
//           textAlign: "center",
//           width: "100%",
//           marginTop: "0",
//           color: "white"
//         }}
//       >
//         My Reads
//       </h1>
//       <Category
//         key={stringHelper.hash("currentlyReadingCategory")}
//         onUpdateBook={onUpdateBook}
//         title="Currently Reading"
//         books={currentlyReadingCategory}
//       />
//       <Category
//         key={stringHelper.hash("wantToReadCategory")}
//         onUpdateBook={onUpdateBook}
//         title="Want to read"
//         books={wantToReadCategory}
//       />
//       <Category
//         key={stringHelper.hash("readCategory")}
//         onUpdateBook={onUpdateBook}
//         title="Read"
//         books={readCategory}
//       />
//       <div className="open-search">
//         <Link to="/search">
//           <button>Add a book</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Categorys;
