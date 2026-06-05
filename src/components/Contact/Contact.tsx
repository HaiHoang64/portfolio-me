import './Contact.scss';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>

      <div className="contact-list">
    <p>
      <strong>Email:</strong>{" "}
      <a href="mailto:hoanghaintp@gmail.com">
        hoanghaintp@gmail.com
      </a>
    </p>

    <p>
      <strong>LinkedIn:</strong>{" "}
      <a 
        href="https://linkedin.com/in/hoàng-hải-06108b298" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        linkedin.com/in/hoàng-hải-06108b298
      </a>
    </p>

    <p>
      <strong>GitHub:</strong>{" "}
      <a 
        href="https://github.com/HaiHoang64" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        github.com/HaiHoang64
      </a>
    </p>
    </div>
    </section>
  );
}

export default Contact;