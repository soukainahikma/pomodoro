import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import classes from "./BreakLength.module.css"

function BreakLength(props) {
    const [Break, setBreak] = useState(5)
    function increment() {
        if(props.checker === false){
        setBreak(seconds => seconds + 1)
        props.secondSetter((Break+1)*60);}
    }
    function decrement() {
        if (Break !== 1 && props.checker === false){
            setBreak(seconds => seconds - 1)
            props.secondSetter((Break-1)*60);
        }
    }
    if(props.seconds === 0)
        props.secondSetter(Break*60);
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