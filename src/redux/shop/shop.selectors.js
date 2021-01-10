import { createSelector } from "reselect"
import memoize from 'lodash.memoize'



const selectShop = state => state.shop

const selectShopData = createSelector (
    [selectShop],
    shop => shop.shopItems
)

export const selectCollectionForPreview = createSelector(
    [selectShopData],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = memoize((collectionUrlParm) => 
createSelector(
    [selectShopData],
    collections => collections[collectionUrlParm]
        

)
)
export default selectShopData