export default function Trainer({imgSrc, name,cssclassName}) {
    return (
        <div className="trainer">
            <img src={imgSrc} alt={name + " Image"} />
            <h3 className="scondary mb">{name}</h3>
            <p className="tertiary mb">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
            </p>
            <a href="#" className="btn-2">
                <ion-icon name="arrow-redo-circle-outline"></ion-icon>
            </a>
        </div>
    )
}
