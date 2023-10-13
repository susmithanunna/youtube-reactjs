import React from 'react'
import '../App'
import { store } from '../App';
import { useState } from 'react';
import { useContext } from 'react';
function Home() {
  let sc = 1;
  const [data, setData] = useContext(store)
  return (
    <>
      <div className="row  row1images">
          <iframe src="https://www.youtube.com/embed/33MbEXSuUZQ" title="25/5 Pomodoro Timer • Lofi Music Helps To Focus On Studying • 4 x 25 min • Focus Station" ></iframe>
          <iframe  src="https://www.youtube.com/embed/ObRp5rxonrE" title="15 Min. Best Lord Krishna Flute Music, Krishna Flute Music" ></iframe>
        
          <iframe width="1004" height="565" src="https://www.youtube.com/embed/R7TXQF8bW_Y" title="3HR STUDY WITH ME fiercely with 🔥FIREPLACE/BONFIRE🔥 sound l Medical student from Korea "></iframe>
        </div>
        <div className="row  row1images">
        <iframe width="1004" height="565" src="https://www.youtube.com/embed/cjkFG6bHGNc" title="Relaxing Music &amp; Soft Rain: Sleep Music, Calm Piano Music, Healing Music, Peaceful Music ★149" ></iframe>
        <iframe width="1004" height="565" src="https://www.youtube.com/embed/MTpCQTx0kqc" title="Deep Focus Music To Improve Concentration - 12 Hours of Ambient Study Music to Concentrate #397" ></iframe>
        <iframe width="1004" height="565" src="https://www.youtube.com/embed/457BMuSkgto" title="How to Empty Your Mind - A Powerful Zen Story For Your Life"></iframe>
        </div>
    </>
  )

  // return(
  //   <>
  //   <table className="table table-bordered" style={{ color: "white", background: "black !important" }}>
  //         <thead>
  //           <tr>
  //             <th>SNo</th>
  //             <th>Name</th>
  //             <th>Roll</th>
  //             <th>Branch</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //         {
  //          data.map((element,index)=>{
  //           return(
  //           <>
  //                 <tr>
  //                   <td>{sc++}</td>
  //                   <td>{element.name}</td>
  //                   <td>{element.roll}</td>
  //                   <td>{element.branch}</td>
  //                 </tr>
  //           </>
  //     )
  //   })
  //  }
  //         </tbody>
  //   </table>
  //   </>
  // )
}
export default Home;
