import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import classes from "./BreakLength.module.css"

function BreakLength(props) {
    const [Break, setBreak] = useState(5)
    function increment() {
        // props.secondSetter(seconds => seconds + 60)
        setBreak(seconds => seconds + 1)
    }
    function decrement() {
        // props.secondSetter(seconds => seconds - 60)
        setBreak(seconds => seconds - 1)
    }
    return (<div className={classes.breakLength}>
        <div>Break Length</div>
        <div className={classes.breakInfo}>
            <button onClick={increment}><FontAwesomeIcon icon={faArrowUp} /></button>
            {Break}
            <button onClick={decrement}><FontAwesomeIcon icon={faArrowDown} /></button>
        </div>
    </div>)

}
export default BreakLength