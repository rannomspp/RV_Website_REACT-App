import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Contact from './components/Contact';
import Footer from './components/Footer';

import React, { useState, useEffect } from 'react';


function App() {
  const [textRender, setText] = useState("");
  const [fullText, setFullText] = useState("Welcome!");

  const [modalHide, modalShow] = useState(null);
  const [index, setIndex] = useState(0);
  
  const handleShow = () => {
    modalShow("show");     
  }; 

  const handleHide = () => {
    modalShow(null);     
  };

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(textRender + fullText[index])
        setIndex(index + 1)
      }, 90)
    }
  }, [index]);

  console.log(textRender);
  return (
    <>
    <Navbar/>
    <Main isModal={modalHide} isOpen={handleShow} isClosed={handleHide} welcomeTxt={textRender}></Main> 
    <Contact/>
    <Footer/>
    </> 
  );
};

export default App;
