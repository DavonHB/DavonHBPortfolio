import './index.scss'
import picture from '../../assets/images/pictureSelf.png'

const Picture = () => {
    return (
        <div className='logo-container'>
            <img className='solid-logo' src={picture} alt="self"/>
        </div>
    )
}

export default Picture;