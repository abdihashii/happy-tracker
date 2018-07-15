import React from "react";
import "./advice.css";

export default class advice extends React.Component {

    randomizer () {
        let quotes = ['First quote', 'Second quote', 'third quote'];
        return quotes[ Math.floor(Math.random() * 3)];
    }

    render() {
        return (
            <div className="advice-link">
              <h1> {this.randomizer()} </h1>
            </div>
        )

    }
}

