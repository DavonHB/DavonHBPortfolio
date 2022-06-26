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
                            <a href="https://codewireapp.herokuapp.com/" target="_blank" className="link">Deployed App Link</a>
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
                            <p className="description"></p>
                        </div>
                        <div className="spacing deploy">
                            <a href="https://codewireapp.herokuapp.com/" target="_blank" className="link">Deployed App Link</a>
                        </div>
                    </div>
                </div>

                <div className="card card3">
                    <div className="overlay">
                        <div className = "spacing head">
                            <p>Codewire</p>
                            <br></br>
                        </div>
                        <div className = "spacing description-container">
                            <p className="description">Codewire is a Code Repository in the form of a community blog. This app allows users to post, comment on and rate reusable snippets of code.</p>
                        </div>
                        <div className="spacing deploy">
                            <a href="https://codewireapp.herokuapp.com/" target="_blank" className="link">Deployed App Link</a>
                        </div>
                    </div>
                </div>

                <div className="card card4">
                    <div className="overlay">
                        <div className = "spacing head">
                            <p>Codewire</p>
                            <br></br>
                        </div>
                        <div className = "spacing description-container">
                            <p className="description">Codewire is a Code Repository in the form of a community blog. This app allows users to post, comment on and rate reusable snippets of code.</p>
                        </div>
                        <div className="spacing deploy">
                            <a href="https://codewireapp.herokuapp.com/" target="_blank" className="link">Deployed App Link</a>
                        </div>
                    </div>
                </div>

                <div className="card card5">
                    <div className="overlay">
                        <div className = "spacing head">
                            <p>Codewire</p>
                            <br></br>
                        </div>
                        <div className = "spacing description-container">
                            <p className="description">Codewire is a Code Repository in the form of a community blog. This app allows users to post, comment on and rate reusable snippets of code.</p>
                        </div>
                        <div className="spacing deploy">
                            <a href="https://codewireapp.herokuapp.com/" target="_blank" className="link">Deployed App Link</a>
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