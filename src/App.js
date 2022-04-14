import React,{useState,useEffect,createContext,useContext} from "react";
import "./style.css";
class Coun extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      counter :10
    };
    const cost = createContext();
  }
  
  increment =()=>{
    this.setState({counter:this.state.counter+1})
  }
  render(){
    return (
      <>
      <h2>Audio and video tags are the two major veertions of react</h2>
      <h3>Create Context, You Must Import createContext and initilize it</h3>
      <button onClick={this.increment}>{this.state.counter}</button>
      <h3>{this.state.counter}
      </h3>
      </>
    );
  }
}
function Hooks(){
  const {provider,consumer} = React.createContext();
  const [num,setNum] = useState(0);
  useEffect(()=>{
    let timer = setTimeout(()=>{
      setNum((num)=>num+1)
    },1000)
    return ()=>clearInterval(timer);
  });
  return (
    <>
    <Coun />
    <h3>The Timer is : {num}</h3>
    </>
  );
}
export default function App() {
  return (
    <div>
      <Hooks />
      <h3>useContext is used to manage the state globally</h3>
      <h1>Make a timer it update every second!</h1>
      <p>Using useState and useEffect Hook to render the timer every second :)</p>
      <h3></h3>
    </div>
  );
}
