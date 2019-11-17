import React,{Component} from 'react';
class AddPhoto extends Component{
    constructor(){
        super();
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const imgLink= event.target.elements.link.value
        const desc= event.target.elements.desc.value
        const post={
            id: 0,
            imageLink: imgLink,
            description: desc

        }
        if (imgLink && desc !== null)
        {
            this.props.onAddPhoto(post);
        }

    }

    render() {
        return(
            <div>
                 <h1> PhotoWall </h1>
                <div className='form'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Enter photo link here' name='link'/>
                    <input type='text' placeholder='Enter photo caption here' name='desc'/>
                    <button className='removebutton'> POST</button>

                </form>
                </div>

            </div>

        )
    }
}
export default AddPhoto;