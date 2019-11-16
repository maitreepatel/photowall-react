import React,{Component} from 'react';
import Headerr from "./Headerr";
import Indexx from "./Indexx";
class Main extends Component{
    render() {
        return( <div>
            <Headerr h={'hello'}/>
            <Indexx data = {['h','e']}/>
            <Indexx data = {['m','e']}/>
            </div>)
    }
}
export default Main;