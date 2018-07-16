import React from "react";
import "./advice.css";

export default class advice extends React.Component {

    randomizer () {
        let quotes = [
          '“Courage doesn\'t always roar. Sometimes courage is a quiet voice at the end of the day saying, \'I will try again tomorrow.\'" -Mary Anne Radmacher',
          '“Don’t cry because it’s over, smile because it happened.” – Dr. Seuss',
          '“There is some good in this world, and it’s worth fighting for.” – J.R.R. Tolkien',
          'Take one deep breath - Just one deep breath can turn down your “fight-or-flight” instinct and activate your “rest-and-restore” mode. Got 15 seconds more? Take another deep breath. You’ll feel even more content.',
          '“Even the darkest night will end and the sun will rise.” – Victor Hugo',
          '“You can’t be happy unless you’re unhappy sometimes.” – Lauren Oliver',
          ''
        ];
        return quotes[ Math.floor(Math.random() * quotes.length)];
    }

    render() {
        return (
            <div className="advice-link">
              <h1> {this.randomizer()} </h1>
            </div>
        )

    }
}
