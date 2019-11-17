import React,{Component} from 'react';
import Photo from "./Photo";
import {Link} from "react-router-dom";
// Function component
// props will be passes from main component'''
function Photowall(props)
{
    return(
            <div>
                <Link to='/addphoto'>
                    <button className='plusbutton' onClick= {props.onNavigate}>  </button>
                </Link>

            <div className ='photogrid'>
                {props.post.map((postt, index)=> <Photo key={index} removePhoto={props.removePhoto} posttt= {postt}/>)}

            </div>
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