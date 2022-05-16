const AddItem = "ADDITEM";
const RemoveItem = "REMOVEITEM";





const addItem = (item)=>({type:AddItem,item});
const removeItem = (id)=>({type:RemoveItem,id});




export {
    AddItem,
    addItem,
    RemoveItem,
    removeItem
}