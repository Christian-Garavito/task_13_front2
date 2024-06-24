import styles from './NavButton.module.css';
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";




function NavButton({icon, href}) {
  
  return (
    <Link className={styles['nav-link']} to={href}>
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
}

export default NavButton;


