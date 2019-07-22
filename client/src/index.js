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
       this.fetchTodos();
    }

    fetchTodos=()=>{
        console.log("CALLED");
        fetch("http://localhost:5000/getTodos",{
            method:"get",
            headers: {
                'Access-Control-Allow-Origin':'*'
              }
        }).then((res)=>{
            return res.json()
       
        }).then((response)=>{
            const todos=response.ids.map(id=>{
                response.todos[id].id=id;
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
            console.log(res)
        })
    }
    deleteTODO=(id)=>{
        fetch("http://localhost:5000/deleteTODO",{
            method:"delete",
            body:JSON.stringify({id})
        }).then((res)=>{
            this.fetchTodos();
        })
    }
    render() {
    return (
        <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.text} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.todos} deleteTODO={this.deleteTODO}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
