import React from "react";

const PersonalThinkCompass = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-5 rounded-xl text-white border border-gray-700 shadow-md">
      <h2 className="text-xl font-bold mb-2">Personal Thought Compass</h2>
      <p className="text-sm text-gray-300">
        Navigate your internal stance. This compass shifts as your reflections evolve during a session.
      </p>
      <div className="mt-4 bg-gray-700 p-3 rounded-lg text-center text-gray-200 text-sm italic">
        [Your compass is aligned with curiosity]
      </div>
    </div>
  );
};

export default PersonalThinkCompass;
