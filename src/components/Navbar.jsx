import img from "../images/react-icon-small.png"

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <img src={img} alt="react-logo" />
                <p>ReactFacts</p>
            </div>
            <div className="title">
                <p>React Course - Project 1</p>
            </div>
        </nav>
    )
}