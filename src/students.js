import React, {Component} from 'react';

class Students extends Component {
    constructor(){
        super();
        this.state = {
            students: []
        }
    }
    async componentDidMount(){
        const res = await fetch('/api/student');
        const data = await res.json();
        console.log(data)
        this.setState({
            students: data
        })
    }

    render() {
       return(
           <div>{this.state.students}
           </div>

       )
   } 
}