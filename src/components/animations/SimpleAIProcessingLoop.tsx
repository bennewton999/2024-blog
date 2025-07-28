'use client';

import { useEffect, useState } from 'react';

export const SimpleAIProcessingLoop = () => {
  const [stage, setStage] = useState<'input' | 'processing' | 'output'>('input');
  const [processingProgress, setProcessingProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setStage(current => {
        if (current === 'input') return 'processing';
        if (current === 'processing') return 'output';
        return 'input';
      });
    }, 2000);
    
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    if (stage === 'processing') {
      const progress = setInterval(() => {
        setProcessingProgress(prev => {
          if (prev >= 100) return 0;
          return prev + 20;
        });
      }, 200);
      return () => clearInterval(progress);
    } else {
      setProcessingProgress(0);
    }
  }, [stage]);

  return (
    <div className="w-full max-w-4xl mx-auto my-12 p-8 bg-black rounded-lg">
      <div className="text-center mb-8">
        <h3 className="text-white text-2xl font-mono mb-2">Step 2: AI Classification</h3>
        <p className="text-gray-300 text-sm">AI transforms rambling into structure</p>
      </div>

      <div className="relative">
        <svg viewBox="0 0 800 300" className="w-full h-48 bg-gray-900 rounded">
          {/* Voice input box */}
          <g className={stage === 'input' ? 'opacity-100' : 'opacity-40'}>
            <rect x="50" y="50" width="250" height="100" fill="none" stroke="white" strokeWidth="1" strokeDasharray="5,3"/>
            <text x="60" y="70" fill="white" fontSize="10" className="font-mono opacity-60">Raw Voice Input:</text>
            <text x="60" y="90" fill="green" fontSize="9" className="font-mono">&quot;Um, so the navbar thing,</text>
            <text x="60" y="105" fill="green" fontSize="9" className="font-mono">it&apos;s like... we need a</text>
            <text x="60" y="120" fill="green" fontSize="9" className="font-mono">hamburger menu on mobile...&quot;</text>
          </g>
          
          {/* Arrow 1 */}
          <g className={stage !== 'input' ? 'opacity-100' : 'opacity-0'}>
            <path d="M 300 100 L 380 100" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead)">
              <animate
                attributeName="stroke-dasharray"
                values="0,100;80,20;80,20"
                dur="1s"
                begin="0s"
                fill="freeze"
              />
            </path>
          </g>
          
          {/* AI Processing */}
          <g className={stage === 'processing' ? 'opacity-100' : 'opacity-40'}>
            <circle cx="400" cy="100" r="30" fill="none" stroke="white" strokeWidth="2"/>
            <text x="400" y="105" fill="white" fontSize="14" textAnchor="middle" className="font-mono">AI</text>
            
            {/* Processing dots */}
            {stage === 'processing' && (
              <>
                <circle cx="380" cy="80" r="2" fill="white" className="animate-pulse"/>
                <circle cx="400" cy="75" r="2" fill="white" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
                <circle cx="420" cy="80" r="2" fill="white" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
              </>
            )}
            
            {/* Progress indicator */}
            {stage === 'processing' && (
              <g>
                <rect x="350" y="140" width="100" height="4" fill="gray" fillOpacity="0.3"/>
                <rect x="350" y="140" width={processingProgress} height="4" fill="blue"/>
              </g>
            )}
          </g>
          
          {/* Arrow 2 */}
          <g className={stage === 'output' ? 'opacity-100' : 'opacity-0'}>
            <path d="M 430 100 L 510 100" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead)">
              <animate
                attributeName="stroke-dasharray"
                values="0,100;80,20;80,20"
                dur="1s"
                begin="0s"
                fill="freeze"
              />
            </path>
          </g>
          
          {/* Structured output */}
          <g className={stage === 'output' ? 'opacity-100' : 'opacity-40'}>
            <rect x="530" y="50" width="220" height="150" fill="none" stroke="white" strokeWidth="2"/>
            <text x="540" y="70" fill="white" fontSize="10" className="font-mono">Structured Output:</text>
            
            <rect x="540" y="85" width="200" height="20" fill="none" stroke="gray" strokeWidth="1" className="opacity-60"/>
            <text x="545" y="97" fill="blue" fontSize="9" className="font-mono">Type: Feature Request</text>
            
            <rect x="540" y="110" width="200" height="20" fill="none" stroke="gray" strokeWidth="1" className="opacity-60"/>
            <text x="545" y="122" fill="orange" fontSize="9" className="font-mono">Priority: Medium</text>
            
            <rect x="540" y="135" width="200" height="20" fill="none" stroke="gray" strokeWidth="1" className="opacity-60"/>
            <text x="545" y="147" fill="purple" fontSize="9" className="font-mono">Project: ui-components</text>
            
            <rect x="540" y="160" width="200" height="30" fill="none" stroke="gray" strokeWidth="1" className="opacity-60"/>
            <text x="545" y="172" fill="green" fontSize="8" className="font-mono">Title: &quot;Add mobile hamburger</text>
            <text x="545" y="182" fill="green" fontSize="8" className="font-mono">navigation menu&quot;</text>
          </g>
          
          {/* Stage indicator */}
          <text x="400" y="250" fill="white" fontSize="12" textAnchor="middle" className="font-mono opacity-60">
            {stage === 'input' ? 'Receiving voice input...' : 
             stage === 'processing' ? 'AI processing...' : 
             'Output generated!'}
          </text>
        </svg>
        
        {/* Arrow marker */}
        <svg width="0" height="0">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="white"/>
            </marker>
          </defs>
        </svg>
      </div>
      
      <div className="mt-6 text-gray-400 text-sm font-mono space-y-1 text-center">
        <div>→ Understands developer context and terminology</div>
        <div>→ Converts rambling into professional documentation</div>
        <div>→ Automatically determines issue type and priority</div>
      </div>
    </div>
  );
};