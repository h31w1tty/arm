import { FaFacebook, FaInstagram, FaLinkedin, FaYahoo } from "react-icons/fa";
import styles from './Footer.module.css';
function Footer(){
    return(
        <footer> 
            <ul className={styles.social_list}>
                <li> <FaFacebook /> </li>
                <li> <FaInstagram /> </li>
                <li> <FaYahoo /> </li>
                <li> <FaLinkedin /> </li>
            </ul>
            <p> Rodapé Basico.......... </p>
        </footer>
    )
}
export default Footer;