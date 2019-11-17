import React,{Component} from 'react';
import Photo from "./Photo";
// Function component
// props will be passes from main component'''
function Photowall(props)
{
    return(
            <div className='photogrid'>
                {props.post.map((postt, index)=> <Photo key={index} removePhoto={props.removePhoto} posttt= {postt}/>)}

            </div>
        )

}

// Class component
// class Photowall extends Component{
//     render() {
//         return(
//             <div className='photogrid'>
//                 {this.props.post.map((postt, index)=> <Photo key={index} posttt= {postt}/>)}
//
//             </div>
//         )
//     }
//
// }
export default Photowall;