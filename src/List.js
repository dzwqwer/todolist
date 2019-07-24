import React, { Component } from 'react';
import store from './store';
import {DELETE_List, ADD_DoneList} from './store/actionTypes';
import {addDoneList, deleteList} from './store/actionCreator';

class List extends Component {
    constructor(props) {
        super(props);
				this.state = store.getState();
				this.myRef = React.createRef();
				store.subscribe(this.storeChange);
		}
		storeChange= () => {
			this.setState(store.getState());
		}
		handleClick(index){
			let check;
			if(this.myRef.current.checked === false){
				check = false;
				store.dispatch(deleteList(DELETE_List, check, index));
			}else if(this.myRef.current.checked === true){
				check = true;
				store.dispatch(deleteList(DELETE_List, check, index));
			}
		}
		handleDone= (index) => {
			const {data} = this.props;
			// console.log(data)
			// console.log(this.myRef.current)
			let check;
			if(this.myRef.current.checked === true){
				check = true;
				store.dispatch(addDoneList(ADD_DoneList, check, index, data.value));
			}else if(this.myRef.current.checked === false){
				check = false;
				store.dispatch(addDoneList(ADD_DoneList, check, index, data.value));
			}
		}
    render() {
			const { data, index} = this.props; 
			return ( 
				<div>
					<ol>
						<li>
							<input ref={this.myRef} checked={data.checked} type='checkbox' onChange={this.handleDone.bind(this, index)}/>
							<p>{data.value}</p>
							<span onClick={this.handleClick.bind(this, index)}>-</span>
						</li>
					</ol>
				</div>
			);
  }
}
 
export default List;