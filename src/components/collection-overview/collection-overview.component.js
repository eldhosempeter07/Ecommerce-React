
import { CollectionPreview } from '../collection-preview/collection-preview.component'
import {createStructuredSelector} from 'reselect'
import { connect } from 'react-redux'
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors'
import { CollectionsOverviewContainer } from './collections-overview.styles'

const CollectionsOverview = ({shopItems}) =>{
    return(
        <CollectionsOverviewContainer>
                {shopItems.map(({id,...otherCollectionProps}) =>(
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}           
        </CollectionsOverviewContainer>
    )
}

const mapStateToProps  = createStructuredSelector({
    shopItems:selectCollectionForPreview
})


export default connect(mapStateToProps) (CollectionsOverview)