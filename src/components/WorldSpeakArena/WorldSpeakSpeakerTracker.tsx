import React from 'react'

const WorldSpeakSpeakerTracker = () => {
  const speakers = ['ALEX', 'TAYLOR', 'JORDAN']
  const current = 1

  return (
    <div className="bg-indigo-100 p-3 rounded-lg text-sm text-indigo-900">
      <h4 className="font-bold mb-2">Current Speaker</h4>
      <ul className="space-y-1">
        {speakers.map((s, i) => (
          <li key={i} className={i === current ? 'font-bold underline' : ''}>
            {s}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WorldSpeakSpeakerTracker
