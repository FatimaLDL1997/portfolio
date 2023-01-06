import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { fullScreenAnimation, lineAnimation } from "../animations";
import { motion } from "framer-motion";

const Resume = () => {
  let [numPages, setNumPages] = useState(null);
  let [pageNumber, setPageNumber] = useState(1);
  console.log(numPages);
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

  // const handleResize = () => {
  //   const menuIcon = document.querySelector(".menuIcon").style;
  //   const page = document.querySelector(".resume");
  //   if (window.innerWidth < 800 && page != null) {
  //     menuIcon.color = "white";
  //   } else {
  //     menuIcon.color = "#2a4855";
  //   }
  // };
  const [zoomCount, setZoomCount] = useState(1);
  const handleZoomOut = () => {
    setZoomCount((zoomCount) => {
      if (zoomCount > 1) {
        let newCount = zoomCount - 2;
        console.log("zoom out " + newCount);
        return newCount;
      }
      return zoomCount;
    });
  };
  const handleZoomIn = () => {
    setZoomCount((zoomCount) => {
      if (zoomCount < 10) {
        let newCount = zoomCount + 2;
        console.log("zoom in " + newCount);
        return newCount;
      }
      return zoomCount;
    });
  };

  return (
    <motion.div
      variants={fullScreenAnimation}
      initial='hidden'
      animate='show'
      className='resume'
    >
      <div className='titleContainer'>
        <h2 className='pageTitle'>Resume</h2>
      </div>
      <motion.hr
        className='line'
        variants={lineAnimation}
        style={{ color: "#404f4f", height: " 1px", background: "#d4a373" }}
      ></motion.hr>
      <header className='resume-header'>
        <Document
          style={{ width: "90vw" }}
          file='EngResume2022.pdf'
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {console.log("count: " + zoomCount)}
          <Page pageNumber={pageNumber} scale={zoomCount} />
        </Document>
      </header>
      <div className='zoom-control'>
        <button className='zoom-out' onClick={() => handleZoomOut()}>
          {"-"}
        </button>
        <button className='zoom-in' onClick={() => handleZoomIn()}>
          {"+"}
        </button>
      </div>
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
    </motion.div>
  );
};

export { Resume };
