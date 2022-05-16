import {createStore} from "redux";
import initialState from "../States/state";
import {AddItem,addItem,removeItem,RemoveItem} from "../Actions/action";


const reducer = (state=initialState,action)=>{
    switch (action.type){
        case AddItem : {
            return {
                ...state,
                todo:[...state.todo, {
                    id: state.todo.length > 0 ? state.todo[state.todo.length - 1].id+1 : 0 ,
                    item: action.item
                }]
            }
        }
        case RemoveItem : {
            return {
                ...state,
                todo:state.todo.filter(items=>items.id !== action.id)
            }
        }
    }





    return state;
}


 const Store = createStore(reducer);

Store.subscribe(()=>{
    console.log(Store.getState())
})



export default Store;