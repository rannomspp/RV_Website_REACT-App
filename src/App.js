import Navbar from './components/Navbar';
import Work from './components/Work';
import Aboutme from './components/Aboutme';
import Main from './components/Main';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import React, { useState, useEffect } from 'react';

function App() {
  const [textRender, setText] = useState("");
  const [textRender2, setText2] = useState("");
  const [fullText, setFullText] = useState("Welcome!");
  const [fullText2, setFullText2] = useState("About Me");

  const [modalHide, setModalShow] = useState(null);
  const [dropDownHide, setDropDownShow] = useState(true);
  const [aboutMeAnimation, setAboutMeAnimation] = useState(true);
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);
  
  const handleModalShow = () => {
    setModalShow("show");     
  }; 

  const handleModalHide = () => {
    setModalShow(null);     
  };

  const handleDropDownShow = () => {
    dropDownHide ? setDropDownShow(false) : setDropDownShow(true);
  }; 

  const handleAboutMeAnimation = () => {
    if (index2 == fullText2.length) {
      setText2("");
      setIndex2(0);
    }
    setAboutMeAnimation(prevAboutMeAnimation => !prevAboutMeAnimation);
  }

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(textRender + fullText[index])
        setIndex(index + 1)
      }, 90)
    }
  }, [index]);

  useEffect(() => {
    if (index2 < fullText2.length) {
      setTimeout(() => {
        setText2(textRender2 + fullText2[index2])
        setIndex2(index2 + 1)
      }, 90)
    }
  }, [index2, aboutMeAnimation]);

  return (
    <>
    <Router>
      <Navbar isDropDownMenuOpen={dropDownHide} openDropDownMenu={handleDropDownShow} playTextAnimation={handleAboutMeAnimation} />
        <Routes>
          <Route path="/RV_Website_REACT-App" element={<Main isModal={modalHide} isOpen={handleModalShow} isClosed={handleModalHide} welcomeTxt={textRender} />} />
          <Route path="/work" element={<Work />} />
          <Route path="/aboutme" element={<Aboutme aboutMeTxt={textRender2}/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer/>
    </Router>
    </> 
  );
};

export default App;