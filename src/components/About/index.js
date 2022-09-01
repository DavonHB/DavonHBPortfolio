import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faGithub,
    faHtml5, 
    faCss3, 
    faReact, 
    faJsSquare,
    faGitAlt } from '@fortawesome/free-brands-svg-icons'


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
        <>
        <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        index={15}/>
                    </h1>
                    <p>I'm an ambitious junior developer looking for an
                        internship with the opportunity to work with the latest 
                        technologies on challenging and diverse projects to further
                        expand my skills and knowledge.
                    </p>
                    <p>I am confident in my ability to learn, naturally curious enough
                        to broaden my scope, and consistently working on improving my
                        skills one problem at a time.
                    </p>
                    <p>If I had to define myself in one sentence it would be: I like to be constantly learning and solving problems. 
                    </p>
                    <a href="./Davon_Brown_Resume.pdf" target="_blank" rel="noreferrer" className="link">Click Here to Access my Resume</a>

                    <div class="image-container">
                        <img src="./images/vanderbilt_coding_certificate.jpg" alt="certificate"></img>
                    </div>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faGithub} color='#333'/>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                        </div>
                    </div>
                </div>
        </div>
        <Loader type="pacman" />
        </>
    )
};

export default About;