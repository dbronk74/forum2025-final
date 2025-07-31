import React from 'react'

const WorldSpeakLiveTranscriptScroll = () => {
  const lines = [
    'ALEX: Welcome to the floor.',
    'TAYLOR: The root of the conflict is intention.',
    'JORDAN: Can you define that more clearly?',
  ]

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-300 max-h-48 overflow-y-auto text-sm">
      {(lines ?? []).map((line, idx) => (
        <p key={idx} className="text-gray-800 mb-1">{line}</p>
      ))}
    </div>
  )
}

export default WorldSpeakLiveTranscriptScroll
