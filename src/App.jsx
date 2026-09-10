import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import { skillsData, orgData } from './data/portofolioData.js';
import './styles/App.css';

// 1. IMPORT GAMBARNYA DI SINI
// Jika ekstensinya .png atau .jpeg, pastikan ganti tulisan .jpg di bawah ini!
import bgImage from './assets/profile.jpg'; 

function App() {
  return (
    <div className="app-container">
      
      {/* 2. TAMBAHKAN DIV KHUSUS BACKGROUND INI */}
      <div 
        className="background-blur" 
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <Navbar />
      
      <main>
        <Hero />
        
        <section id="skills" className="skills-section">
          <h2>Technical Skills</h2>
          <ul className="skills-list">
            {skillsData.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        <Projects />

        <section id="organization" className="org-section">
          <h2>Organizational Experience</h2>
          <div className="org-grid">
            {orgData.map((org) => (
               <div key={org.id} className="org-card">
                 <h3>{org.name}</h3>
                 <span className="period">{org.role}</span>
                 <p>{org.desc}</p>
               </div>
            ))}
          </div>
        </section>
      </main>
      
      <footer>
        <p>© 2026 Gabriel Sigalingging. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;