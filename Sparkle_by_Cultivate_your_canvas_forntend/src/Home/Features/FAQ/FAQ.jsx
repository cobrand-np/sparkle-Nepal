import React, { useState } from "react";
import littleGirl from '../../../assets/texture/useableImages/little-girl-thinking-studio-shot.png';

import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const Faqdata = [
    {
      Question: "How will these programs benefit my child’s development?",
      answer:
        "Our programs enhance creativity, confidence, and social skills, helping your child become well-rounded and articulate.",
    },
    {
      Question: "Are the instructors qualified to teach young children?",
      answer:
        "Yes, our instructors are highly qualified and experienced in early childhood education, ensuring a nurturing learning environment.",
    },
    {
      Question: "How do you ensure my child's safety during classes?",
      answer:
        "We prioritize safety with strict protocols, child-friendly spaces, and trained staff, providing a secure environment for learning.",
    },
    {
      Question: "How can I track my child's progress?",
      answer:
        "We offer regular progress reports, meetings, and open classes, along with ongoing communication to keep you informed.",
    },
    {
      Question: "How do you handle children with different learning paces?",
      answer:
        "We tailor our approach to each child's pace, ensuring they receive the attention and support they need to thrive.",
    },
  ];

  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const handleFAQ = (idx) => {
    setOpenFAQIndex((prevIndex) => (prevIndex === idx ? null : idx));
  };

  return (
    <div className="p-10 space-y-5 bg-cover bg-center relative overflow-hidden">
      <h2 className="font-bold text-2xl py-5">FAQs for Parents</h2>

      <img
        src={littleGirl}
        alt="little girl"
        className="absolute h-[400px] -right-20 bottom-0 -z-10 max-md:hidden"
      />

      {Faqdata.map((item, idx) => (
        <div
          key={idx}
          className={`py-5 px-4 border border-gray-400 rounded-lg w-[90%] cursor-pointer transition-all duration-500  ${openFAQIndex === idx ? "bg-orange-500" : "text-black"
            }`}
          onClick={() => handleFAQ(idx)}
        >
          <div className=" flex justify-between items-center">
            <h2
              className={`font-semibold transition-all duration-500 py-1 ${openFAQIndex === idx ? ' text-white' : ''}`}
            >
              {item.Question}
            </h2>
            <span className={`transition-all duration-500 ${openFAQIndex === idx ? '-rotate-180 text-white' : ''}`}>
              <FaChevronDown />
            </span>

          </div>

          <div
            className={`transition-all duration-500 overflow-hidden  border-t-2  ${openFAQIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <p className={` pt-4 text-white  transition-all duration-500 overflow-hidden `}>
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
