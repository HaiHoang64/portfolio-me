import './Hero.scss';
import heroImage from '../../assets/hero.png';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Hai Hoang</h1>
        <h2 className="role">Data Analyst | Data Engineer | Automation</h2>
        <p className="description">
          Transforming data into actionable insights and building automation solutions for manufacturing.
        </p>
        <button className="btn-primary">View Projects</button>
      </div>
      
      <div className="hero-image">
        {/* Đảm bảo đường dẫn import ảnh phía trên là chính xác */}
        <img src={heroImage} alt="Hai Hoang - Data & Automation" />
      </div>
    </section>
  );
};

export default Hero;