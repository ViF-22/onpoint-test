import FirstPage from "../pages/FirstPage";
import SecondPage from "../pages/SecondPage";
import ThirdPage from "../pages/ThirdPage";
import React, { useState } from "react";
import classes from "./Carousel.module.css";
import Header from "./Header";

const widthSpan = 100;

function Carousel(props) {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [touchStartPosition, setTouchStartPosition] = useState(0);
  const [touchEndPosition, setTouchEndPosition] = useState(0);
  const [touched, setTouched] = useState(false);
  const [swiped, setSwiped] = useState(false);
  const [mouseStartPosition, setMouseStartPosition] = useState(0);
  const [mouseEndPosition, setMouseEndPosition] = useState(0);
  const [mouseClicked, setMouseClicked] = useState(false);
  const [mouseSwiped, setMouseSwiped] = useState(false);

  const { infinite } = props;

  const firstPage = () => {
    let newPosition = sliderPosition;
    newPosition = 0;
    translateFullSlides(newPosition);
    setSliderPosition(newPosition);
  };
  const prevSlideHandler = () => {
    let newPosition = sliderPosition;
    if (newPosition > 0) {
      newPosition = newPosition - 1;
    } else if (infinite) {
      newPosition = pages.length - 1;
    }
    translateFullSlides(newPosition);
    setSliderPosition(newPosition);
  };

  const nextSlideHandler = () => {
    let newPosition = sliderPosition;
    if (newPosition < pages.length - 1) {
      newPosition = newPosition + 1;
    } else if (infinite) {
      newPosition = 0;
    }
    translateFullSlides(newPosition);
    setSliderPosition(newPosition);
  };

  const jumpToSlideHandler = (id) => {
    translateFullSlides(id);
    setSliderPosition(id);
  };

  const speedUpAnimation = () => {
    for (
      let i = Math.max(0, sliderPosition - 2);
      i < Math.min(pages.length, sliderPosition + 3);
      i++
    ) {
      let elem = document.getElementById(`carouselitem` + i);
      elem.classList.add(classes.FastAnimation);
    }
  };

  const slowDownAnimation = () => {
    for (
      let i = Math.max(0, sliderPosition - 2);
      i < Math.min(pages.length, sliderPosition + 3);
      i++
    ) {
      let elem = document.getElementById(`carouselitem` + i);
      elem.classList.remove(classes.FastAnimation);
    }
  };

  const touchStartHandler = (e) => {
    speedUpAnimation();
    setTouchStartPosition(e.targetTouches[0].clientX);
    setTouchEndPosition(e.targetTouches[0].clientX);
    setTouched(true);
  };

  const touchMoveHandler = (e) => {
    setTouchEndPosition(e.targetTouches[0].clientX);
    const frameWidth = document.getElementById("DisplayFrame").offsetWidth;
    const translateDist =
      ((touchEndPosition - touchStartPosition) / frameWidth) * 100;
    translatePartialSlides(translateDist);
    if (touched === true) {
      setSwiped(true);
    }
  };

  const touchEndHandler = (e) => {
    if (swiped) {
      slowDownAnimation();
      if (touchStartPosition - touchEndPosition > 75) {
        nextSlideHandler();
      } else if (touchStartPosition - touchEndPosition < -75) {
        prevSlideHandler();
      } else {
        jumpToSlideHandler(sliderPosition);
      }
    }
    setTouched(false);
    setSwiped(false);
  };

  const mouseStartHandler = (e) => {
    e.preventDefault();
    speedUpAnimation();
    setMouseStartPosition(e.clientX);
    setMouseEndPosition(e.clientX);
    setMouseClicked(true);
  };

  const mouseMoveHandler = (e) => {
    e.preventDefault();
    var frameWidth = document.getElementById("DisplayFrame").offsetWidth;
    if (mouseClicked === true) {
      setMouseEndPosition(e.clientX);
      let translateDist =
        ((mouseEndPosition - mouseStartPosition) / frameWidth) * 100;
      translatePartialSlides(translateDist);
      setMouseSwiped(true);
    }
  };

  const mouseEndHandler = (e) => {
    slowDownAnimation();
    if (mouseSwiped === true) {
      if (mouseStartPosition - mouseEndPosition > 100) {
        nextSlideHandler();
      } else if (mouseStartPosition - mouseEndPosition < -100) {
        prevSlideHandler();
      } else {
        jumpToSlideHandler(sliderPosition);
      }
    }
    setMouseClicked(false);
    setMouseSwiped(false);
  };

  const translatePartialSlides = (toTranslate) => {
    let currentTranslation = -sliderPosition * widthSpan;
    let totalTranslation = currentTranslation + toTranslate;
    for (var i = 0; i < pages.length; i++) {
      let elem = document.getElementById(`carouselitem` + i);
      elem.style.transform = `translateX(` + totalTranslation + `%)`;
    }
  };

  const translateFullSlides = (newPosition) => {
    let toTranslate = -widthSpan * newPosition;
    for (var i = 0; i < pages.length; i++) {
      let elem = document.getElementById(`carouselitem` + i);
      elem.style.transform = `translateX(` + toTranslate + `%)`;
    }
  };

  const pages = [
    <FirstPage nextSlideHandler={nextSlideHandler} key={"fp"} />,
    <SecondPage key={"sp"} />,
    <ThirdPage key={"thp"} />,
  ];

  const displayItems = pages.map((page, index) => (
    <div
      className={classes.CarouselItem}
      id={`carouselitem` + index}
      key={index}
    >
      {page}
    </div>
  ));

  return (
    <div className="relative">
      <Header firstPage={firstPage} />
      <div
        className={classes.DisplayFrame}
        id="DisplayFrame"
        onTouchStart={(e) => touchStartHandler(e)}
        onTouchMove={(e) => touchMoveHandler(e)}
        onTouchEnd={(e) => touchEndHandler(e)}
        onMouseDown={(e) => mouseStartHandler(e)}
        onMouseMove={(e) => mouseMoveHandler(e)}
        onMouseUp={(e) => mouseEndHandler(e)}
      >
        {displayItems}
      </div>
    </div>
  );
}
export default Carousel;
