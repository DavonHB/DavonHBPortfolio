import React, { useState, useEffect } from 'react';
import './index.scss'
import Loader from 'react-loaders'
import { data } from '../../data'
import Sidebar from '../../components/Sidebar'
import AnimatedLetters from '../AnimatedLetters'


const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const myArray = ['M','y']
    const worksArray = ['P','r','o','j','e','c','t','s']

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
        <>
            <Sidebar />
            <h1 className='portfolio-h1'>
                <span>
                <AnimatedLetters letterClass={letterClass} 
                    strArray={myArray}
                    index={15}/> 
                </span>
                <span>
                <AnimatedLetters letterClass={letterClass} 
                    strArray={worksArray}
                    index={25}/>
                </span>
            </h1>
            <div className='spacing'>
                <div className="card-grid">
                    {data.map((project, i) => {
                        return (
                            <div className="card" key={i}>
                                <div className="card-header">
                                    <img src={project.image} alt={project.alt}/>
                                </div>
            
                                <div className="card-body">
                                    <h2>{project.title}</h2>
                                    <p>{project.description}</p>
                                </div>
                                <div className="card-footer">
                                    <a href={project.gitLink} rel="noreferrer" target='_blank'><button className='btn'>Code</button></a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Loader type="pacman" />
                </>
            )
}

export default Portfolio;