import React from 'react';
import './css/Resume.css';

const Resume = () => (
  <section className="resume-section">
    <div className="container">
      <h2 className="resume-title">A summary of My Resume</h2>

      {/* Education and Experience Section */}
      <div className="row">
        <div className="col-md-6">
          <h3 className="section-subtitle">My Education</h3>
          <div className="resume-item">
            <h4>BSc Computing </h4>
            <p className="institution">University of Abertay Dundee/ 2018 - 2021</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="resume-item">
            <h4>HND Software Development</h4>
            <p className="institution">Dundee & Angus College / 2016 - 2018</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>

        <div className="col-md-6">
          <h3 className="section-subtitle">My Experience</h3>
          <div className="resume-item">
            <h4>Associate Java Developer</h4>
            <p className="institution">FDM Consultancy / 2022 - 2023</p>
            <p>Lisque persius interesset his et, in quot quidam persequeris vim.</p>
          </div>
          <div className="resume-item">
            <h4>Java Developer</h4>
            <p className="institution">Sky(Through FDM) / 2022 - 2023</p>
            <p>Lisque persius interesset his et, in quot quidam persequeris vim.</p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section mt-5">
        <h3 className="section-subtitle">My Skills</h3>
        <div className="row">
        <div className="col-md-6">
            <div className="skill-item">
              <span>HTML/CSS</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span>Bootstrap</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span>Java</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
          <div className="col-md-6">

            <div className="skill-item">
              <span>Angular JS</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span>React</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span>PHP</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download Resume Section */}
      <div className="text-center mt-5">
        <a href="../resume/Resume.pdf" download className="download-link">
          <button className="btn btn-primary download-btn">Download CV</button>
        </a>
      </div>
    </div>
  </section>
);

export default Resume;
