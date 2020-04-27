import {combineReducers} from 'redux';

const songsReducer =()=>{
    return [
        {title:'No Scrubs',duration:'4:05'},
        {title:'Macarena',duration:'2:30'},
        {title:'saki saki',duration:'3:15'},
        {title:'waka waka',duration:'1:45'}
    ]
    
};

const selectedSongReducer=(selectSong=null,action)=>{
    if(action.type==='SONG_SELECTED')
    {return action.payload;}
    return selectSong;
}


export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
})