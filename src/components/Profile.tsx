import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const ProfileScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Profile Screen</Text>
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