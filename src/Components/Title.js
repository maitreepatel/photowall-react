import React,{Component} from 'react';
// class component
// class Title extends Component{
//     render() {
//         return(
//             <h1> {this.props.data}</h1>
//         )
//     }
//
// }


//Function component
function Title(props) {
    return(
        <h1>{props.data}</h1>
    )

}
export default Title;