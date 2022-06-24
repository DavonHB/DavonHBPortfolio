import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import Picture from '../Picture';
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['D', 'a', 'v', 'o', 'n']
    const jobArray = ['S', 't', 'u', 'd', 'e', 'n', 't', '.']

    // useEffect(() => {
    //     return setTimeout(() => {
    //       setLetterClass('text-animate-hover')
    //     }, 4000)
    //   }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>  
                <br />
                <div className='name-container'>
                    <div className='im'>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                    </div>
                    <div>
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray}
                index={15}/> 
                    </div>
                </div>
                <AnimatedLetters letterClass={letterClass} 
                strArray={jobArray}
                index={25}/>
                </h1>
                <h2>Junior Developer / JavaScript Student </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Picture />
        </div>
    )
}

export default Home;