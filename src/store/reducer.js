import {ADD_TodoList, DELETE_List, ADD_DoneList} from './actionTypes';
const defaultState = {
    todoList: [],
    doneList: []
}

export default (state=defaultState, action) =>{
    if(action.type === ADD_TodoList){
        let newState = JSON.parse(JSON.stringify(state));
        newState.todoList.unshift({value: action.value, checked: false});
        return newState;
    }
    if(action.type === DELETE_List){
        let newState = JSON.parse(JSON.stringify(state));
        if(action.check){
            newState.doneList.splice(action.index, 1);
            return newState;
        }else{
            newState.todoList.splice(action.index, 1);
            return newState;
        }
    }
    if(action.type === ADD_DoneList){
        let newState = JSON.parse(JSON.stringify(state));
        // newState.doneList.unshift();
        if(action.check){
            // console.log(action)
            newState.todoList.splice(action.index, 1);
            newState.doneList.unshift({value: action.value, checked: true});
            return newState;
        }else{
            newState.doneList.splice(action.index, 1);
            newState.todoList.unshift({value: action.value, checked: false});
            return newState;
        }
    }
    return state;
}