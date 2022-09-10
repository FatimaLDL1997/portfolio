import React, { useState, useEffect, useContext } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import StyledNavbar from "../components/StyledNavbar";

const Resume = () => {
  let [numPages, setNumPages] = useState(null);
  let [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  const handleDecrement = () => {
    setPageNumber((pageNumber) => {
      let newNum = pageNumber + 1;
      if (newNum < 3) {
        return newNum;
      } else {
        return pageNumber;
      }
    });
  };
  const handleIncrement = () => {
    setPageNumber((pageNumber) => {
      let newNum = pageNumber - 1;
      if (newNum > 0) {
        return newNum;
      } else {
        return pageNumber;
      }
    });
  };

  const handleResize = () => {
    console.log(window.innerWidth);
    const menuIcon = document.querySelector(".menuIcon").style;
    const page = document.querySelector(".resume");
    console.log(page);
    if (window.innerWidth < 800 && page != null) {
      console.log("small");
      menuIcon.color = "white";
      console.log(menuIcon.color);
    } else {
      menuIcon.color = "#2a4855";
    }
  };
  useEffect(() => {
    window.addEventListener("resize", () => handleResize());

    return window.removeEventListener("resize", () => handleResize());
  });
  useEffect(() => {
    window.addEventListener("click", () => handleResize());

    return window.removeEventListener("click", () => handleResize());
  });

  return (
    <div className='resume'>
      <header className='resume-header'>
        <Document
          file='EngResume2022.pdf'
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            style={{ height: "600vh", width: "auto" }}
            pageNumber={pageNumber}
          />
        </Document>
      </header>
      <div className='page-control'>
        <button className='next-page' onClick={() => handleIncrement()}>
          {"<"}
        </button>
        <span className='page-loc'>
          Page {pageNumber} of {2}
        </span>
        <button className='prev-page' onClick={() => handleDecrement()}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export { Resume };
