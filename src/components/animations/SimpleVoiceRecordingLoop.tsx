'use client';

import { useEffect, useState } from 'react';

export const SimpleVoiceRecordingLoop = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcription, setTranscription] = useState('');
  
  const fullText = "Add a dark mode toggle to the settings page with system preference default";
  
  useEffect(() => {
    // Start recording after 1 second
    const startTimer = setTimeout(() => {
      setIsRecording(true);
      setTranscription('');
    }, 1000);
    
    return () => clearTimeout(startTimer);
  }, []);
  
  useEffect(() => {
    if (isRecording && transcription.length < fullText.length) {
      const timer = setTimeout(() => {
        setTranscription(fullText.slice(0, transcription.length + 1));
      }, 50);
      return () => clearTimeout(timer);
    } else if (isRecording && transcription.length >= fullText.length) {
      // Stop recording after text is complete
      const stopTimer = setTimeout(() => {
        setIsRecording(false);
      }, 1000);
      return () => clearTimeout(stopTimer);
    }
  }, [isRecording, transcription, fullText]);
  
  useEffect(() => {
    if (!isRecording && transcription) {
      // Reset and loop after 3 seconds
      const resetTimer = setTimeout(() => {
        setTranscription('');
        setTimeout(() => {
          setIsRecording(true);
        }, 1000);
      }, 3000);
      return () => clearTimeout(resetTimer);
    }
  }, [isRecording, transcription]);

  return (
    <div className="w-full max-w-4xl mx-auto my-12 p-8 bg-black rounded-lg">
      <div className="text-center mb-8">
        <h3 className="text-white text-2xl font-mono mb-2">Step 1: Voice Recording</h3>
        <p className="text-gray-300 text-sm">Speak naturally, VoiceCommit captures everything</p>
      </div>

      <div className="relative">
        <svg viewBox="0 0 800 250" className="w-full h-40 bg-gray-900 rounded">
          {/* Phone outline */}
          <rect x="50" y="30" width="200" height="180" rx="15" fill="none" stroke="white" strokeWidth="2" className="opacity-80"/>
          
          {/* Screen */}
          <rect x="60" y="50" width="180" height="140" fill="none" stroke="white" strokeWidth="1" className="opacity-60"/>
          
          {/* App title */}
          <text x="150" y="70" fill="white" fontSize="12" textAnchor="middle" className="font-mono opacity-70">
            VoiceCommit
          </text>
          
          {/* Project selector */}
          <rect x="70" y="85" width="160" height="20" fill="none" stroke="white" strokeWidth="1" className="opacity-60"/>
          <text x="75" y="98" fill="white" fontSize="10" className="font-mono opacity-70">
            Project: ui-components
          </text>
          
          {/* Recording button */}
          <circle
            cx="150"
            cy="130"
            r="20"
            fill={isRecording ? "#ef4444" : "none"}
            stroke="white"
            strokeWidth="2"
            className={isRecording ? 'animate-pulse' : ''}
          />
          
          {/* Mic icon */}
          <rect x="145" y="122" width="10" height="12" rx="5" fill="none" stroke="white" strokeWidth="1"/>
          <line x1="150" y1="134" x2="150" y2="140" stroke="white" strokeWidth="1"/>
          
          {/* Status text */}
          <text x="150" y="165" fill="white" fontSize="10" textAnchor="middle" className="font-mono opacity-60">
            {isRecording ? "Recording..." : transcription ? "Tap to record again" : "Ready to record"}
          </text>
          
          {/* Waveform when recording */}
          {isRecording && (
            <g className="opacity-80">
              {Array.from({length: 7}).map((_, i) => (
                <line
                  key={i}
                  x1={120 + i * 10}
                  y1={130}
                  y2={130}
                  stroke="white"
                  strokeWidth="2"
                  className="animate-pulse"
                >
                  <animate
                    attributeName="y2"
                    values={`${130 + Math.random() * 10};${130 - Math.random() * 10};${130 + Math.random() * 10}`}
                    dur="0.8s"
                    repeatCount="indefinite"
                  />
                </line>
              ))}
            </g>
          )}
          
          {/* Arrow to transcription */}
          {transcription && (
            <g>
              <path
                d="M 260 120 Q 300 110 340 120"
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeDasharray="3,3"
                className="opacity-60"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;6"
                  dur="0.5s"
                  repeatCount="indefinite"
                />
              </path>
              <polygon points="335,115 345,120 335,125" fill="white" className="opacity-60"/>
            </g>
          )}
          
          {/* Transcription area */}
          {transcription && (
            <g>
              <rect x="360" y="80" width="380" height="80" fill="none" stroke="white" strokeWidth="1" strokeDasharray="5,3" className="opacity-70"/>
              <text x="370" y="100" fill="gray" fontSize="10" className="font-mono">Transcription:</text>
              <text x="370" y="120" fill="green" fontSize="10" className="font-mono">
                <tspan x="370" dy="0">&quot;{transcription.slice(0, 40)}</tspan>
                <tspan x="370" dy="12">{transcription.slice(40, 80)}&quot;</tspan>
              </text>
            </g>
          )}
        </svg>
      </div>
      
      <div className="mt-6 text-gray-400 text-sm font-mono space-y-1 text-center">
        <div>→ Works with any project you configure</div>
        <div>→ Captures complete thoughts, not just keywords</div>
        <div>→ No typing required while you're away from desk</div>
      </div>
    </div>
  );
};