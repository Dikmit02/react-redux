import { selectSong } from "../action";

const songsReducer =()=>{
    return [
        {title:'No Scrubs',duration:'4:05'},
        {title:'Macarena',duration:'2:30'},
        {title:'saki saki',duration:'3:15'},
        {title:'waka waka',duration:'1:45'}
    ]
    
};

const SelectedSongReducer=(selectSong=null,action)=>{
    if(action.type==='SONG_SELECTED')
    {return action.payload;}
    return selectSong;
}