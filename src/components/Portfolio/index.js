import './index.scss'
import Loader from 'react-loaders'
import { data } from '../../data'


const Portfolio = () => {
    return (
        <div className="container portfolio-page">
            <div className='text-zone'>
                <h1>My Works</h1>
            </div>
            <div className='card-container'>
                {data.map((project, i) => {
                    return (
                        <div className="card" key={i}>
                            <div className="overlay" >
                                <div className = "spacing head">
                                    <p>{project.title}</p>
                                    <br></br>
                                </div>
                                <div className = "spacing description-container">
                                    <p className="description">{project.description}</p>
                                </div>
                                <div className="spacing deploy">
                                    <a href={project.appLink} target="_blank" rel="noreferrer" className="card-link">Deployed App Link</a>
                                    <a href={project.gitLink} target="_blank" rel="noreferrer" className="card-link">GitHub Repo Link</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Portfolio;