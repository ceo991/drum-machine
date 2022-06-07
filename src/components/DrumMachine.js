import React, { Component } from 'react';

class DrumMachine extends Component{
    constructor(props){
      super(props)
      this.state = {
        key: ""
      }
      this.handleKeyDown=this.handleKeyDown.bind(this)
      this.handleClick=this.handleClick.bind(this)
      document.addEventListener('keydown', this.handleKeyDown);
    }
    
    handleKeyDown(e){
      if(e.keyCode === 81){
        this.setState({key:"Heater 1"})
        document.getElementById("Q").play()
  
      } else if(e.keyCode === 87){
        this.setState({key:"Heater 2"})
        document.getElementById("W").play()
      
      } else if(e.keyCode === 69){
        this.setState({key:"Heater 3"})
        document.getElementById("E").play()
     
      } else if(e.keyCode === 65){
        this.setState({key:"Heater 4"})
        document.getElementById("A").play()
       
      } else if(e.keyCode === 83){
        this.setState({key:"Clap"})
        document.getElementById("S").play()
     
      } else if(e.keyCode === 68){
        this.setState({key:"Open HH"})
        document.getElementById("D").play()
       
      } else if(e.keyCode === 90){
        this.setState({key:"Kick-N-Hat"})
        document.getElementById("Z").play()
        
      } else if(e.keyCode === 88){
        this.setState({key:"Kick"})
        document.getElementById("X").play()
        
      } else if(e.keyCode === 67){
        this.setState({key:"Closed HH"})
        document.getElementById("C").play()
        
      }
    }
    
    handleClick(kCode,audioId){
      this.setState({key:kCode})  
      document.getElementById(audioId).currentTime = 0
      document.getElementById(audioId).play()
    }
    
    render(){
      return (
        <div id="container" >      
          <div id ="drum-machine">
          
            <div className ="drum-pad" id="Heater-1" onClick={()=>this.handleClick("Heater-1","Q")}>
              <p>Q</p>
              <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"/>
            </div>
             
            <div className ="drum-pad" id="Heater-2" onClick={()=>this.handleClick("Heater-2","W")}>
             <p>W</p>
              <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"/>
            </div>
             
            <div className ="drum-pad" id="Heater-3"  onClick={()=>this.handleClick("Heater-3","E")}>
              <p>E</p>
              <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"/>
            </div>
             
            <div className ="drum-pad" id="Heater-4" onClick={()=>this.handleClick("Heater-4","A")}>
              <p>A</p>
              <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"/>
            </div>
             
            <div className ="drum-pad" id="Clap" onClick={()=>this.handleClick("Clap","S")}>
              <p>S</p>
              <audio className="clip" id="S"  src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"/>
            </div>
                       
             <div className ="drum-pad" id="Open-HH" onClick={()=>this.handleClick("Open-HH","D")}>
              <p>D</p>
              <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"/>
            </div>
             
            <div className ="drum-pad" id="Kick-N-Hat" onClick={()=>this.handleClick("Kick-N-Hat","Z")}>
              <p>Z</p>
              <audio className="clip"  id="Z"  src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"/>
            </div>
             
            <div className ="drum-pad" id="Kick" onClick={()=>this.handleClick("Kick","X")}>
              <p>X</p>
              <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"/>
            </div>
             
            <div className ="drum-pad" id="Closed-HH" onClick={()=>this.handleClick("Closed-HH","C")}>
              <p>C</p>
              <audio className="clip"  id="C"  src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"/>
           </div>
            
            <div id="display">{this.state.key}</div>
          </div> 
         
       </div>
      )
    }
  }

export default DrumMachine;