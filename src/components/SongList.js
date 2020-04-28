//all having ^^ will always be same


// import React from 'react'

// class SongList extends React.Component{

// }
import React, { Component } from 'react'
import { connect } from 'react-redux' //^^
import { selectSong } from '../action'

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
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}>
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


//whenever change some state or we run ans produce some new state 
// it always runs with the newly created or updated state object 
//ie when we click button
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
export default connect(mapStateToProps,
    //actioncreator is sending to the connect
    // now tis prop will have 2 things
    
    //1.Action creator
    //2.song list

    {selectSong}// the coonect function is automatically calling the dispatch function behind the scene
    //it is taking the actionobject that is being returned from the action creator nad sending it to thwe 
    //dipatch function behind the scene and that dispatch function 
    //always call the action craetor through this connect function
)(SongList)
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











