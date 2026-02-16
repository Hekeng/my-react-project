
import sun from '../../assets/img/icons/sun.svg'
import moon from '../../assets/img/icons/moon.svg'


const DarkModeBtn  = () => {
    return ( 
        <button className="dark-mode-btn dark-mode-btn--active"> 
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon "/>
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon "/>
        </button>
     )
}
 
export default DarkModeBtn;