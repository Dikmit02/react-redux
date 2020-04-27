//all having ^^ will always be same


// import React from 'react'

// class SongList extends React.Component{

// }
import React, { Component } from 'react'
import { connect } from 'react-redux' //^^

//Connect 
// any time list of songs insid ethe store changes
//Provider automaically notifies the connect function
//connect then passes list of song to the SongLisrt
class SongList extends Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary">
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            )
        })
    }
    render() {
        console.log(this.props)
        // this.props()=== songs:state.songs} it will shows list of songs as
        //mapStateToProps has return   return {songs:state.songs}
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

//mapStateToProps

//mapState takes state ie all data (all reducers)object and run calculation and 
//and that will shows as prop (ie list_of_song) to component(SOngList)

// basically connect will fetch out the list of songs fro the store and pass this listOfSong as prop to the SongList

//^^
const mapStateToProps = (state) => {
    // this returned object will show as prop inside our component
    return { songs: state.songs }
    // it sending state.songs(list of songs) as a prop to SongList




    // console.log(state)

    // // sending state as a prop to SongList
    // return state
}

//connect(mapStateToProps ) configuring coonect

//^^
export default connect(mapStateToProps)(SongList)
//Always second argument will be our component

// function connect(){
//     return function(){
//         return 'Hi there'
//     }
// }

// connect()()// Hi there

// connect() ->return a function 
// returned function is =========
// function(){
    //         return 'Hi there'
    //     }
// connect()()->invoke a funciton that is returned ie

// function(){
    //         return 'Hi there'
    //     }











