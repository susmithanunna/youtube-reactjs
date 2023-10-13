import React from 'react';
import logo from '../images/youtubelogo.png';
import sub1 from '../images/subcription1.png';
import sub2 from '../images/subcription2.png';
import sub3 from '../images/subcription3.jpeg';
import sub4 from '../images/subcription4.png';
import '../App';
import { Link } from 'react-router-dom';
function Sidebar() {
    return (
        <>
            <div className="col-md-3">
                <div className="menubar"><i class="fa-solid fa-bars"></i></div>
                <div className="image">
                    <img src={logo} width="50" />
                </div>
                <br />
                <div className='youtube'>
                    <h5>Youtube</h5>
                </div>
                <br />
                <br />

                <div className='sidebar'>
                    <ul>
                        <Link to="Home"><li><i class="fa-solid fa-house"></i>Home</li></Link><br /><br />
                        <Link to="Shorts"><li><i class="fa-solid fa-bolt"></i>Shorts</li></Link><br /><br />
                        <li><i class="fa-solid fa-credit-card"></i>Subcription</li><br /><br />
                        <hr />
                        <li class="horline" style={{ color: "white" }}><hr /></li><br /><br />
                        <li><i class="fa-solid fa-circle-play"></i>Library</li><br /><br />
                        <li><i class="fa-solid fa-clock-rotate-left"></i>History</li><br /><br />
                        <li><i class="fa-regular fa-clock"></i>WatchLater</li><br /><br />
                        <li><i class="fa-regular fa-thumbs-up"></i>Liked Videos</li><br /><br />
                        <li><i class="fa-solid fa-angle-down"></i>Show more</li><br /><br />

                        <br />
                        <li><h4>Subcription</h4></li><br /><br />
                        <li><img src={sub1} />GreatLearning</li><br /><br />
                        <li><img src={sub2} />GeeksforGeeks</li><br /><br />
                        <li><img src={sub3} />Apna College</li><br /><br />
                        <li><img src={sub4} />Hackerrank</li><br /><br />

                    </ul>
                </div>
            </div>
        </>

    )
}
export default Sidebar;




