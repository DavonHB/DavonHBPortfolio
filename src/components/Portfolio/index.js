import './index.scss'
import Loader from 'react-loaders'
import { data } from '../../data'
import Sidebar from '../../components/Sidebar'


const Portfolio = () => {
    return (
        <>
            <Sidebar />
            <div className='spacing'>
                <div className="card-grid">
                    {data.map((project, i) => {
                        return (
                            <div className="card" key={i}>
                                <div className="card-header">
                                    <img src='' />
                                </div>
            
                                <div className="card-body">
                                    <h2>{project.title}</h2>
                                    <p>{project.description}</p>
                                </div>
                                <div className="card-footer">
                                    <button className='btn'><a href={project.gitLink} target='_blank'>Code</a></button>
                                    <button className='btn btn-secondary'><a href={project.appLink} target='_blank'>Demo</a></button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
                </>
            )
}

export default Portfolio;