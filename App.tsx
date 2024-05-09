import React, { useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ionicons from '@expo/vector-icons/Ionicons';

import { MainScreen } from './src/components/Main';
import { BookListScreen } from './src/components/BookList';
import { SettingsScreen } from './src/components/Settings';
import { RecommendScreen } from './src/components/Recommend';
import { SearchScreen } from './src/components/Search';
import { ProfileScreen } from './src/components/Profile';
import { Button } from 'react-native';
import { BookDetailScreen } from './src/components/BookDetail';

import { UserContext } from './src/UserContext';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
	const [user, setUser] = useState('');

	const logout = () => {
		console.log('logging out')
		setUser('')
	}

	return (
		<UserContext.Provider value={{ user, setUser }}>
			<NavigationContainer>
				<Drawer.Navigator screenOptions={{ headerShown: !Boolean(user)}}>
					<Drawer.Screen name="Drawer Home" component={DefaultScreen} />
					<Drawer.Screen name="Book List" component={BookListScreen} />
					<Drawer.Screen name="Settings" component={SettingsScreen} />
					<Drawer.Screen name="Profile" component={ProfileScreen} />
				</Drawer.Navigator>
			</NavigationContainer>
		</UserContext.Provider>
	);
}

function DefaultScreen() {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen name="Tab Home" component={StackNav} options={{ tabBarIcon: () => <Ionicons name="home-outline" size={24} /> }} />
			<Tab.Screen name="Recommend" component={RecommendScreen} options={{ tabBarIcon: () => <Ionicons name="git-compare-outline" size={24} /> }} />
			<Tab.Screen name="Search" component={SearchScreen} options={{ tabBarIcon: () => <Ionicons name="search-outline" size={24} /> }} />
		</Tab.Navigator>
	);
}

function StackNav() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen name="Stack Home" component={MainScreen} options={{ tabBarIcon: () => <Ionicons name="home-outline" /> }} />
			<Stack.Screen name="Detail View" component={BookDetailScreen} />
		</Stack.Navigator>
	)
}

export default App;