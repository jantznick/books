import React, { useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import { MainScreen } from './src/components/Main';
import { BookListScreen } from './src/components/BookList';
import { SettingsScreen } from './src/components/Settings';
import { RecommendScreen } from './src/components/Recommend';
import { SearchScreen } from './src/components/Search';
import { ProfileScreen } from './src/components/Profile';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export const UserContext = createContext('')

function App() {
	const [user, setUser] = useState('');

	return (
		<UserContext.Provider value={{ user, setUser }}>
			<NavigationContainer>
				<Drawer.Navigator screenOptions={{ headerShown: Boolean(user) }}>
					<Drawer.Screen name="Home" component={DefaultScreen} />
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
			<Tab.Screen name="Home" component={MainScreen} options={{ tabBarIcon: () => <Ionicons name="home-outline" /> }} />
			<Tab.Screen name="Recommend" component={RecommendScreen} options={{ tabBarIcon: () => <Ionicons name="git-compare-outline" /> }} />
			<Tab.Screen name="Search" component={SearchScreen} options={{ tabBarIcon: () => <Ionicons name="search-outline" /> }} />
		</Tab.Navigator>
	);
}

export default App;