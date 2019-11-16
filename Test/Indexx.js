import React,{Component} from 'react';
class Indexx extends Component{
    render() {
        return (
            <div>
                <ol>

                {this.props.data.map((omg,index)=> <li key={index}>{omg}</li>)}

                </ol>
            </div>
        );
    }
}
export default Indexx;