import './index.scss'
import Loader from 'react-loaders'

const Portfolio = () => {
    return (
        <>
        <div className="container portfolio-page">
            <div className='text-zone'>
                <h1>My Works</h1>
            </div>
            <div className='card-container'>

                <div className="card card1">
                    <div className="overlay">
                        <div className = "spacing head">
                            <p>Codewire</p>
                            <br></br>
                        </div>
                        <div className = "spacing description-container">
                            <p className="description">Codewire is a Code Repository in the form of a community blog. This app allows users to post, comment on and rate reusable snippets of code.</p>
                        </div>
                        <div className="spacing deploy">
                            <a href="https://codewireapp.herokuapp.com/" target="_blank" rel="noreferrer"className="card-link">Deployed App Link</a>
                            <a href="https://github.com/mattparker124/codewire" target="_blank" rel="noreferrer" className="card-link">GitHub Repo Link</a>
                        </div>
                    </div>
                </div>

                <div className="card card2">
                    <div className="overlay">
                        <div className = "spacing head">
                            <p>Run-Buddy</p>
                            <br></br>
                        </div>
                        <div className = "spacing description-container">
                            <p className="description">Run-Buddy is a prop website designed to showcase my early CSS and HTML skills.</p>
                        </div>
                        <div className="spacing deploy">
                            <a href="https://davonhb.github.io/run-buddy/" target="_blank" rel="noreferrer" className="card-link">Deployed App Link</a>
                            <a href="https://github.com/DavonHB/run-buddy" target="_blank" rel="noreferrer" className="card-link">GitHub Repo Link</a>
                        </div>
                    </div>
                </div>

                <div className="card card3">
                    <div className="overlay">
                        <div className = "spacing head">
                            <p>Weather App</p>
                            <br></br>
                        </div>
                        <div className = "spacing description-container">
                            <p className="description">This is a simple Weather App built from scratch designed to display the weather for today and the whole week.</p>
                        </div>
                        <div className="spacing deploy">
                            <a href="https://davonhb.github.io/WeatherApp/" target="_blank" rel="noreferrer" className="card-link">Deployed App Link</a>
                            <a href="https://github.com/DavonHB/WeatherApp" target="_blank" rel="noreferrer" className="card-link">GitHub Repo Link</a>
                        </div>
                    </div>
                </div>

                <div className="card card4">
                    <div className="overlay">
                        <div className = "spacing head">
                            <p>Choose Your Mood</p>
                            <br></br>
                        </div>
                        <div className = "spacing description-container">
                            <p className="description">Choose Your Mood is a collaborative project designed to showcase knowledge of an extensive API. This app deploys a set of songs depending on which mood you choose.</p>
                        </div>
                        <div className="spacing deploy">
                            <a href="https://codewireapp.herokuapp.com/" target="_blank" rel="noreferrer" className="card-link">Deployed App Link</a>
                            <a href="https://github.com/JackJohnsonGH/project_vb_01" target="_blank" rel="noreferrer" className="card-link">GitHub Repo Link</a>
                        </div>
                    </div>
                </div>

                <div className="card card5">
                    <div className="overlay">
                        <div className = "spacing head">
                            <p>Budget-Tracker</p>
                            <br></br>
                        </div>
                        <div className = "spacing description-container">
                            <p className="description">Budget Tracker uses Progressive Web Application (PWA) to enable users to add expenses and deposits to their budget with or without an online connection. Transactions are able to be entered offline and the data populates the total when back online.</p>
                        </div>
                        <div className="spacing deploy">
                            <a href="https://davonhb.github.io/Budget-Tracker/" target="_blank" rel="noreferrer" className="card-link">Deployed App Link</a>
                            <a href="https://github.com/DavonHB/Budget-Tracker" target="_blank" rel="noreferrer" className="card-link">GitHub Repo Link</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Portfolio;