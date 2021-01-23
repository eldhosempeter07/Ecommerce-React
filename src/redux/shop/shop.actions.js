import ShopActionTypes from "./shop.types"

export const updateCollections=collectionsMAp =>({
    type:ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMAp
})