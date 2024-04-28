import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const SettingsScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Settings Screen</Text>
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