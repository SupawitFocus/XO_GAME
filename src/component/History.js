import React, { useState, useEffect } from "react";
import { db } from "../utils/firebase";
import { ref, onValue } from "firebase/database";
import Board from "./BoardHistory";

const History = () => {
    const [dataList, setDataList] = useState();
    useEffect(()=>{
        const getData = ref(db, "history/")
        onValue(getData, (snapshot) => {
        const data = snapshot.val()
        const dataList = [];
        for(let id in data){
          dataList.push({id, ...data[id]})
        }
        setDataList(dataList)
        console.log(dataList)
      })
    },[])
    return (<>
        <div>
            {
              dataList ? dataList.reverse().map((e)=>{
                return(  
              <>
                <ul key={e.id} className="his-card">
                  <li>{e.winner}</li>
                  <li>{e.date}</li>
                  <li>{e.time}</li>
                </ul>
                <Board squares={e.history} gridC={e.boardSize}/>
                <hr/>
              </>)
              }) : ""
            }
        </div>
    </>)
}

export default History;


