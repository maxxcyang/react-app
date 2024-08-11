export default function MainText() {
    const date = new Date()
    const hours = date.getHours()
    let time = "afternoon"
    if(hours < 12) {
        time = "morning" 
    }
    else if(hours > 18) {
        time = "evening" 
    }
    return (
        <div className="maintext">
            <h1>Good {time}! I'm Maxx.</h1>
            <p>I'm a sophomore at the University of Maryland studying Computer Science and Mathematics.</p>
        </div>
    )
}