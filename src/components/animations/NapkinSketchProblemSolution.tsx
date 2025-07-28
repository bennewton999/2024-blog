'use client';

import { useEffect, useState } from 'react';

export const NapkinSketchProblemSolution = () => {
  const [showSolution, setShowSolution] = useState(false);
  const [animateNotes, setAnimateNotes] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateNotes(true);
      setTimeout(() => {
        setShowSolution(true);
      }, 3000);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto my-12 p-8 bg-black rounded-lg">
      <div className="text-center mb-8">
        <h3 className="text-white text-2xl font-mono mb-2">The Problem vs The Solution</h3>
        <p className="text-gray-300 text-sm">How VoiceCommit transforms scattered thoughts into organized action</p>
      </div>

      <div className="relative">
        <svg viewBox="0 0 1000 500" className="w-full h-80 bg-gray-900 rounded">
          {/* Split line */}
          <line x1="500" y1="0" x2="500" y2="500" stroke="white" strokeWidth="2" strokeDasharray="5,5" className="opacity-60"/>
          
          {/* Problem side header */}
          <g className="opacity-100">
            {/* Problem icon (exclamation) */}
            <circle cx="120" cy="60" r="25" fill="none" stroke="#ef4444" strokeWidth="2"/>
            <line x1="120" y1="50" x2="120" y2="65" stroke="#ef4444" strokeWidth="3"/>
            <circle cx="120" cy="72" r="2" fill="#ef4444"/>
            
            <text x="160" y="70" fill="#ef4444" fontSize="16" className="font-mono font-bold">The Problem</text>
          </g>

          {/* Scattered notes animation */}
          <g className={`transition-opacity duration-1000 ${animateNotes ? 'opacity-100' : 'opacity-0'}`}>
            {/* Note 1 - Fix login bug */}
            <g transform="translate(80,120) rotate(-12)">
              <rect x="0" y="0" width="80" height="40" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" rx="3"/>
              <text x="5" y="12" fill="#92400e" fontSize="8" className="font-mono opacity-60">Notes</text>
              <text x="5" y="25" fill="#92400e" fontSize="10" className="font-mono">Fix login bug</text>
            </g>

            {/* Note 2 - Add dark mode */}
            <g transform="translate(320,100) rotate(8)">
              <rect x="0" y="0" width="90" height="50" fill="#fce7f3" stroke="#ec4899" strokeWidth="1" rx="3"/>
              <text x="5" y="12" fill="#be185d" fontSize="8" className="font-mono opacity-60">Voice Memo</text>
              <text x="5" y="25" fill="#be185d" fontSize="10" className="font-mono">Add dark</text>
              <text x="5" y="38" fill="#be185d" fontSize="10" className="font-mono">mode</text>
            </g>

            {/* Note 3 - Blog post idea */}
            <g transform="translate(100,250) rotate(-5)">
              <rect x="0" y="0" width="100" height="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" rx="3"/>
              <text x="5" y="12" fill="#1e40af" fontSize="8" className="font-mono opacity-60">Messages</text>
              <text x="5" y="25" fill="#1e40af" fontSize="10" className="font-mono">Blog post idea...</text>
            </g>

            {/* Note 4 - Refactor API */}
            <g transform="translate(350,280) rotate(15)">
              <rect x="0" y="0" width="85" height="50" fill="#d1fae5" stroke="#10b981" strokeWidth="1" rx="3"/>
              <text x="5" y="12" fill="#047857" fontSize="8" className="font-mono opacity-60">Scratch Paper</text>
              <text x="5" y="25" fill="#047857" fontSize="10" className="font-mono">Refactor API</text>
            </g>
          </g>

          {/* Problem points */}
          <g className={`transition-opacity duration-1000 ${animateNotes ? 'opacity-100' : 'opacity-0'}`}>
            <text x="50" y="380" fill="#ef4444" fontSize="12" className="font-mono">🔍 Ideas scattered across apps</text>
            <text x="50" y="405" fill="#ef4444" fontSize="12" className="font-mono">📄 No project context</text>
            <text x="50" y="430" fill="#ef4444" fontSize="12" className="font-mono">💬 Most ideas forgotten</text>
          </g>

          {/* Solution side header */}
          <g className={`transition-opacity duration-1000 ${showSolution ? 'opacity-100' : 'opacity-30'}`}>
            {/* Solution icon (checkmark) */}
            <circle cx="620" cy="60" r="25" fill="none" stroke="#10b981" strokeWidth="2"/>
            <path d="M610 60 L618 68 L632 52" fill="none" stroke="#10b981" strokeWidth="3"/>
            
            <text x="660" y="70" fill="#10b981" fontSize="16" className="font-mono font-bold">VoiceCommit Solution</text>
          </g>

          {/* Solution workflow */}
          <g className={`transition-all duration-1000 ${showSolution ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
            {/* Step 1 */}
            <g>
              <circle cx="540" cy="130" r="15" fill="none" stroke="#10b981" strokeWidth="2"/>
              <text x="540" y="135" fill="#10b981" fontSize="12" textAnchor="middle" className="font-mono font-bold">1</text>
              <rect x="565" y="115" width="150" height="30" fill="none" stroke="white" strokeWidth="1" strokeDasharray="3,2" className="opacity-60"/>
              <text x="570" y="128" fill="white" fontSize="10" className="font-mono">💬 Speak your idea</text>
            </g>

            {/* Step 2 */}
            <g>
              <circle cx="540" cy="180" r="15" fill="none" stroke="#10b981" strokeWidth="2"/>
              <text x="540" y="185" fill="#10b981" fontSize="12" textAnchor="middle" className="font-mono font-bold">2</text>
              <rect x="565" y="165" width="180" height="30" fill="none" stroke="white" strokeWidth="1" strokeDasharray="3,2" className="opacity-60"/>
              <text x="570" y="178" fill="white" fontSize="10" className="font-mono">⚡ AI processes &amp; categorizes</text>
            </g>

            {/* Step 3 */}
            <g>
              <circle cx="540" cy="230" r="15" fill="none" stroke="#10b981" strokeWidth="2"/>
              <text x="540" y="235" fill="#10b981" fontSize="12" textAnchor="middle" className="font-mono font-bold">3</text>
              <rect x="565" y="215" width="160" height="30" fill="none" stroke="white" strokeWidth="1" strokeDasharray="3,2" className="opacity-60"/>
              <text x="570" y="228" fill="white" fontSize="10" className="font-mono">🔗 Creates GitHub issue</text>
            </g>

            {/* Connecting lines */}
            <path d="M540 145 L540 165" stroke="#10b981" strokeWidth="2" strokeDasharray="3,3"/>
            <path d="M540 195 L540 215" stroke="#10b981" strokeWidth="2" strokeDasharray="3,3"/>
          </g>

          {/* Solution benefits */}
          <g className={`transition-all duration-1000 ${showSolution ? 'opacity-100' : 'opacity-0'}`}>
            <text x="520" y="300" fill="#10b981" fontSize="12" className="font-mono">🎯 Organized by project</text>
            <text x="520" y="325" fill="#10b981" fontSize="12" className="font-mono">🔗 Structured &amp; actionable</text>
            <text x="520" y="350" fill="#10b981" fontSize="12" className="font-mono">⚡ Never lose an idea</text>
          </g>

          {/* Bottom status */}
          <text x="120" y="470" fill="#ef4444" fontSize="14" textAnchor="middle" className="font-mono">😤 Frustrating &amp; Inefficient</text>
          <text x="720" y="470" fill="#10b981" fontSize="14" textAnchor="middle" className="font-mono">🚀 Productive &amp; Organized</text>
        </svg>
      </div>
      
      <div className="mt-6 text-gray-400 text-sm font-mono space-y-1 text-center">
        <div>→ Stop losing great ideas to scattered notes</div>
        <div>→ One voice input becomes organized action</div>
        <div>→ Focus on building instead of managing ideas</div>
      </div>
    </div>
  );
};