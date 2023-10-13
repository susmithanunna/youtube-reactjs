import React from 'react'
import '../App';
import image4 from '../images/youtubeshortsicon.png';
function Shorts() {
    return (
        <>
            
            <div className="row">
                <div class="shortstitle"><img src={image4}/>Shorts</div>
                <div className="shortsimages">
                <iframe width="383" height="681" src="https://www.youtube.com/embed/WmzkeTMIZ-c" title="chinky cartoon status ❤️ comedy video 😀😂#shorts #animation #status"></iframe>
                <iframe width="383" height="681" src="https://www.youtube.com/embed/_nU9NlbFK2w" title="Cute panda 😍" ></iframe>
                <iframe width="383" height="681" src="https://www.youtube.com/embed/YlEm7tfDaVI" title="Kartun Rabbit ( Tik tok )"></iframe>
                    
                </div>
    
            </div>
        </>

    )
}
export default Shorts;
