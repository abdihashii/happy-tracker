import React from "react";
import ReactDOM from "react-dom";
import "./happySad.css";

import happy from "../../Assets/smile.svg";
import meh from "../../Assets/meh.svg";
import sad from "../../Assets/sad.svg";

import Advice from "./advice.jsx"

export default class happySad extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          lastHappy: [],
          lastSad: [],
          message: "",
          // message2: "How are you feeling today?",
          curTime: "",
        }

        this.onHappyClick=this.onHappyClick.bind(this);
        this.onSadClick = this.onSadClick.bind(this);
    }

    componentDidMount() {
        setInterval( () => {
            this.setState({
                curTime : new Date().toLocaleString()
            })
        },1000)
    }

    onHappyClick(){
        let lastHappy = this.state.lastHappy
        lastHappy[lastHappy.length] = this.state.curTime

        // if (lastHappy.length > 1) {
        //     let message = "You were last happy at " + lastHappy[lastHappy.length-2] + "!"
        //     this.setState({message})
        // }

        this.setState({message2:"Here's something to keep you going!"})

        if (document.getElementById("advice-mount") !== null) {
            document.getElementById("advice-mount").remove();
        }

        // this.setState({lastHappy})
    }

    onSadClick(){
        let lastSad = this.state.lastSad
        lastSad[lastSad.length] = this.state.curTime

        // if (lastSad.length > 1) {
        //     let message = "You were last happy at " + lastSad[lastSad.length-2] + "!"
        //     this.setState({message})
        // }

        this.setState({message2:"That's okay! Maybe we can help :)"})
        // this.setState({lastSad})

        if (document.getElementById("advice-mount") !== null) {
            document.getElementById("advice-mount").remove();
        }

        const node = <Advice/>;
        const newDiv = document.createElement("div");
        document.body.append(newDiv);
        newDiv.id = "advice-mount";
        ReactDOM.render(node, document.getElementById("advice-mount"));

    }


    render() {
        return (
            <div className="Emotions">
                <img src={happy} onClick={_ => this.onHappyClick()} />
                <img src={sad}  onClick={ _ => this.onSadClick()} />
                <h1> {this.state.message2}</h1>
                {(this.state.message !== "") ? <h2> {this.state.message} </h2>
                : <p> </p> }
                
            </div>
        )

    }
}
