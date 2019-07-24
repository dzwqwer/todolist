import React from 'react';
import './App.css';
import List from './List'
import store from './store';
import {ADD_TodoList} from './store/actionTypes';
import {addTodoList} from './store/actionCreator';

class App extends React.Component {
  constructor(props){
    super();
    this.state = store.getState();
    store.subscribe(this.storeChange);
  }
  storeChange= () => {
    this.setState(store.getState());
  }
  addList= (e) =>{
    if(e.nativeEvent.keyCode === 13 && e.target.value){
      store.dispatch(addTodoList(ADD_TodoList, e.target.value));
      e.target.value = '';
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <label htmlFor="title">ToDoList</label>
            <input type="text" id="title" name="title" placeholder="添加ToDo" required="required" autoComplete="off" onKeyDown={this.addList}/>
          </div>
        </header>
        <section>
          <h2>
            正在进行
            <span>{this.state.todoList.length}</span>
          </h2>
          {
            this.state.todoList.map((item, index) => <List data={item} key={index} index={index}/>)
          }
          <h2>
            已经完成
            <span>{this.state.doneList.length}</span>
          </h2>
          {
            this.state.doneList.map((item, index) => <List data={item} key={index} index={index}/>)
          }
        </section>
      </div>
    );
  }
}

export default App;
