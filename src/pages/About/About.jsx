import React from 'react'
import Service from './Service.jsx'

const servicesData = [
    {
      "title": "Software Development",
      "icon": "/images/icon-design.svg",
      "description": "Developing robust applications using Java for enhanced user engagement."
    },
    {
      "title": "Web development",
      "icon": "/images/icon-dev.svg",
      "description": "High-quality development of sites at the professional level."
    },
    {
      "title": "Database Management",
      "icon": "/images/icon-app.svg",
      "description": "Managing data with MongoDB and SQL for optimal performance."
    },
    {
      "title": "Graphic Designing",
      "icon": "/images/icon-photo.svg",
      "description": "Designing engaging interfaces that effectively communicate ideas."
    }
  ]

const About = () => {
  return (
    <div className='about active'>
      <header>
        <h2 className='h2 article-title'>About Me</h2>
      </header>
      <section className='about-text'>
        <p>I'm a Computer Science Engineering graduate with a strong foundation in Python and Frontend Web Dvelopment, along with hands-on experience in IT support and system operations. I’ve worked on developing scalable web solutions, optimizing backend performance, and ensuring seamless system functionality in real-world environments.
</p>
        <p>I've participated in nationally recognized hackathons like the Smart India Hackathon (SIH) and NASA Space Apps Challenge, where I collaborated with diverse, goal-driven teams to design and implement innovative software systems under real-world constraints. These experiences have strengthened my ability to contribute effectively in high-pressure, team-based development settings.
</p><p>My learning curve has been shaped by AICTE virtual internships, where I deepened my understanding of backend architecture, API integration, and cloud deployment. With added interests in cybersecurity and robotics, I continually strive to stay updated with emerging technologies.
</p><p>
I’m highly motivated, team-oriented, and committed to building impactful, production-ready applications that solve real user problems.
</p>
      </section>

      <section className='service'>
        <h2 className='h3 service-title'>What I'm Doing</h2>
        <ul className='service-list'>
            {
                servicesData.map((service, index) => (
                    <Service key={index} title={service.title} icon={service.icon} description={service.description}/>
                ))
            }
        </ul>
      </section>
    </div>
  )
}

export default About
