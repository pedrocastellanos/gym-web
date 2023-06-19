import Trainer from "./Trainer";

export default function TrainerSection() {
    return (
        <div className="section" id="trainer">
            <h2 className="primary mb">Our Professional Trainers</h2>
            <div className="container flex">
                <Trainer imgSrc="./trainer1.jpg" name="Alan Smith" />
                <Trainer imgSrc="./trainer2.jpg" name="Ryan Roe" />
                <Trainer imgSrc="./trainer3.jpg" name="Ashely Cole" />
            </div>
        </div>
    )
}
