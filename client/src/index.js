import React from "react";
import ReactDOM from 'react-dom';
import List from "./List";
import './index.css';

class App extends React.Component{
    constructor(){
        super();
        this.state={
            todos:[],
        }
    }

    componentDidMount(){
        fetch("http://localhost:5000/getTodos",{
            method:"get",
            headers: {
                'Access-Control-Allow-Origin':'*'
              }
        }).then((res)=>{
            return res.json()
       
        }).then((response)=>{
            const todos=response.ids.map(id=>{
                return response.todos[id]
            })
          this.setState({todos})
        })
    }

    onChange=(event)=>{
     const text=event.target.value;
     this.setState({text})
    }

    onSubmit=()=>{
        fetch("http://localhost:5000/addTODO",{
            method:"POST",
            body:JSON.stringify({id:this.state.todos.length+1,text:this.state.text,status:"inProgress"})
        }).then((res)=>{
            return res.json()
       
        }).then((response)=>{
        })
    }

    render() {
    return (
        <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.text} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.todos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
