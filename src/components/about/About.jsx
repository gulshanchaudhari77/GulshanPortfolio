import React from 'react';
import './About.css';
import Image from '../../assets/WhatsApp Image 2024-08-29 at 6.13.50 PM.jpeg';
import Resume from '../../assets/gulshanI.jpg';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        Hello, I'm Gulshan Kumar, MERN Stack Developer include learning front-end languages HTML, CSS, and JavaScript, mastering front-end tools like Visual Studio Code and Git, understanding the basics of website design, and learning how to use React. The back-end components of the MERN stack, Node. js, Express.

                        </p>
                        <ul className="about__list">
                            <li>JavaScript (ES6+)</li>
                            <li>Tailwind-Css</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Mongo-DB</li>
                            <li>Expess</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About