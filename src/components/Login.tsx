import React, {useContext} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { UserContext } from '@/UserContext';

export const LoginScreen = () => {
	const { user, setUser } = useContext(UserContext);
	
	return (
		<View style={styles.container}>
			<Text>Login Screen</Text>
			<Button
				title={"Login"}
				onPress={() => setUser('Nick')}
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