import {useEffect, useState} from 'react';

export default function MainText() {
    const [text, setText] = useState('');

    useEffect(() => {
        fetch('/aboutme.txt')
        .then(response => response.text())
        .then(data => setText(data));
    }, []);

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
            <center><img src="img/formal.jpg" style={{width: '20%', height: 'auto', borderRadius: '15px', paddingBottom: '10px'}}/></center>
            {text.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </div>
    )
}