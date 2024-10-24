const initialState={
    cart:JSON.parse(window.localStorage.getItem('cartlist')) || []
}
function cartreducer(state=initialState,action)
{
if(action.type==='ADDPRODUCT')
{
    console.log(action.payload)
    action.payload.count=1;
    return {...state,cart:[...state.cart,action.payload]}
}
else if(action.type=='REMOVE_PRODUCT')
    {
state.cart=state.cart.filter((a)=>{
    if(a._id!=action.payload._id)
        {
            return a;
        }
})
console.log(state.cart)
return {...state,cart:[...state.cart]}
    }
    else
    {

    }
return state;
}
export default cartreducer;