import './About.scss';

const About = () => {
  // Danh sách kỹ năng (Cần đảm bảo id khớp với id trong public/icons.svg)
  const skills = [
    { name: 'G-Apps Script', iconId: 'apps-script' },
    { name: 'G-Sheets', iconId: 'google-sheets' },
    { name: 'SAP', iconId: 'sap' },
    { name: 'Power BI', iconId: 'powerbi' },
    { name: 'Python', iconId: 'python' },
    { name: 'SQL', iconId: 'sql' },
    { name: 'Data Pipeline', iconId: 'pipeline' },
    { name: 'RPA', iconId: 'rpa' },
    { name: 'Airflow', iconId: 'airflow' },
    { name: 'Git', iconId: 'git' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Cột trái: Giới thiệu bản thân */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
          I specialize in data analysis, reporting,
          dashboard development, and workflow automation.
          </p>
          
          <p>
            Với tư duy phân tích sắc bén và kinh nghiệm thực chiến trong mảng Data & Automation, tôi tập trung vào việc biến dữ liệu thô thành thông tin chi tiết (actionable insights) để tối ưu hóa quyết định kinh doanh.
          </p>

            <p>
              My focus is improving productivity through
              data-driven decision making.
            </p>
          <p>
            Chuyên môn của tôi bao gồm việc xây dựng các đường ống dữ liệu (Data Pipelines) tự động và ứng dụng RPA vào sản xuất, giúp doanh nghiệp tiết kiệm hàng ngàn giờ làm việc thủ công.
          </p>
        </div>

        {/* Cột phải: Lưới Kỹ năng */}
        <div className="skills-container">
          <h3>Core Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <svg className="skill-icon">
                  {/* Cú pháp gọi SVG từ file sprite */}
                  <use href={`/icons.svg#${skill.iconId}`} />
                </svg>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;