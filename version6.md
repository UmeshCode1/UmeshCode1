<!-- Cyberpunk Animated Banner -->
<div align="center">
   <img src="https://capsule-render.vercel.app/api?type=venom&height=300&text=Umesh%20Patel&fontSize=90&color=0:84ff00,100:00ff99&stroke=00ffff&animation=fadeIn&fontColor=ffffff&strokeWidth=2&desc=AI%20Engineer%20|%20ML%20Expert%20|%20Tech%20Innovator&descSize=25&descAlignY=65"/>
</div>

<!-- Custom Profile Card with Glowing Effect -->

<div align="center">
   <div style="background: linear-gradient(45deg, #84ff00, #00ff99, #00ffff);
               padding: 3px;
               border-radius: 10px;
               box-shadow: 0 0 20px rgba(0, 255, 153, 0.5);">
      <div style="background: #0d1117;
                  border-radius: 7px;
                  padding: 20px;">
         <img src="your-profile-image.jpg" width="150px" style="border-radius: 50%;
                                                               border: 3px solid #00ff99;
                                                               box-shadow: 0 0 15px #00ff99;">
         <h2 style="color: #00ff99;">Umesh Patel</h2>
         <p style="color: #ffffff;">🎮 Tech Wizard | 🤖 AI Enthusiast | 🧠 ML Expert</p>
      </div>
   </div>
</div>

<!-- Animated Tech Title -->
<div align="center">
   <a href="https://git.io/typing-svg">
      <img src="https://readme-typing-svg.demolab.com?font=Orbitron&size=35&duration=3000&pause=1000&color=00FFB2&center=true&vCenter=true&repeat=false&width=750&height=75&lines=Welcome+to+My+Tech+Universe+🌌" />
   </a>
</div>

<!-- Custom SVG: Neural Network Animation -->

<svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
   <defs>
      <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="0%">
         <stop offset="0%" style="stop-color:#84ff00;stop-opacity:1" />
         <stop offset="100%" style="stop-color:#00ff99;stop-opacity:1" />
      </linearGradient>
      <filter id="glow">
         <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
         <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
         </feMerge>
      </filter>
   </defs>
   
   <!-- Neural Network Nodes -->
   <g filter="url(#glow)">
      <!-- Input Layer -->
      <circle cx="100" cy="50" r="10" fill="url(#neuralGrad)">
         <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="100" cy="100" r="10" fill="url(#neuralGrad)">
         <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="100" cy="150" r="10" fill="url(#neuralGrad)">
         <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
      </circle>


      <circle cx="400" cy="75" r="10" fill="url(#neuralGrad)">
         <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="400" cy="125" r="10" fill="url(#neuralGrad)">
         <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
      </circle>

      <!-- Output Layer -->
      <circle cx="700" cy="100" r="10" fill="url(#neuralGrad)">
         <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
      </circle>
      
      <g stroke="url(#neuralGrad)" stroke-width="2" opacity="0.5">
         <line x1="110" y1="50" x2="390" y2="75">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.5s" repeatCount="indefinite"/>
         </line>
         <line x1="110" y1="100" x2="390" y2="75">
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.5s" repeatCount="indefinite"/>
         </line>
         <!-- Add more connections -->
      </g>
   </g>
</svg>
