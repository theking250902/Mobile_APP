import { View, Text, Image } from 'react-native'
import React from 'react'
import Screen1 from './src/components/app/screens/Screen1'
import Screen2 from './src/components/app/screens/Screen2'
import Screen3 from './src/components/app/screens/Screen3'
import Screen4 from './src/components/app/screens/Screen4'
import Screen5 from './src/components/app/screens/Screen5'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './src/components/app/screens/Profile'
import Orders from './src/components/app/screens/Orders'

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const StackAccount = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Screen5" component={Screen5} />
            <Stack.Screen name="Orders" component={Orders} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        if (route.name == "Shop") {
                            if (focused) {
                                return <Image source={require('./src/media/images/ic_shop1.png')} />;
                            }
                            else {
                                return <Image source={require('./src/media/images/ic_shop.png')} />;
                            }
                        }
                        else if (route.name == "Explore") {
                            if (focused) {
                                return <Image source={require('./src/media/images/ic_explore1.png')} />;
                            }
                            else {
                                return <Image source={require('./src/media/images/ic_explore.png')} />;
                            }
                        }
                        if (route.name == "Cart") {
                            if (focused) {
                                return <Image source={require('./src/media/images/ic_cart1.png')} />;
                            }
                            else {
                                return <Image source={require('./src/media/images/ic_cart.png')} />;
                            }
                        }
                        else if (route.name == "Favorite") {
                            if (focused) {
                                return <Image source={require('./src/media/images/ic_favorite1.png')} />;
                            }
                            else {
                                return <Image source={require('./src/media/images/ic_favorite.png')} />;
                            }
                        }
                        else if (route.name == "Account") {
                            if (focused) {
                                return <Image source={require('./src/media/images/ic_account1.png')} />;
                            }
                            else {
                                return <Image source={require('./src/media/images/ic_account.png')} />;
                            }
                        }
                    },
                    tabBarLabel: ({ focused }) => {
                        if (route.name == 'Shop') {
                            if (focused) {
                                return <Text style={{ color: '#FF5E00', fontWeight: 'bold' }}>Shop</Text>
                            }
                            else {
                                return <Text style={{ color: '#6D3805' }}>Shop</Text>
                            }
                        }
                        else if (route.name == 'Explore') {
                            if (focused) {
                                return <Text style={{ color: '#FF5E00', fontWeight: 'bold' }}>Explore</Text>
                            }
                            else {
                                return <Text style={{ color: '#6D3805' }}>Explore</Text>
                            }
                        }
                        if (route.name == 'Cart') {
                            if (focused) {
                                return <Text style={{ color: '#FF5E00', fontWeight: 'bold' }}>Cart</Text>
                            }
                            else {
                                return <Text style={{ color: '#6D3805' }}>Cart</Text>
                            }
                        }
                        else if (route.name == 'Favorite') {
                            if (focused) {
                                return <Text style={{ color: '#FF5E00', fontWeight: 'bold' }}>Favorite</Text>
                            }
                            else {
                                return <Text style={{ color: '#6D3805' }}>Favorite</Text>
                            }
                        }
                        else if (route.name == 'Account') {
                            if (focused) {
                                return <Text style={{ color: '#FF5E00', fontWeight: 'bold' }}>Account</Text>
                            }
                            else {
                                return <Text style={{ color: '#6D3805' }}>Account</Text>
                            }
                        }
                    },
                    headerShown: false
                })
                }
            >
                <Tab.Screen name="Shop" component={Screen1} />
                <Tab.Screen name="Explore" component={Screen2} />
                <Tab.Screen name="Cart" component={Screen3} />
                <Tab.Screen name="Favorite" component={Screen4} />
                <Tab.Screen name="Account" component={StackAccount}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default App