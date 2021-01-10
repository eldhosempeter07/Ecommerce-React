import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import './collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component'

const  Collectionpage = ({collection}) => {
    const {title,items} = collection
    return (
        <div className='collection-page'> 
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item}/>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state,ownProps) =>({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect (mapStateToProps)(Collectionpage)
