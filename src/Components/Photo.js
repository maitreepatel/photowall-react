import React,{Component} from 'react';

class Photo extends Component{
    render() {
        const posttt= this.props.posttt
        return(

                <figure className='figure'>
                    <img className='photo' src={posttt.imageLink} alt='No content'/>
                </figure>

        )
    }

}
export default Photo;