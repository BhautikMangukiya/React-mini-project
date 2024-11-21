import React from 'react'
import { useState } from 'react'

function App() {

  const [ color , setColor] = useState("olive")


  return (
    <div
      className="w-screen h-screen duration-200 flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {/* Red Button */}
        <button
          onClick={() => setColor('red')}
          style={{ borderColor: 'red' }}
          className="px-6 py-3 text-white font-semibold bg-red-500 hover:bg-red-600 rounded-lg border-2 shadow-lg transition-all"
        >
          Red
        </button>

        {/* Green Button */}
        <button
          onClick={() => setColor('green')}
          style={{ borderColor: 'green' }}
          className="px-6 py-3 text-white font-semibold bg-green-500 hover:bg-green-600 rounded-lg border-2 shadow-lg transition-all"
        >
          Green
        </button>

        {/* Blue Button */}
        <button
          onClick={() => setColor('blue')}
          style={{ borderColor: 'blue' }}
          className="px-6 py-3 text-white font-semibold bg-blue-500 hover:bg-blue-600 rounded-lg border-2 shadow-lg transition-all"
        >
          Blue
        </button>

        {/* Yellow Button */}
        <button
          onClick={() => setColor('yellow')}
          style={{ borderColor: 'yellow' }}
          className="px-6 py-3 text-black font-semibold bg-yellow-400 hover:bg-yellow-500 rounded-lg border-2 shadow-lg transition-all"
        >
          Yellow
        </button>

        {/* Purple Button */}
        <button
          onClick={() => setColor('purple')}
          style={{ borderColor: 'purple' }}
          className="px-6 py-3 text-white font-semibold bg-purple-500 hover:bg-purple-600 rounded-lg border-2 shadow-lg transition-all"
        >
          Purple
        </button>

        {/* Orange Button */}
        <button
          onClick={() => setColor('orange')}
          style={{ borderColor: 'orange' }}
          className="px-6 py-3 text-white font-semibold bg-orange-500 hover:bg-orange-600 rounded-lg border-2 shadow-lg transition-all"
        >
          Orange
        </button>

        {/* Pink Button */}
        <button
          onClick={() => setColor('pink')}
          style={{ borderColor: 'pink' }}
          className="px-6 py-3 text-white font-semibold bg-pink-500 hover:bg-pink-600 rounded-lg border-2 shadow-lg transition-all"
        >
          Pink
        </button>

        {/* Cyan Button */}
        <button
          onClick={() => setColor('cyan')}
          style={{ borderColor: 'cyan' }}
          className="px-6 py-3 text-black font-semibold bg-cyan-400 hover:bg-cyan-500 rounded-lg border-2 shadow-lg transition-all"
        >
          Cyan
        </button>

        {/* Teal Button */}
        <button
          onClick={() => setColor('teal')}
          style={{ borderColor: 'teal' }}
          className="px-6 py-3 text-white font-semibold bg-teal-500 hover:bg-teal-600 rounded-lg border-2 shadow-lg transition-all"
        >
          Teal
        </button>
      </div>
    </div>
  )
}

export default App