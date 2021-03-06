import React, {useEffect, useRef} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Home.scss'
import flower from '../Assets/flower.svg'
import another from '../Assets/another.svg'
import arrow from '../Assets/arrow.svg'
import { Link } from 'react-router-dom';
import { FaReact, FaSass, FaGithub, FaJsSquare, FaFigma} from "react-icons/fa";
import { SiGreensock } from "react-icons/si";
import { IconContext } from 'react-icons/lib';
import gsap from 'gsap';

function Home() {

    let mainText = useRef()
    let leftText = useRef()
    let rightText = useRef()

    const timelineAbout = gsap.timeline();
    
    useEffect(() => {
        timelineAbout.from([leftText, rightText], {
            duration: 1.2,
            y: 1000,
            skewY: 30,
            stagger: {
                amount: .4
            }
        }, "-=.5")
        timelineAbout.from(mainText, {
            duration: 1.5,
            y: 300,
            delay: .1,
            opacity: 0
        }, "-=.5")
    })

    return (
        <div className='home'>
                        <Header />
            <div className='page-content'>
                 <div className="landing">
                    <div className="big-text">
                        <h1 ref={el => mainText = el}>Lucas<br />Vieira</h1>
                    </div>
                        

                     <div class="inner-text">
                        <h4 ref={el => leftText = el}>Graphic<br />Designer</h4>
                        <h4 ref={el => rightText = el}>Frontend<br />Developer</h4>
                    </div> 
                </div> 
                
                <div className="about-me-container ">
                    <div className="about-top">
                        <h1>About Me</h1>
                        <div className="flower-svg"><img src={another} alt="" /></div>
                    </div>
                    <hr />

                    <p>I am a Designer and Front-end Web Developer with a focus on aesthetics and interaction. Taking inspiration from arts, history, music and culture,
                        I take a multidisciplinary approach to bring concept-driven visuals to life.</p>

                    <p>Currently working as a Junior Front End Developer, utilising Next.js, Styled Components and Vercel.</p>
                    
                </div>

                <div className="my-skills-main-reel">
                    <div className="my-skills-reel" id="skill-reel">
                        <div className="reel-item">&nbsp; ??? My skills</div>
                        <div className="reel-item">&nbsp; ??? My skills</div>
                        <div className="reel-item">&nbsp; ??? My skills</div>
                        <div className="reel-item">&nbsp; ??? My skills</div>
                        <div className="reel-item">&nbsp; ??? My skills</div>
                        <div className="reel-item">&nbsp; ??? My skills</div>
                        <div className="reel-item">&nbsp; ??? My skills</div>
                        <div className="reel-item">&nbsp; ??? My skills</div>
                        <div className="reel-item">&nbsp; ??? My skills</div>
                        <div className="reel-item">&nbsp; ??? My skills</div>
                        <div className="reel-item">&nbsp; ??? My skills</div>
                        <div className="reel-item">&nbsp; ??? My skills</div>
                        <div className="reel-item">&nbsp; ??? My skills</div>
                    </div>
                </div>
                    
                    <IconContext.Provider value={{ className: "icon"}}>
                    <div className="card-container">
                        <div className="card">
                            <FaReact />
                            <h2> React.js </h2>
                            A JavaScript library for seamlessly creating interactive UI's.
                        </div>

                        <div className="card">
                            <SiGreensock />
                            <h2> GreenSock</h2>
                            An industry standard JavaScript animation library that produces high-performances animations.
                        </div>

                        <div className="card">
                            <FaFigma />
                            <h2> Figma </h2>
                            A web based collaborative interface design tool with a cloud based design.
                        </div>

                        <div className="card">
                            <FaGithub />
                            <h2> Git </h2>
                            Powerful versatility which allows for easy facilitating of collaboration as well as powerful version control.
                        </div>

                        <div className="card">
                            <FaSass />
                            <h2> Sass </h2>
                            CSS with superpowers: one of the most popular CSS extensions, boasting numerous features and abilities.
                        </div>

                        <div className="card">
                            <FaJsSquare />
                            <h2> JavaScript </h2>
                            A high level programming language that dominates the web.
                        </div>

                    </div>
                    </IconContext.Provider>

                <div className="my-projects-container">
                    <h1>MY WORK</h1>
                    <hr />

                    <div className="projects">

                        <div className="project-card">
                            <div className="project-info">
                                <h3>Paolo<br />Fornasier</h3>
                                <p>The portfolio of Paolo Fornasier, a young Italian musician.</p>
                                <img src={arrow} alt="" id="arrow"></img>
                            </div>
                            <div className="project-img"></div>
                        </div>

                        <div className="project-card flip">
                            <div className="project-img"></div>
                            <div className="project-info">
                                <h3>Paolo<br />Fornasier</h3>
                                <p>The portfolio of Paolo Fornasier, a young Italian musician.</p>
                                <img src={arrow} alt="" id="arrow"></img>
                            </div>
                        </div>

                        <div className="project-card">
                            <div className="project-info">
                                <h3>Paolo<br />Fornasier</h3>
                                <p>The portfolio of Paolo Fornasier, a young Italian musician.</p>
                                <img src={arrow} alt="" id="arrow"></img>
                            </div>
                            <div className="project-img"></div>
                        </div>

                    </div>

                </div>
                    
                <Footer />
        </div>
        </div>

    )
}

export default Home
