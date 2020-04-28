import React from 'react'
import {connect} from 'react-redux'

const SongDetail=props=>{
    console.log(props)
    return <div>Song Details</div>
}

const mapStatetoProp=(state)=>{
    return {song:state.selectedSong}
}
export default (mapStatetoProp)(SongDetail)