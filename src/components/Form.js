import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state= {name:"",URL:""}
    }

    handleChange = event => {

        event.preventDefault()
        if(event.target.id==="name"){
            this.setState({name: event.target.value})
        }
        else{
            this.setState({URL: event.target.value})
        }

    }

    onFormSubmit = (event) => {

        // to prevent page reload on form submit
        event.preventDefault()
        if(this.state.name==="" && this.state.URL===""){
            alert("Please enter Name and URL")
        }

        else if(this.state.name===""){
            alert("Please enter Name")
        }

        else if(this.state.URL===""){
            alert("Please enter URL")
        }

        else{
            var link={name:this.state.name,URL:this.state.URL}
            this.props.submit(link)
            this.setState({name:"",URL:""})
        }
    }

    render() {

        return(
            <form>
                
                   

                        <label>Name</label>
                        <input type="text" value={this.state.name} id="name" onChange={this.handleChange}/>
                        <label>URL</label>
                        <input type="text" value={this.state.URL} id="URL" onChange={this.handleChange}/>
                        <button onClick={this.onFormSubmit}>Submit</button>

                 
                
                
                
            </form>
        )
    
    }
}

export default Form;
