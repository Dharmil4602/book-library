// import React, { useEffect } from "react";
// import "../styles/search.css";
// import { useState } from "react";

// function SearchBar() {
//   const [query, setQuery] = useState("");

//   const fetchBooks = async () => {
//     try {
//       const url = `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`;
//       const response = await fetch(url);
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     fetchBooks();
//   }, [query]);

//   const handleSearch = (e) => {
//     console.log(e.target.value);
//   };
//   return (
//     <>
//       <div className="searchBar">
//         <input type="text" placeholder="Search For The Books Or Author..." onChange={handleSearch}/>
//         <button>Search</button>

//       </div>
//     </>
//   );
// }

// export default SearchBar;

import React, { useState } from "react";
import axios from "axios";
import "../styles/search.css";
import Pagination from "./Pagination";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://openlibrary.org/search.json?q=${query}`)
      .then((res) => {
        setBooks(res.data.docs);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clearText = () => {
    setQuery("");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
        <button onClick={clearText}>Clear</button>
      </form>

      <table>
        <thead>
          <tr>
            <th className="title">Title</th>
            <th className="author">Author</th>
            <th className="publish">First Publish Year</th>
            <th className="publish">Latest Publish Year</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.key}>
              <td>{book.title}</td>
              <td>{book.author_name && book.author_name.join(", ")}</td>
              <td>{book.first_publish_year}</td>
              <td>{book.publish_year ? book.publish_year[0] : "NA"}</td>
            </tr>
          )
          )}
        </tbody>
      </table>
     {/* <ul>
        {books.map((book) => (
          <li key={book.key}>
            <h2>{book.title}</h2>
            {book.author_name && (
              <p>By: {book.author_name.join(", ")}</p>
            )}
            <p>Published: {book.publish_date}</p>
          </li>
        ))}
      </ul> */}
      <Pagination/>
    </div>
  );
};

export default SearchBar;
