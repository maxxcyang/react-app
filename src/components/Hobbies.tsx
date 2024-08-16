export default function Hobbies() {
    return (
        <div>
            <h1>Hobbies</h1>
            <h3>Basketball</h3>
            <p>I love basketball, been playing since I was little and played in high school. Whenever I need to let my competitive spirit out, I know I can go play pickup and satisfy that urge.</p>
            <center>
                <video width="300" autoPlay={true} loop muted>
                    <source src="img/basketball.MOV" type="video/mp4"/>
                </video>
                <h6>My only highlight..</h6>
            </center>
            <h3>Gym</h3>
            <p>Since I stopped playing organized basketball, I've been staying healthy by going to the gym. I am a big gym advocate because it promotes health mindfulness, and committing an hour a day to work on yourself is one of the most important steps to self-improvement.</p>
            <center>
                <video width="400" autoPlay={true} loop muted>
                    <source src="img/gym.mov" type="video/mp4"/>
                </video>
                <h6>(A lot of self improvement here)</h6>
            </center>
            <h3>Cooking</h3>
            <p>I've become more mindful of my health so I started cooking for myself. My focus is on high-protein recipes that are still flavorful and satisfying (cottage cheese is the best thing in the world).</p>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <img src="img/food1.jpg" style={{width: '20%', height: 'auto'}}/>
                <img src="img/food2.jpg" style={{width: '20%', height: 'auto'}}/>
                <img src="img/food3.jpg" style={{width: '20%', height: 'auto'}}/>
            </div>
            <center><h6>My favorite dishes so far.</h6></center>
        </div>
    )
}