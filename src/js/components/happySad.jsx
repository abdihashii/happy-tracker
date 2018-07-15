import React from "react";
//import "../../sass/happySad.css";

import happy from "../../happyface.svg";
import sad from "../../sadface.png";

export default class happySad extends React.Component {
    constructor(props) {
        super(props)
        this.state={lastHappy:[],
                    lastSad: [],
                    message: "",
                    message2: "How are you feeling today?",
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
        if (lastHappy.length > 1) {
            let message = "You were last happy at " + lastHappy[lastHappy.length-2] + "!"
            this.setState({message})
        }
        this.setState({message2:"I'm happy you are happy!!"})
        this.setState({lastHappy})


    }

    onSadClick(){
        let lastSad = this.state.lastSad
        lastSad[lastSad.length] = this.state.curTime
        if (lastSad.length > 1) {
            let message = "You were last happy at " + lastSad[lastSad.length-2] + "!"
            this.setState({message})
        }
        this.setState({message2:"I'm sad you are sad!!"})
        this.setState({lastSad})
    }


    render() {
        return (
            <div>
                <h1> {this.state.curTime} </h1>
                <img src={happy} onClick={_ => this.onHappyClick()} style={{height:"200px" }}/>
                <img src={sad}  onClick={ _ => this.onSadClick()} style={{height:"200px"}}/>
                <h1> {this.state.message2}</h1>
                {(this.state.message !== "")? <h2> {this.state.message}</h2> : <p> </p> }
            </div>
        )

    }
}

