
import './App.css';
import SquareComponent from './component/SquareComponent';
import React ,{useState,useEffect} from 'react';

const intialState = ["","","","","","","","","",]
 let win = "my name is govind"
let winner1 ;
function App() {
  const [gameState,setGameState] = useState(intialState)
  const [xChance,setXChance] = useState(false)
 const [ winState , setWinState] = useState("match started")
  // onSquare func

const onSqureclick = (index)=>{
  let strings = Array.from(gameState)
  strings[index] = xChance ? "O":"X"
  setGameState(strings)
setXChance(!xChance)

}


useEffect(()=>{
  const winner = checkWinner();
  if(winner){
    if(winner){
     
      // alert(`Tada ! ${winner} has won this tic toe game`)
       winner1 = `Tada ! ${winner} has won this tic toe game`
       console.log(winner1)
      // setGameState(intialState)

      setWinState(`Tada ! ${winner} has won this tic toe game`)
    }
  }
},[gameState])

const checkWinner = ()=>{
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
   
  ]
  // console.log(lines)
  for(let i = 0; i<lines.length ;i++){
    // console.log(i)
   
    const [a,b,c]= lines[i];
    if(gameState[a]&&gameState[a]=== gameState[b]&&gameState[a]===gameState[c]){
      return gameState[a]
    } 
  

  }
  
 
}


  return (
    <div className="app-header">
 <p className="headingText">React Tic Tac Toe Game </p>

  <div className ="row jcCenter" >
   <SquareComponent className="bBotomRight " state = {gameState[0]} onClick = {()=> onSqureclick(0)} />
   <SquareComponent state = {gameState[1]} onClick = {()=> onSqureclick(1)}  />
   <SquareComponent state = {gameState[2]}onClick = {()=> onSqureclick(2)} />
    
    </div>

  <div className ="row jcCenter">
  <SquareComponent state = {gameState[3]} onClick = {()=> onSqureclick(3)}/>
   <SquareComponent state = {gameState[4]} onClick = {()=> onSqureclick(4)}/>
   <SquareComponent state = {gameState[5]} onClick = {()=> onSqureclick(5)}/>
    </div>

  <div className ="row jcCenter">
  <SquareComponent state = {gameState[6]} onClick = {()=> onSqureclick(6)}/>
   <SquareComponent state = {gameState[7]}  onClick = {()=> onSqureclick(7)}/>
   <SquareComponent state = {gameState[8]} onClick = {()=> onSqureclick(8)}/>
    
    </div>
  

  <button className='clear' onClick={()=>setGameState(intialState) } >Clear game</button>

<p >  {winState} </p>
    </div>
  );
}

export default App;
