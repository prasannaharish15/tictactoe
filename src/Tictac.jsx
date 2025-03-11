import { useState } from "react"

function Tictac(){
    const [ite, setIte] = useState("‎");
    const [arr,setArr]=useState(["‎","‎","‎","‎","‎",
                                 "‎","‎","‎","‎"]);
    const [item,setItem]=useState("X");  
    
    function click(ind){
       if(arr[ind]==="‎"&&ite==="‎"){
        const newArr=[...arr];
        newArr[ind]=item;
        setArr(newArr);
        checkWinner(newArr,item);
        setItem(item==="X"?"O":"X");
       }

    }
    function checkWinner(val,player){
        if (val[0] === val[1] && val[1] === val[2] && val[0] !== "‎") {
            setIte(`Winner: ${player}`);
        } else if (val[3] === val[4] && val[4] === val[5] && val[3] !== "‎") {
            setIte(`Winner: ${player}`);
        } else if (val[6] === val[7] && val[7] === val[8] && val[6] !== "‎") {
            setIte(`Winner: ${player}`);
        } else if (val[0] === val[3] && val[3] === val[6] && val[0] !== "‎") {
            setIte(`Winner: ${player}`);
        } else if (val[1] === val[4] && val[4] === val[7] && val[1] !== "‎") {
            setIte(`Winner: ${player}`);
        } else if (val[2] === val[5] && val[5] === val[8] && val[2] !== "‎") {
            setIte(`Winner: ${player}`);
        } else if (val[0] === val[4] && val[4] === val[8] && val[0] !== "‎") {
            setIte(`Winner: ${player}`);
        } else if (val[2] === val[4] && val[4] === val[6] && val[2] !== "‎") {
            setIte(`Winner: ${player}`);
        } else if (!val.includes("‎")) {
            setIte("It's a draw!");
        }

    }



    return(
        <>
        <h1>TIC TAC TOE</h1>
        <h1 className="win">{ite}</h1>
        <div className="mydiv">
        <div>
            <button className="0" onClick={()=>click(0)}>{arr[0]}</button>
            <button className="1" onClick={()=>click(1)}>{arr[1]}</button>
            <button className="2" onClick={()=>click(2)}>{arr[2]}</button>
        </div>

        <div>
            <button className="3" onClick={()=>click(3)}>{arr[3]}</button>
            <button className="4" onClick={()=>click(4)}>{arr[4]}</button>
            <button className="5" onClick={()=>click(5)}>{arr[5]}</button>
        </div>

        <div>
            <button className="6" onClick={()=>click(6)}>{arr[6]}</button>
            <button className="7" onClick={()=>click(7)}>{arr[7]}</button>
            <button className="8" onClick={()=>click(8)}>{arr[8]}</button>
        </div>
        </div>
        
        </>
    )

}
export default Tictac