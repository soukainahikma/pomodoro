import classes from './Clock.module.css'
function Clock(props) {
    let minutes = Math.floor(props.seconds / 60)
    let seconds = Math.floor(props.seconds % 60)
    return (<div className={classes.Clock}>
        <div>Session</div>
        <div className={props.seconds >= 60 ? classes.timerPrimary: classes.timerDanger}>
            {minutes < 10 ? "0" + minutes : minutes} : {seconds < 10 ? "0" + seconds : seconds}
                                                                                                                                                             </div>
    </div>)
}

export default Clock