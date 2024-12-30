
import React, { useState } from "react";
import Image from "next/image";

interface propsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Cart: React.FC<propsType> = ({ title, desc, img, tags }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div
      className="border border-blue-500 w-full max-w-[300px] sm:max-w-[350px] mx-auto"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div>
        <Image
          className="w-full h-auto"
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>

      <div className="p-4 space-y-4">
        <div className="text-xl sm:text-2xl font-extralight">{title}</div>
        <div className="text-sm sm:text-base text-gray-600">{desc}</div>
        <div className="flex flex-wrap gap-2">
          {tags.map((el) => (
            <span
              className="bg-blue-100 text-blue-600 text-xs sm:text-sm px-2 py-1 rounded-full"
              key={el}
            >
              {el}
            </span>
          ))}
        </div>
        <button
          onClick={togglePopup}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          View More
        </button>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[80%] sm:w-[50%] max-w-[600px]">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm text-gray-600 mt-2">{desc}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((el) => (
                <span
                  className="bg-blue-100 text-blue-600 text-xs sm:text-sm px-2 py-1 rounded-full"
                  key={el}
                >
                  {el}
                </span>
              ))}
            </div>
            <button
              onClick={togglePopup}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
