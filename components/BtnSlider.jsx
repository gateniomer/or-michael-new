import React from "react";
import { FaArrowLeft , FaArrowRight} from 'react-icons/fa';

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
        <div>{direction === "next" ? <FaArrowRight/>:<FaArrowLeft/>  }</div> 
      
    </button>
  );
}