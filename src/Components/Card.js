import React, { useState } from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


const Card = (props) => {
    let course = props.reviews;
    const [index, setIndex] = useState(0);
    function leftArrowHandler(){
        if(index <= 0){
            setIndex(course.length - 1);
        }
        else{
            setIndex(index - 1);
        }
    }

    function rightArrowHandler(){
        if(index >= course.length-1){
            setIndex(0);
        }
        else{
            setIndex(index + 1);
        }
    }

    function surpriseHandler(){
        let ranIndex = Math.floor(Math.random() * course.length);
        setIndex(ranIndex);
    }
  return (
    <div className="bg-white w-[100%] relative px-8 py-8 flex flex-col items-center gap-5 rounded-md max-[400px]:gap-[0.5rem] max-[400px]:px-4">
        <div className='z-10'>
            <img 
                src={course[index].image} alt={course[index].name}
                className='absolute top-[-3rem] left-[2rem] w-[120px] h-[120px] rounded-full z-20 max-[500px]:w-[90px] max-[500px]:h-[90px] max-[500px]:left-[1rem] max-[400px]:top-[-2.3rem]'
                />
            <div className='absolute top-[-3.3rem] left-[2.4rem] w-[120px] h-[120px] rounded-full bg-violet-600 z-5 max-[500px]:w-[90px] max-[500px]:h-[90px] max-[500px]:left-[1.2rem] max-[400px]:top-[-2.5rem]'></div>
        </div>

        <div className='flex flex-col justify-center items-center'>
            <h2 className='text-2xl font-bold mt-[0.5rem] max-[400px]:text-[1.3rem]'>{course[index].name}</h2>
            <h3 className='text-sm tracking-wide text-violet-300 uppercase max-[400px]:text-[0.8rem]'>{course[index].job}</h3>
        </div>

        <div>
            <FaQuoteLeft className='text-violet-400'/>
        </div>

        <div>
            <p className='text-[1rem] text-center max-[400px]:text-[0.9rem]'>{course[index].text}</p>
        </div>

        <div>
            <FaQuoteRight className='text-violet-400'/>
        </div>

        <div className='flex justify-between items-center gap-6'>
            <MdOutlineKeyboardArrowLeft 
                className='text-[2.5rem] text-violet-400 cursor-pointer rounded-full hover:text-violet-700 hover:bg-gray-300'
                onClick={leftArrowHandler}
            />

            <button 
                className='bg-violet-500 px-6 py-[0.5rem] text-[1.1rem] cursor-pointer rounded-md text-white font-semibold transition duration-500 hover:bg-violet-700 max-[400px]:text-[0.9rem] max-[400px]:px-[0.7rem]'
                onClick={surpriseHandler}
                >
                Surprise Me
            </button>

            <MdKeyboardArrowRight 
                className='text-[2.5rem] text-violet-500 cursor-pointer rounded-full hover:text-violet-700 hover:bg-gray-300'
                onClick={rightArrowHandler}
            />
        </div>
    </div>
  )
}

export default Card;