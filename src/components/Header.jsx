export default function Header() {
    return (
        <header className="header">
            <div className="container flex">
                <div className="text">
                    <h1 className="mb">
                        Complete Daily <br />
                        <span>Workout</span> At Home
                    </h1>
                    <p className="mb">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
                        sunt sed tempora neque molestiae corrupti nobis harum ullam eos nam!
                    </p>
                    <a href="#" className="btn mt">Get Started Now</a>
                </div>
                <div className="visual">
                    <img src="./banner-img.png" alt="" />
                </div>
            </div>
        </header>
    )
}
