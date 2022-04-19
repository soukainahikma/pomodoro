import classes from './Clock.module.css'
function Clock(props) {
    return (<div className={classes.Clock}>
        <div>Session</div>
        <div>
            {props.minutes < 10 ? "0" + props.minutes : props.minutes} : {props.seconds < 10 ? "0" + props.seconds : props.seconds}
                                                                                                                                                             </div>
    </div>)
}

export default Clock