import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Instagram, Terminal, Code, Database, Brain, Server, Globe } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // TypeWriter component
  const TypeWriter = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, 100);
        return () => clearTimeout(timeout);
      }
    }, [currentIndex, text]);

    return <span className="font-mono">{displayText}</span>;
  };

  // Custom cursor component
  const Cursor = () => (
    <div
      className="fixed w-8 h-8 pointer-events-none mix-blend-difference z-50"
      style={{
        left: `${mousePosition.x - 16}px`,
        top: `${mousePosition.y - 16}px`,
        transition: 'all 0.1s ease'
      }}
    >
      <div 
        className={`
          rounded-full bg-white opacity-50
          ${cursorVariant === 'default' ? 'w-8 h-8' : 'w-16 h-16'}
          transition-all duration-300 ease-out
        `} 
      />
    </div>
  );

  // Data for skills
  const skills = {
    programming: [
      { name: 'Python', level: 90 },
      { name: 'TensorFlow', level: 85 },
      { name: 'Neural Networks', level: 80 },
      { name: 'Computer Vision', level: 85 },
      { name: 'NLP', level: 75 }
    ],
    tools: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 80 },
      { name: 'Kubernetes', level: 70 },
      { name: 'AWS', level: 75 },
      { name: 'MongoDB', level: 85 }
    ]
  };

  // Data for projects
  const projects = [
    {
      title: 'AI Research Assistant',
      description: 'Advanced NLP-based research assistant using transformer architecture',
      tech: ['Python', 'PyTorch', 'Transformers', 'FastAPI'],
      github: 'https://github.com/UmeshCode1/ai-research-assistant',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Computer Vision Pipeline',
      description: 'Real-time object detection and tracking system',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'YOLO'],
      github: 'https://github.com/UmeshCode1/cv-pipeline',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'ML Model Deployment',
      description: 'Scalable ML model deployment infrastructure',
      tech: ['Docker', 'Kubernetes', 'Flask', 'Redis'],
      github: 'https://github.com/UmeshCode1/ml-deployment',
      icon: <Server className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Cursor />
      
      {/* Matrix background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute text-green-500 text-xl animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            >
              {String.fromCharCode(33 + Math.floor(Math.random() * 93))}
            </div>
          ))}
        </div>
      </div>

      {/* Header section */}
      <header className="relative bg-gradient-to-r from-blue-900 to-purple-900 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8 transform hover:scale-110 transition-transform duration-300">
            <img 
              src="/api/placeholder/150/150" 
              alt="Umesh Patel"
              className="rounded-full w-32 h-32 mx-auto border-4 border-blue-500"
            />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            <TypeWriter text="Umesh Patel" />
          </h1>
          <p className="text-xl mb-6 font-mono">
            <TypeWriter text="AI Researcher | ML Engineer | Tech Innovator" />
          </p>
          <div className="flex justify-center space-x-6">
            {[
              { Icon: Github, link: 'https://github.com/UmeshCode1' },
              { Icon: Linkedin, link: 'https://linkedin.com/in/umesh-patel-5647b42a4' },
              { Icon: Mail, link: 'mailto:umesh.code1@gmail.com' },
              { Icon: Instagram, link: 'https://www.instagram.com/nycto_phile.i' }
            ].map(({ Icon, link }) => (
              <a
                key={link}
                href={link}
                className="transform hover:scale-125 transition-transform duration-300 text-blue-400 hover:text-blue-300"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-800 sticky top-0 z-40 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4">
          <ul className="flex justify-center space-x-8">
            {['about', 'skills', 'projects', 'education', 'contact'].map(item => (
              <li key={item}>
                <button
                  onClick={() => setActiveSection(item)}
                  className={`py-4 px-2 capitalize transition-colors duration-300 ${
                    activeSection === item 
                      ? 'text-blue-400 border-b-2 border-blue-400' 
                      : 'text-gray-400 hover:text-blue-400'
                  }`}
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main content sections */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* About Section */}
        <section className={`transition-all duration-500 ${
          activeSection === 'about' ? 'opacity-100' : 'opacity-0 hidden'
        }`}>
          <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
            <div className="flex items-center mb-6">
              <Terminal className="text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold">About Me</h2>
            </div>
            <div className="font-mono text-gray-300 leading-relaxed space-y-4">
              <p className="text-blue-400">const aboutMe = {'{'}</p>
              <p className="ml-4">
                role: "AI Researcher & ML Engineer",
              </p>
              <p className="ml-4">
                location: "Bhopal, India",
              </p>
              <p className="ml-4">
                interests: ["AI", "Machine Learning", "Innovation"],
              </p>
              <p className="ml-4">
                goals: "Creating intelligent systems that matter"
              </p>
              <p>{'}'}</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className={`transition-all duration-500 ${
          activeSection === 'skills' ? 'opacity-100' : 'opacity-0 hidden'
        }`}>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Code className="text-blue-400 mr-3" />
                  <span className="capitalize">{category}</span>
                </h3>
                <div className="space-y-4">
                  {items.map(skill => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-400 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className={`transition-all duration-500 ${
          activeSection === 'projects' ? 'opacity-100' : 'opacity-0 hidden'
        }`}>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map(project => (
              <div 
                key={project.title}
                className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center mb-4">
                  {project.icon}
                  <h3 className="text-xl font-bold ml-3">{project.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span 
                      key={tech}
                      className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.github}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  <Github className="mr-2" size={16} />
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className={`transition-all duration-500 ${
          activeSection === 'contact' ? 'opacity-100' : 'opacity-0 hidden'
        }`}>
          <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
            <div className="flex items-center mb-6">
              <Mail className="text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold">Get in Touch</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={20} className="text-blue-400" />
                <a href="mailto:umesh.code1@gmail.com" className="hover:text-blue-400">
                  umesh.code1@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Github size={20} className="text-blue-400" />
                <a href="https://github.com/UmeshCode1" className="hover:text-blue-400">
                  GitHub Profile
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Linkedin size={20} className="text-blue-400" />
                <a href="https://linkedin.com/in/umesh-patel-5647b42a4" className="hover:text-blue-400">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Umesh Patel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;