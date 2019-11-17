import React,{Component} from 'react';
// Class Component
// class Photo extends Component{
//     render() {
//         const posttt= this.props.posttt
//         return(
//
//                 <figure className='figure'>
//                     <img className='photo' src={posttt.imageLink} alt='No content'/>
//                     <figcaption className='caption'><p> {posttt.description}</p></figcaption>
//                     <div className='button'>
//                     <button className='removebutton'>Remove</button>
//                     </div>
//                 </figure>
//
//         )
//     }
//
// }

// Function Component
function Photo(props) {
    return(
        <figure className='figure'>
             <img className='photo' src={props.posttt.imageLink} alt='No content'/>
             <figcaption className='caption'><p> {props.posttt.description}</p></figcaption>
             <div className='button'>
             <button className='removebutton' onClick={()=> {
                 props.removePhoto(props.posttt)
             }}>Remove</button>
             </div>
        </figure>
    )

}
export default Photo;