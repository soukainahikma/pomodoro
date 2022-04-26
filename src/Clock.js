import classes from './Clock.module.css'

function Clock(props) {
    let minutes = Math.floor(props.seconds / 60)
    let seconds = Math.floor(props.seconds % 60)
    if(props.seconds === 0)
    {
        if(props.checker === true)
            props.setChecker(false);
        else
        props.setChecker(true);
    }
    return (<div className={classes.Clock}>
        <div>{props.checker?"Session" :"Break"}</div>
        <div className={props.seconds >= 60 ? classes.timerPrimary: classes.timerDanger}>
            {minutes < 10 ? "0" + minutes : minutes} : {seconds < 10 ? "0" + seconds : seconds}
                                                                                                                                                             </div>
    </div>)
}

export default Clock