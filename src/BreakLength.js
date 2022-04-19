import { faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classes from "./BreakLength.module.css"

function BreakLength(props) {
    return (<div className={classes.breakLength}>
        <div>Break Length</div>
        <div className={classes.breakInfo}>
        <FontAwesomeIcon icon={faArrowUp} />
            5
        <FontAwesomeIcon icon={faArrowDown} />
        </div>
    </div>)

}
export default BreakLength