import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image
} from 'react-native';
import NavBar from '../component/Navbar/Navbar';
import InnerContent from '../component/InnerContent';

const items = [
  { name: 'caramel Doughnout', quantity: '1 pcs', price: '$1' },
  { name: 'Doughnout', quantity: '1 pcs', price: '$12' },
  { name: 'caramel ', quantity: '1 pcs', price: '$1.5' },
  { name: 'pastry', quantity: '1 pcs', price: '$2' },
  { name: 'Hot chocolates ', quantity: '1 pcs', price: '$0.5' }
]
export default class Home extends React.Component {

  render() {
    return (
      <View>
        <NavBar />
        <Image
         source={require('../Images/resturantfood.jpg')}
         style={{height:200}} resizeMethod='auto'
         />
        <Text style={{ color: '#7575', paddingTop: 10, backgroundColor: '#E0E0E0',paddingLeft:10}}>
           Favourites List!
         </Text>
        <ScrollView style={{ paddingTop: 10, backgroundColor: '#E0E0E0' }}>
          <View >
            {
              items.map((item, key) => <InnerContent name={item.name} quantity={item.quantity} price={item.price} label='Order Again' key={key} />)
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}