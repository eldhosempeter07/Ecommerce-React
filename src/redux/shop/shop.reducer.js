import ShopActionTypes from "./shop.types";

const initialState = {
     shopItems : null
      
}

const shopReducer = (state = initialState,action) =>{

        switch(action.type){
          case ShopActionTypes.UPDATE_COLLECTIONS: 
            return{
              ...state,
              shopItems:action.payload
            }
          default : return state;
        }
}

export default shopReducer