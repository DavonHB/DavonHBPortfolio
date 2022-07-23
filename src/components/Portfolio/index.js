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
                            <div class="card">
                                <div className='title-container'>
                                        <h3 className="title">{project.title}</h3>
                                        <div className='circle'>
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <circle className="stroke" cx="180" cy="30" r="20"/>
                                            </svg>
                                        </div>
                                </div>
                                <div className='overlay'>
                                    <div className="description-container">
                                        <p className="description">{project.description}</p>
                                    </div>

                                    <div className="deploy">
                                        <a href={project.appLink} target="_blank" rel="noreferrer" className="card-link">DEMO</a>
                                        <a href={project.gitLink} target="_blank" rel="noreferrer" className="card-link">CODE</a>
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