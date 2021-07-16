import React , {useState} from "react"
import Icon from "./Components/Icons"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import "./styles.css"

const tictactoeArray= new Array(8).fill("")
function App() {
const [isCross,setIsCross] =useState(true)
const [winMessage,setWinMessage]=useState("")

function playAgain(){
  tictactoeArray.fill("");
  setIsCross(true);
  setWinMessage("");
}

function findWinner(){
  if(tictactoeArray[0]===tictactoeArray[1]&&tictactoeArray[0]===tictactoeArray[2] && tictactoeArray[0]){
      setWinMessage("you win the game");
  }
  if(tictactoeArray[3]===tictactoeArray[4]&&tictactoeArray[3]===tictactoeArray[5] && tictactoeArray[3]){
    setWinMessage("you win the game");
  }
  if(tictactoeArray[0]===tictactoeArray[1]&&tictactoeArray[0]===tictactoeArray[2] && tictactoeArray[0]){
    setWinMessage("you win the game");
 }
 if(tictactoeArray[6]===tictactoeArray[7]&&tictactoeArray[6]===tictactoeArray[8] && tictactoeArray[6]){
  setWinMessage("you win the game");
 }
 if(tictactoeArray[0]===tictactoeArray[3]&&tictactoeArray[0]===tictactoeArray[6] && tictactoeArray[0]){
  setWinMessage("you win the game");
 }
 if(tictactoeArray[1]===tictactoeArray[4]&&tictactoeArray[1]===tictactoeArray[7] && tictactoeArray[1]){
  setWinMessage("you win the game");
 }
 if(tictactoeArray[2]===tictactoeArray[5]&&tictactoeArray[2]===tictactoeArray[8] && tictactoeArray[2]){
  setWinMessage("you win the game");
 }
 if(tictactoeArray[6]===tictactoeArray[7]&&tictactoeArray[6]===tictactoeArray[8] && tictactoeArray[6]){
  setWinMessage("you win the game");
 }
 if(tictactoeArray[0]===tictactoeArray[4]&&tictactoeArray[0]===tictactoeArray[8] && tictactoeArray[0]){
  setWinMessage("you win the game");
 }
 if(tictactoeArray[2]===tictactoeArray[4]&&tictactoeArray[2]===tictactoeArray[6] && tictactoeArray[2]){
  setWinMessage("you win the game");
 }

}
  return (
  <div>
<Icon choice="cross"/>
</div>
  )
}

export default App;
