import { useState } from "react";

// FAQ Component
export const FAQAccordion = ({ icon, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 p-4 hover:bg-white rounded-lg transition-all cursor-pointer">
      <div
        className="flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <span className="text-2xl mr-4">{icon}</span>
          <h4 className="text-lg font-semibold text-gray-700">{question}</h4>
        </div>
        <span className="text-indigo-600">
          {isOpen ? "-" : "+"}
        </span>
      </div>

      {isOpen && (
        <p className="mt-4 text-gray-600">
          {answer}
        </p>
      )}
    </div>
  );
};

// Testimonial Card Component
export const TestimonialCard = ({ image, name, role, feedback }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center text-gray-800">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full mx-auto mb-4"
      />
      <p className="text-xl font-semibold mb-2">{name}</p>
      <p className="text-sm text-gray-500 mb-4">{role}</p>
      <p className="italic">"{feedback}"</p>
    </div>
  );
};

// Step Card Component
export const StepCard = ({ stepNumber, title, description, icon }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all">
      <div className="text-indigo-600 text-5xl font-bold mb-4">{icon}</div>
      <h4 className="text-xl font-semibold text-gray-800 mb-2">Step {stepNumber}</h4>
      <h5 className="text-lg text-indigo-600 mb-2">{title}</h5>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
