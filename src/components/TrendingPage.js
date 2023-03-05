import React, { useState } from "react";
import TrendingSubjects from "./TrendingSubjects";
import { url } from "./TrendingSubjects";
import axios from "axios";
import { FallingLines } from "react-loader-spinner";
import "../App.css";

function TrendingPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [loading, setLoading] = useState(true);

  axios
    .get(
      `https://openlibrary.org/search.json?q=${url}&limit=10&offset=${currentOffset}`
    )
    .then((res) => {
      setSearchResults(res.data.docs);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });

  const handleNextClick = async (e) => {
    e.preventDefault();
    setCurrentOffset(currentOffset + 10);
    setLoading(true);

    axios
      .get(
        `https://openlibrary.org/search.json?q=${url}&limit=10&offset=${
          currentOffset + 10
        }`
      )
      .then((res) => {
        setSearchResults(res.data.docs);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handlePrevClick = async (e) => {
    e.preventDefault();
    setCurrentOffset(currentOffset - 10);
    setLoading(true);

    axios
      .get(
        `https://openlibrary.org/search.json?q=${url}&limit=10&offset=${
          currentOffset - 10
        }`
      )
      .then((res) => {
        setSearchResults(res.data.docs);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <div>
      <TrendingSubjects />
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
          <div className="loaderClass">
            <FallingLines
              color="#4fa94d"
              width="100"
              visible={loading}
              ariaLabel="falling-lines-loading"
            />
          </div>
          {searchResults.map((book) => (
            <tr key={book.key}>
              <td>{book.title}</td>
              <td>{book.author_name && book.author_name.join(", ")}</td>
              <td>{book.first_publish_year}</td>
              <td>{book.publish_year ? book.publish_year[0] : "NA"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {searchResults.length > 0 && (
        <div>
          <button
            type="button"
            onClick={handlePrevClick}
            disabled={currentOffset === 0}
          >
            Prev
          </button>
          <button
            type="button"
            onClick={handleNextClick}
            disabled={searchResults.length < 10}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default TrendingPage;
