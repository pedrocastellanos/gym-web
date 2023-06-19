export default function Menu() {
    return (
        <div className="menu">
            <div className="container flex">
                {/* <!-- Mobile Button --> */}
                <div className="mobile-btn" onClick={() => document.querySelector(".menu").classList.toggle("active")}>
                    <ion-icon name="grid"></ion-icon>
                </div>
                <div className="logo">
                    <img src="./logo.png" alt="" />
                </div>
                <ul className="nav">
                    <li className="nav-item"><a href="#">Home</a></li>
                    <li className="nav-item"><a href="#why-us">Features</a></li>
                    <li className="nav-item"><a href="#explore">Explore</a></li>
                    <li className="nav-item"><a href="#discount">Register</a></li>
                </ul>
                <a href="#" className="btn">Register</a>
            </div>
        </div>
    )
}
