
const initialState = {
    products:[],
    carts:[]
}

const cartReducer = (state = initialState, action:any)=>{
    switch (action.type){
        case "addToCart":{
            const index = state.carts.findIndex((item)=> item?.id === action.product.id)

            if(index === -1){
                const newCart = [...state.carts, {...action.product, quantity: 1}]
                return {...state, carts: newCart}
            }

            const newCart = state.carts.map((item)=>{
                if(item.id === action.product.id){
                    return{...item, quantity: item.quantity +1}
                }
                return item
            })
            return {...state, carts: newCart}
        }

        case "removeProduct":{
            const newCart = state.carts.filter((item)=> item.id !== action.productId)
            return {...state, carts: newCart}
        }
        case "increase":{
            const newCart = state.carts.findIndex((item)=> item.id == action.productId)
            if(newCart.quantity === 0){
                return {...state.carts.filter((item)=> item.id !== newCart.id)}
            } else {
             state.carts.map((item)=> item.id === action.productId ? {...item, quantity:item.quantity +1} :item)
                
            }
        }
        default:
            return state
    }
}

export default cartReducer