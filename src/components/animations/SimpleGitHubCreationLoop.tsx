'use client';

import { useEffect, useState } from 'react';

export const SimpleGitHubCreationLoop = () => {
  const [stage, setStage] = useState<'ready' | 'creating' | 'complete'>('ready');
  const [typeProgress, setTypeProgress] = useState(0);
  
  const issueText = "Add mobile hamburger navigation menu";
  
  useEffect(() => {
    const timer = setInterval(() => {
      setStage(current => {
        if (current === 'ready') return 'creating';
        if (current === 'creating') return 'complete';
        return 'ready';
      });
    }, 3000);
    
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    if (stage === 'creating') {
      setTypeProgress(0);
      const typing = setInterval(() => {
        setTypeProgress(prev => {
          if (prev >= issueText.length) {
            clearInterval(typing);
            return prev;
          }
          return prev + 1;
        });
      }, 50);
      return () => clearInterval(typing);
    }
  }, [stage, issueText.length]);

  return (
    <div className="w-full max-w-4xl mx-auto my-12 p-8 bg-black rounded-lg">
      <div className="text-center mb-8">
        <h3 className="text-white text-2xl font-mono mb-2">Step 3: GitHub Issue Creation</h3>
        <p className="text-gray-300 text-sm">Voice becomes actionable GitHub issue</p>
      </div>

      <div className="relative">
        <svg viewBox="0 0 800 350" className="w-full h-56 bg-gray-900 rounded">
          {/* Input data */}
          <g className={stage === 'ready' ? 'opacity-100' : 'opacity-40'}>
            <rect x="50" y="50" width="200" height="120" fill="none" stroke="white" strokeWidth="1" strokeDasharray="5,3"/>
            <text x="60" y="70" fill="white" fontSize="10" className="font-mono">Ready to Create:</text>
            <text x="60" y="90" fill="gray" fontSize="9" className="font-mono">Type: Feature</text>
            <text x="60" y="105" fill="gray" fontSize="9" className="font-mono">Priority: Medium</text>
            <text x="60" y="120" fill="gray" fontSize="9" className="font-mono">Project: ui-components</text>
            <text x="60" y="145" fill="green" fontSize="8" className="font-mono">&quot;Add mobile hamburger</text>
            <text x="60" y="158" fill="green" fontSize="8" className="font-mono">navigation menu&quot;</text>
          </g>
          
          {/* Creating arrow */}
          {stage !== 'ready' && (
            <g>
              <path d="M 260 110 L 340 110" stroke="white" strokeWidth="2" strokeDasharray="3,3">
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;6"
                  dur="0.5s"
                  repeatCount="indefinite"
                />
              </path>
              <text x="300" y="100" fill="white" fontSize="8" textAnchor="middle" className="font-mono opacity-60">
                {stage === 'creating' ? 'Creating...' : 'Created!'}
              </text>
            </g>
          )}
          
          {/* GitHub Issue */}
          <g className={stage !== 'ready' ? 'opacity-100' : 'opacity-30'}>
            {/* Browser window */}
            <rect x="360" y="50" width="380" height="250" fill="none" stroke="white" strokeWidth="2"/>
            
            {/* Browser header */}
            <rect x="360" y="50" width="380" height="25" fill="gray" fillOpacity="0.3"/>
            <circle cx="375" cy="62" r="3" fill="red"/>
            <circle cx="385" cy="62" r="3" fill="yellow"/>
            <circle cx="395" cy="62" r="3" fill="green"/>
            <text x="420" y="66" fill="white" fontSize="8" className="font-mono">github.com/ui-components</text>
            
            {/* GitHub tabs */}
            <text x="375" y="95" fill="gray" fontSize="9" className="font-mono">Code</text>
            <text x="415" y="95" fill="white" fontSize="9" className="font-mono underline">Issues</text>
            <text x="455" y="95" fill="gray" fontSize="9" className="font-mono">Pull requests</text>
            
            {/* Issue content */}
            {stage !== 'ready' && (
              <g>
                {/* Issue number and title */}
                <circle cx="380" cy="120" r="5" fill="green"/>
                <text x="395" y="124" fill="white" fontSize="10" className="font-mono">#247</text>
                
                {/* Typing animation for title */}
                <text x="375" y="145" fill="white" fontSize="11" className="font-mono">
                  {issueText.slice(0, typeProgress)}
                  {typeProgress < issueText.length && (
                    <tspan className="animate-pulse">|</tspan>
                  )}
                </text>
                
                {/* Meta info */}
                {stage === 'complete' && (
                  <>
                    <text x="375" y="160" fill="gray" fontSize="8" className="font-mono">
                      opened just now by voicecommit-bot
                    </text>
                    
                    {/* Issue body */}
                    <rect x="375" y="175" width="350" height="80" fill="none" stroke="gray" strokeWidth="1" strokeDasharray="2,2" className="opacity-50"/>
                    <text x="385" y="190" fill="gray" fontSize="8" className="font-mono">Description:</text>
                    <text x="385" y="205" fill="white" fontSize="8" className="font-mono">Implement hamburger menu for mobile navigation</text>
                    <text x="385" y="220" fill="white" fontSize="8" className="font-mono">that slides out from the left side.</text>
                    
                    {/* Labels */}
                    <rect x="385" y="265" width="60" height="15" fill="blue" fillOpacity="0.3" rx="3"/>
                    <text x="415" y="275" fill="blue" fontSize="7" textAnchor="middle" className="font-mono">enhancement</text>
                    
                    <rect x="455" y="265" width="30" height="15" fill="green" fillOpacity="0.3" rx="3"/>
                    <text x="470" y="275" fill="green" fontSize="7" textAnchor="middle" className="font-mono">ui</text>
                    
                    <rect x="495" y="265" width="45" height="15" fill="purple" fillOpacity="0.3" rx="3"/>
                    <text x="517" y="275" fill="purple" fontSize="7" textAnchor="middle" className="font-mono">mobile</text>
                  </>
                )}
              </g>
            )}
          </g>
          
          {/* Status text */}
          <text x="400" y="330" fill="white" fontSize="10" textAnchor="middle" className="font-mono opacity-60">
            {stage === 'ready' ? 'Waiting to create issue...' : 
             stage === 'creating' ? 'Creating GitHub issue...' : 
             'Issue created successfully!'}
          </text>
        </svg>
      </div>
      
      <div className="mt-6 text-gray-400 text-sm font-mono space-y-1 text-center">
        <div>→ Creates properly formatted GitHub issues</div>
        <div>→ Adds relevant labels and project context</div>
        <div>→ Ready for your team to pick up and implement</div>
      </div>
    </div>
  );
};