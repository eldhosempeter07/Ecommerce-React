
import { CollectionPreview } from '../collection-preview/collection-preview.component'
import './collection-overview.styles.scss'
import {createStructuredSelector} from 'reselect'
import { connect } from 'react-redux'
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors'

const CollectionsOverview = ({shopItems}) =>{
    return(
        <div className='collections-overview'>
                {shopItems.map(({id,...otherCollectionProps}) =>(
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}           
        </div>
    )
}

const mapStateToProps  = createStructuredSelector({
    shopItems:selectCollectionForPreview
})


export default connect(mapStateToProps) (CollectionsOverview)