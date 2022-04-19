import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import classes from "./SessionLength.module.css"

function SessionLength(props) {
    const [session, setSession] = useState(25)
    function increment() {
        props.secondSetter(seconds => seconds + 60)
        setSession(seconds => seconds + 1)
    }
    function decrement() {
        props.secondSetter(seconds => seconds - 60)
        setSession(seconds => seconds - 1)
    }
    return (<div className={classes.sessionLength}>
        <div>Session Length</div>
        <div className={classes.sessionInfo}>
            <button onClick={increment}><FontAwesomeIcon icon={faArrowUp} /></button>
            <div>{session}</div>
            <button onClick={decrement}><FontAwesomeIcon icon={faArrowDown} /></button>
        </div>
    </div>)

}
export default SessionLength