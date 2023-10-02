function VideoCard(props){
    return(
        
        <div className='video-card'>
        <img className='videothumbnil'
        src= {props.thumbnailUrl}/>
       <h4>{props.title}</h4>
       <div id="logcircle">
        <img className="logo"
        src={props.channelLogoUrl}/>
       </div>
       <div id="viewchannel"> 
       <p id="channelName"> {props.channelName} </p>
       <p  id="views">{props.views} <span> . {props.likes }</span></p>
      </div>
      </div>
      
    );
}

export default VideoCard;


