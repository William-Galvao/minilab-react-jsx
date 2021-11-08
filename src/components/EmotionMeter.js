function EmotionMeter() {
    let emotion = "HAPPY";
    return (<div> <i className={emotion === "HAPPY" ? "fas fa-smile-beam" : "fas fa-frown"}></i> </div>)
}

export default EmotionMeter;