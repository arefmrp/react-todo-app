import React, {Component} from 'react';
import {connect} from "react-redux";
import {addItem, AddItem, removeItem} from "../redux/Actions/action";


class Todo extends Component {
    state = {
        enteredChar :""
    }
    render() {
        const enteredChar =(e)=>{


            this.setState({
                enteredChar:e.target.value
            })
        }
        const enterValue = ()=>{
            this.props.addItem(this.state.enteredChar)
            this.setState({
                enteredChar:""
            })
        }
        const removeValue = (val)=>{
            this.props.removeItem(val)
        }
        return (
            <div className='App'>
            <div className='todoApp-section'>
                <div className='todoApp-section-header'>
                    <form method={'post'}>
                        <input type={'text'} className='input-cs' placeholder={'enter todo ....'} value={this.state.enteredChar} onChange={(e)=>enteredChar(e)}></input>
                        <button className={'btn-cs'} type={'button'} onClick={enterValue}><i className={'bi bi-plus-circle'}/></button>
                    </form>
                </div>
                <div className='todoApp-section-list'>
                    <ul>

                        {
                            this.props.todos.length > 0 ? this.props.todos.map(item=>(<li className={'todoApp-item'} key={item.id}>{item.item}<button type={'button'} onClick={()=>{removeValue(item.id)}}><i className={'bi bi-trash-fill'}></i></button></li>)):<p className={'empty-error'}>not todo item in list</p>
                        }

                    </ul>

                </div>
            </div>
            </div>
        );
    }
}
const st = (nums)=>{
  return({
      todos:nums.todo
  })
}
const std = (dispatch)=>{
  return({
      addItem:(item)=>dispatch(addItem(item)),
      removeItem:(item)=>dispatch(removeItem(item))
  })
}

export default connect(st,std)(Todo);