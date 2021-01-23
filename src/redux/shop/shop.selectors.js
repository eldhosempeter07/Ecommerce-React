import { createSelector } from "reselect"
import memoize from 'lodash.memoize'



const selectShop = state => state.shop

const selectShopData = createSelector (
    [selectShop],
    shop => shop.shopItems
)

export const selectCollectionForPreview = createSelector(
    [selectShopData],
    collections => 
        collections ?  Object.keys(collections).map(key => collections[key]) :[]
)

export const selectCollection = memoize((collectionUrlParm) => 
createSelector(
    [selectShopData],
    collections =>collections ? collections[collectionUrlParm]:null
        

)
)
export default selectShopData