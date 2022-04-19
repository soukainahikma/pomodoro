import { faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classes from "./SessionLength.module.css"

function SessionLength(props) {
    return (<div className={classes.sessionLength}>
        <div>Session Length</div>
        <div className={classes.sessionInfo}>
        <FontAwesomeIcon icon={faArrowUp} />
            <div>25</div>
        <FontAwesomeIcon icon={faArrowDown} />
        </div>
    </div>)

}
export default SessionLength