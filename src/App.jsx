// src/App.jsx
import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // Media Filter Logic
    const projectMediaFilters = document.querySelectorAll('.media-filter-btn');
    projectMediaFilters.forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        const projectCard = btn.closest('.project-card');
        const mediaItems = projectCard.querySelectorAll('.gallery-item');
        mediaItems.forEach(item => {
          item.style.display = (category === 'all' || item.dataset.category === category) ? 'block' : 'none';
        });
        const siblingBtns = btn.parentElement.querySelectorAll('.media-filter-btn');
        siblingBtns.forEach(b => b.classList.remove('bg-blue-500','text-white'));
        btn.classList.add('bg-blue-500','text-white');
      });
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white font-sans leading-relaxed">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-purple-900/80 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3">
          <h1 className="animate-pulse text-lg sm:text-xl font-bold text-yellow-500 hover:text-white hover:scale-105 transition fadeOut">RKS Portfolio</h1>
          <ul className="hidden md:flex space-x-6 text-yellow-400">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#certifications" className="hover:text-white">Certifications</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-black/50 px-4">
        <img src="images/mypic.jpg" 
             alt="Profile" 
             className="w-32 h-32 ring-1 ring-pink-500 drop-shadow-[10px_10px_20px_pink] shake sm:w-40 sm:h-40 rounded-full border-cyan-400 shadow-lg mb-6"/>
        <h1 className="text-3xl sm:text-5xl font-bold text-cyan-400 mb-4 hover:scale-105 transition">Oruganti Rama Krishna Srinivas</h1>
        <h2 className="text-lg sm:text-xl text-purple-300 mb-6 hover:scale-105">Python Full Stack Developer | <br /> CSE Student | <br /> Tech Enthusiast</h2>
        <a href="#projects" className="hover:scale-105 animate-pulse bg-cyan-400 text-purple-900 px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-cyan-500 transition">
          View My Work
        </a>
      </section>
      <br />
      <div className="max-w-6xl mx-auto space-y-16 px-4 sm:px-6">

        {/* About */}
        <section id="about" className="fadeIn bg-black/10 ring-2 ring-cyan-400 transition backdrop-blur-md p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4">About Me</h3>
          <p className="text-purple-100 text-sm sm:text-base">
            I am a motivated Computer Science Engineering graduate from Siddharth Institute of Engineering and Technology, 
            passionate about building modern web applications and solving real-world problems. 
            I specialize in Python, Flask, React, and Tailwind CSS. 
            I love learning new technologies, cooking, and exploring creative ideas in tech.
          </p>
        </section>

        {/* Skills & Education */}
        <div className="grid grid-cols-1 slideRight md:grid-cols-2 gap-6">
          {/* Skills */}
          <section id="skills" className="ring-2 ring-pink-400 bg-white/5 transition backdrop-blur-md p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-6">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {["Python","DBMS concepts","POSTGRESQL","HTML5","CSS3","JavaScript","React.js","Tailwind CSS","Flask"].map(skill => (
                <span key={skill} className="hover:scale-105 px-3 py-2 rounded-full text-purple-900 font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg">{skill}</span>
              ))}
            </div>
          </section>

          {/* Education */}
          <section id="education" className="ring-2 ring-pink-400 bg-white/5 transition backdrop-blur-md p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4">Education</h3>
            <ul className="space-y-2 text-purple-100 text-sm sm:text-base">
              <li><strong>B.Tech (CSE)</strong> – SIETK, Puttur (2023-2026) – 7.5 CGPA(present)</li>
              <li><strong>Intermediate</strong> – Himaja Junior College (2020-2022) – 68.8%</li>
              <li><strong>SSC</strong> – Himaja English Medium School (2019-2020) – 99.8%</li>
            </ul>
          </section>
        </div>

        {/* Projects Section */}
        <section id="projects">
      <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-6">Projects</h2> <br /><br />
      <div id="gallery" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
  
      <div className="project-card calculator bg-gray-800 p-4 rounded-lg shadow-lg slideDown">
        <h4 className="text-xl font-semibold text-yellow-300 mb-2">Calculator</h4>
        <h3><strong>Tech Used:</strong> HTML, CSS, JavaScript (ES6) <br /><br />
        <strong>Input / Setup:</strong> Buttons for digits & operations, event listeners, state management (currentInput, previousInput, operator) <br /> <br />
        <strong>Results:</strong> Dynamic display, correct arithmetic operations, handles edge cases (divide by zero, decimals) <br /> <br />
        <strong>Learned:</strong> DOM manipulation, state handling, edge case management, responsive layout</h3><br />
        <div className="flex gap-2 mb-4 flex-wrap">
          <button className="media-filter-btn bg-blue-500 px-3 py-1 rounded-lg hover:bg-yellow-500 hover:text-white" data-category="all">All</button>
          <button className="media-filter-btn bg-blue-500 px-3 py-1 rounded-lg hover:bg-yellow-500 hover:text-white" data-category="screenshots">Screenshots</button>
        </div>
  
        <div className="media-gallery grid grid-cols-2 gap-2">
          <img src="images/screenshot (93).png" loading="lazy" data-category="screenshots" className="gallery-item w-full h-32 hover:scale-110 object-cover rounded"/>
          <img src="images/screenshot (94).png" loading="lazy" data-category="screenshots" className="gallery-item w-full h-32 hover:scale-110 object-cover rounded"/>
          <img src="images/screenshot (95).png" loading="lazy" data-category="screenshots" className="gallery-item w-full h-32 hover:scale-110 object-cover rounded"/>
          <img src="images/screenshot (96).png" loading="lazy" data-category="screenshots" className="gallery-item w-full h-32 hover:scale-110 object-cover rounded"/>
        </div>
  
        <a href="https://github.com/RamaKrishnaSrinivas/calculator" className="text-green-400 hover:underline mt-2 inline-block">-- GitHub Link</a>
      </div>
  
      <div className="project-card registration bg-gray-800 p-4 rounded-lg shadow-lg slideDown">
        <h4 className="text-xl font-semibold text-yellow-300 mb-2">Registration Form</h4>
        <h3><strong>Tech Used:</strong> HTML, CSS, JavaScript <br /><br />
        <strong>Input / Setup:</strong> Name, Email, Mobile, DOB, Password; client-side validation with regex; real-time feedback <br /><br />
        <strong>Results:</strong> Blocks invalid submissions, shows error messages, saves valid data (localStorage/demo) <br /><br />
        <strong>Learned:</strong> Form validation, UX feedback, regex usage, preparing for backend integration</h3> <br />
        <div class="flex gap-2 mb-4 flex-wrap">
          <button className="media-filter-btn bg-blue-500 px-3 py-1 rounded-lg hover:bg-yellow-500 hover:text-white" data-category="all">All</button>
          <button className="media-filter-btn bg-blue-500 px-3 py-1 rounded-lg hover:bg-yellow-500 hover:text-white" data-category="screenshots">Screenshots</button>
          <button className="media-filter-btn bg-blue-500 px-3 py-1 rounded-lg hover:bg-yellow-500 hover:text-white" data-category="videos">Videos</button>
        </div>
  
        <div className="media-gallery grid grid-cols-2 gap-2">
          <img src="images/screenshot (77).png" loading="lazy" data-category="screenshots" className="gallery-item w-full h-32 hover:scale-110 object-cover rounded"/>
          <img src="images/screenshot (78).png" loading="lazy" data-category="screenshots" className="gallery-item w-full h-32 hover:scale-110 object-cover rounded"/>
          <img src="images/screenshot (79).png" loading="lazy" data-category="screenshots" className="gallery-item w-full h-32 hover:scale-110 object-cover rounded"/>
          <img src="images/screenshot (80).png" loading="lazy" data-category="screenshots" className="gallery-item w-full h-32 hover:scale-110 object-cover rounded"/>
          <video src="videos/registration_form record_vedio.mp4" preload="metadata" data-category="videos" className="gallery-item w-full h-32 hover:scale-110 object-cover rounded" controls></video>
        </div>
  
        <a href="https://github.com/RamaKrishnaSrinivas/registration_form" className="text-green-400 hover:underline mt-2 inline-block">-- GitHub Link</a>
       <br/>
        <a href="https://my-resume-vmz5.onrender.com" className="text-green-400 hover:underline mt-2 inline-block">-- Live Link</a>

      </div>
  
      <div className="project-card portfolio bg-gray-800 p-4 rounded-lg shadow-lg slideUp">
        <h4 className="text-xl font-semibold text-yellow-300 mb-2">Portfolio</h4>
        <h3><strong>Tech Used:</strong> HTML, CSS / Tailwind, JavaScript, Netlify deployment <br /> <br />
        <strong>Input / Setup:</strong> Sections — About, Projects, Skills, Contact; responsive layout; project cards with title, description, links <br /><br />
        <strong>Results:</strong> Fully responsive, interactive portfolio, smooth navigation, project showcase <br /><br />
        <strong>Learned:</strong> Responsive design, deployment workflow, visual consistency, planning content structure</h3> <br />
        <div className="flex gap-2 mb-4 flex-wrap">
          <button className="media-filter-btn bg-blue-500 px-3 py-1 rounded-lg hover:bg-yellow-500 hover:text-white" data-category="all">All</button>
          <button className="media-filter-btn bg-blue-500 px-3 py-1 rounded-lg hover:bg-yellow-500 hover:text-white" data-category="screenshots">Screenshots</button>
        </div>
  
        <div className="media-gallery grid grid-cols-2 gap-2">
          <img src="images/screenshot (Y2).png" loading="lazy" data-category="screenshots" className="gallery-item w-full h-32 hover:scale-110 object-cover rounded"/>
          <img src="images/screenshot (Y1).png" loading="lazy" data-category="screenshots" className="gallery-item w-full h-32 hover:scale-110 object-cover rounded"/>
        </div>
  
        <a href="https://github.com/RamaKrishnaSrinivas/Portfolio-Of-Rkso" className="text-green-400 hover:underline mt-2 inline-block">-- GitHub Link</a>
        <br/>
                <a href="https://rkso-portfolio.netlify.app/" className="text-green-400 hover:underline mt-2 inline-block">-- Live Link</a>
      </div>

      <div className="project-card college bg-gray-800 p-4 rounded-lg shadow-lg slideUp">
        <h4 className="text-xl font-semibold text-yellow-300 mb-2">College Ranking(on-process)</h4>
  
        <div className="flex gap-2 mb-4 flex-wrap">
          <button className="media-filter-btn bg-blue-500 px-3 py-1 rounded-lg hover:bg-yellow-500 hover:text-white" data-category="all">All</button>
          <button className="media-filter-btn bg-blue-500 px-3 py-1 rounded-lg hover:bg-yellow-500 hover:text-white" data-category="screenshots">Screenshots</button>
        </div>
  
        <div className="media-gallery grid grid-cols-2 gap-2">
          <img src="images/screenshot (830).png" loading="lazy" data-category="screenshots" className="gallery-item hover:scale-110 w-full h-32 object-cover rounded"/>
          <img src="images/screenshot (840).png" loading="lazy" data-category="screenshots" className="gallery-item hover:scale-110 w-full h-32 object-cover rounded"/>
        </div>
  
        <a href="https://github.com/RamaKrishnaSrinivas/college_ranking" className="text-green-400 hover:underline mt-2 inline-block">-- GitHub Link</a>
      </div>
  
    </div>
  </section>

        {/* Certifications */}
        <section id="certifications" class="shake ring-2 ring-pink-400 transition bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
      <h3 class="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4">Certifications</h3>
      <ul class="list-disc list-inside text-gray-200 space-y-2 text-sm sm:text-base">
        <li>Joy of Computing Using Python – NPTEL</li>
        <li>Web Development Internship – Assistive Technologies, Tirupati</li>
        <li>Introduction to Aspects of Game Design – edX</li>
        <li>Aptitude, Java (Basics), MySQL – Q-Spiders</li>
      </ul>
    </section>

        {/* Contact */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <section id="contact" className="ring-1 ring-pink-500 drop-shadow-[10px_10px_20px_pink] transition bg-white/5 backdrop-blur-md p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-green-500 mb-4 bounceUp">Contact Me</h3>
        <div className="flex justify-center space-x-6">
          <a href="mailto:orugantirks@gmail.com"><img src="images/mail.png" alt="Email" className="animate-pulse hover:scale-110 w-8 sm:w-10 h-6 sm:h-8"/></a>
          <a href="https://www.linkedin.com/in/oruganti-rama-krishna-srinivas-b84528306/" target="_blank"><img src="images/linkedin.png" alt="LinkedIn" className="animate-pulse hover:scale-110 w-8 sm:w-10 h-6 sm:h-8"/></a>
          <a href="https://github.com/RamaKrishnaSrinivas" target="_blank"><img src="images/github.png" alt="GitHub" className="animate-pulse hover:scale-110 w-8 sm:w-10 h-6 sm:h-8"/></a>
        </div>
      </section>
      <div>
        <a href="static/my_resume[1].pdf">
          <img src="images/resume logo.jpg" loading="lazy" className="hover:scale-105 ring-1 ring-pink-500 drop-shadow-[10px_10px_15px_pink] mx-auto rounded-full w-40 sm:w-48 h-auto animate-pulse" alt="View Resume"/>
        </a>
      </div>
    </div>

      {/* Footer */}
      <footer className="text-center mt-10 py-4 text-yellow-300 text-sm sm:text-base">
        © 2025 Oruganti Rama Krishna Srinivas. All rights reserved.
      </footer>
    </div>
    </div>
  );
};

export default App;
