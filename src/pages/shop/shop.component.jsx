import { Route } from 'react-router-dom'
import CollectionPage from '../../components/collection/collection.component'
import CollectionsOverview from '../../components/collection-overview/collection-overview.component'
import { Component } from 'react'
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions'
import { connect } from 'react-redux'
import WithSpinner from '../../components/with-spinner/with-spinner.component'


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component{

    state ={
        loading:true
    }

    unSubscribeFromSnapshot = null

    componentDidMount(){
        const {updateCollections} = this.props
        const collectionRef = firestore.collection('collections')
        this.unSubscribeFromSnapshot = collectionRef.get().then(snapShot =>{
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot)
            updateCollections(collectionsMap)
            this.setState({loading:false})
        })
    }
    render(){
        const {match} = this.props
        const {loading} = this.state
        return(
            <div className = 'shop-page'>
            <Route exact path={`${match.path}`} render={(props)=><CollectionsOverviewWithSpinner isLoading={loading} {...props}/>}/>
            <Route path={`${match.path}/:collectionId`} render={(props)=> <CollectionPageWithSpinner isLoading={loading} {...props} /> }/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>({
    updateCollections:collectionsMap =>
        dispatch(updateCollections(collectionsMap))
})


export default connect(null,mapDispatchToProps)(ShopPage)
