//Action creator 
export const selectSong =song=>{
    //Return an action
    return{
        type:'SONG_SELECTED',
        //type is compulsary but payload is optional
        payload:song
    }
}