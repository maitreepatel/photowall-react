import React,{Component} from 'react';
import Photo from "./Photo";
class Photowall extends Component{
    render() {
        return(
            <div className='photogrid'>
                {this.props.post.map((postt)=> <Photo posttt= {postt}/>)}

            </div>
        )
    }

}
export default Photowall;