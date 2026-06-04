import './Projects.scss';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-grid">

        <div className="card">
          <h3>Production Dashboard</h3>
          <p>Power BI dashboard for manufacturing KPIs.</p>
        </div>

        <div className="card">
          <h3>Google Apps Script Automation</h3>
          <p>Automated production reporting system.</p>
        </div>

        <div className="card">
          <h3>Portfolio Website</h3>
          <p>React + TypeScript + Vite Portfolio.</p>
        </div>

      </div>
    </section>
  );
}

export default Projects;