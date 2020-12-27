import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/header.component';
import { auth } from './firebase/firebase.utils';
import { HomePage } from './pages/homepage/homepage-component';
import ShopPage from './pages/shop/shop.component';
import { SignInAndSignOutPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser:null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=> {
      this.setState({currentUser:user});
      console.log(user.displayName);
    })
  }

  // componentWillMount(){
  //   this.unsubscribeFromAuth();
  // }


  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact path = '/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signin' component={SignInAndSignOutPage}/>
      </Switch> 
      </div>
    )
  }
}

export default App

