import React from 'react'

const WorldSpeakPulseVisualizer = () => {
  return (
    <div className="w-full h-32 bg-black rounded-lg overflow-hidden relative">
      <div className="absolute w-full h-full animate-pulse bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 opacity-30"></div>
      <div className="relative z-10 text-white text-center pt-10 text-sm tracking-wide">
        Pulse Signal Active...
      </div>
    </div>
  )
}

export default WorldSpeakPulseVisualizer
