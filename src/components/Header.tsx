export default function Header(props) {

    function clickPort() {
        props.toggle(true);
    }

    function clickAbout() {
        props.toggle(false);
    }
 
    return (
        <nav className="navbar"> 
            <button className="link">Maxx Yang</button>
            <button className="link" onClick={clickPort}><b>Portfolio</b></button>
            <button className="link" onClick={clickAbout}><b>About Me</b></button>
        </nav>
    )
}