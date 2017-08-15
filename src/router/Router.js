import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  StackNavigator ,
  TabNavigator,
} from 'react-navigation';
import Home from '../container/Home';
import Favourite from '../container/Favourite';
import Profile from '../container/Profile';
import Cart from '../container/Cart';
import Icon from 'react-native-vector-icons/Ionicons';
import Content from '../container/Content';

const home = StackNavigator({
 home:{screen:Home},
 content:{screen:Content}
},
{
  headerMode: 'none'
})

const Router= TabNavigator({
  Home:{
    screen:home,
    navigationOptions:{
    tabBarLabel:'Home',
    tabBarIcon: ({ tintColor}) => (<Icon name={'ios-home-outline'} size={25} color={tintColor} />)
  }
  },
  Favourite:{
    screen: Favourite,
    navigationOptions:{
      tabBarLabel:'Favourites',
      tabBarIcon: ({tintColor}) => (<Icon name='ios-heart-outline' size={25} color={tintColor}/>)
    }
  },
  Profile:{
    screen: Profile,
    navigationOptions:{
      tabBarLabel:'Profile',
      tabBarIcon: ({tintColor}) => (<Icon name='ios-person-outline' size={25} color={tintColor}/>)
    }
  
  },
  Cart:{
    screen: Cart,
    navigationOptions:{
      tabBarLabel:'Cart',
      tabBarIcon: ({tintColor}) => (<Icon name='ios-cart-outline' size={25} color={tintColor}/>)
    }
  },
},
{
 tabBarOptions:{
   activeTintColor:'#6734b9',
   inactiveTintColor:'#616161',
   labelStyle: { fontWeight: 'bold' }
 },

});
export default Router;