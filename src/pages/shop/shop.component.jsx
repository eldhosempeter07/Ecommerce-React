import { Route } from 'react-router-dom'
import Collection from '../../components/collection/collection.component'
import CollectionsOverview from '../../components/collection-overview/collection-overview.component'

const ShopPage = ({match}) =>  {

        
        return (
            <div className = 'shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverview}/>
                <Route path={`${match.path}/:collectionId`} component={Collection}/>
            </div>
        )
    }


export default ShopPage
