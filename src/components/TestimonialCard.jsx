import React from "react";

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
    <img
      src={testimonial.image}
      alt={testimonial.name}
      className="w-20 h-20 rounded-full object-cover mb-4"
    />
    <h4 className="text-lg font-semibold text-gray-800 mb-2">{testimonial.name}</h4>
    <p className="text-gray-600">{testimonial.text}</p>
  </div>
);

export default TestimonialCard;
