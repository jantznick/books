import React, { useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ionicons from '@expo/vector-icons/Ionicons';

import { MainScreen } from '@/components/Main';
import { BookListScreen } from '@/components/BookList';
import { SettingsScreen } from '@/components/Settings';
import { RecommendScreen } from '@/components/Recommend';
import { SearchScreen } from '@/components/Search';
import { ProfileScreen } from '@/components/Profile';
import { BookDetailScreen } from '@/components/BookDetail';

import { UserContext } from '@/UserContext';
import { LoginScreen } from '@/components/Login';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
	const [user, setUser] = useState('');

	return (
		<UserContext.Provider value={{ user, setUser }}>
			<NavigationContainer>
				<Drawer.Navigator screenOptions={{ headerShown: true}}>
					<Drawer.Screen name="Home" component={DefaultScreen} />
					{!Boolean(user) ?
						<>
							<Drawer.Screen name="Book List" component={BookListScreen} />
							<Drawer.Screen name="Settings" component={SettingsScreen} />
							<Drawer.Screen name="Profile" component={ProfileScreen} />
						</>
						:
						<Drawer.Screen name="Login" component={LoginScreen} />
					}
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