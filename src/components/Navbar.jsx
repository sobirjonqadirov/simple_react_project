import img from "../images/react-icon-small.png"

export default function Navbar() {
    return (
        <nav>
            <div className="nav--logo">
                <img src={img} alt="react-logo" />
                <p>ReactFacts</p>
            </div>
            <div className="nav--title">
                <h4>React Course - Project 1</h4>
            </div>
        </nav>
    )
}