import React, { useEffect } from 'react';
import {useState} from 'react';
import '../App'
function Searchbar(props) {
  let sc=1;
  let [count,setCount]=useState(1);
  useEffect(()=>{console.log("Hello World")} ,[count])
  return (
    <>
    <div className="row">
      <div className="col-md-9">
            <input className="searchbar" value="Search"></input>
            <button type="button"className="searchbutton"><i class="fa-solid fa-magnifying-glass"></i>
            </button>
      </div>
      <div className="person col-md-3 text-right">
        <ul className='text-right'>
          <li><i class="fa-solid fa-user"></i></li>
          <li><i class="fa-solid fa-bell"></i></li>
          <li><i class="fa-solid fa-video"></i></li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="items col-md-12">
        <ul>
          <a>All</a>
          <a>Music</a>
          <a>Computer Enginnering</a>
          <a>Progamming</a>
          <a>Movies</a>
          <a>News</a>
          <a>Live</a>
          <a>Laptops</a>
          <a>Phones</a>
          <a>Grocery</a>
          <a>jewellery</a>
        </ul>
      </div>
    </div>
    
      {/* <h1>{props.data.name}</h1>
       <h1>{props.data.roll}</h1>
       <h1>{props.data.branch}</h1>
       <table className="table table-bordered" style={{color:"white",background:"black !important"}}>
              <thead>
                <tr>
                  <th>SNo</th>
                  <th>Name</th>
                  <th>Roll</th>
                  <th>Branch</th>
                </tr>
              </thead>
              <tbody>
              {
                props.data.map((element,index)=>{
                return(
                <>
                      <tr>
                        <td>{sc++}</td>
                        <td>{element.name}</td>
                        <td>{element.roll}</td>
                        <td>{element.branch}</td>
                      </tr>
                </>
          )
        })
       }
              </tbody>
        </table> */}
        {/* <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)} className='btn btn-success'>Click</button> */}

    </>

  )
}
export default Searchbar;
