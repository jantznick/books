import React, {useContext} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { UserContext } from '../../App';

export const MainScreen = () => {
	const { user, setUser } = useContext(UserContext);

	return (
		<View style={styles.container}>
			<Text>Main Screen</Text>
			{user ?
				<Button
					title="Log out our test user"
					onPress={() => setUser('')}
				/>
			:
				<Button
					title="Log in a user named 'Test User'"
					onPress={() => setUser('Test User')}
				/>
			}
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