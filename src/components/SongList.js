// import React from 'react'

// class SongList extends React.Component{

// }
import React ,{Component}from 'react'
import {connect} from 'react-redux'


class SongList extends Component{
render(){
    return <div>SongList</div>
}
}

export default connect()(SongList)


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











