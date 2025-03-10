import React, {useState} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { UserContext } from '@/UserContext';

export const ProfileScreen = () => {
	const [user, setUser] = useState(UserContext);

	return (
		<View style={styles.container}>
			<Text>Profile Screen</Text>
			<Button
				title="Logout"
				onPress={() => {
					setUser('')
					console.log(Boolean(user))
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});