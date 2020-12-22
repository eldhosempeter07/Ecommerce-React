import  { Component } from 'react'
import { CollectionPreview } from '../../components/collection-preview/collection-preview.component'
import { ShopData } from './shop.data'

export class ShopPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             collections :ShopData
        }
    }
    
    render() {
        const {collections} = this.state
        return (
            <div>
                {collections.map(({id,...otherCollectionProps}) =>(
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>
        )
    }
}

export default ShopPage
