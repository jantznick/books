import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const AboutScreen = () => {
	return (
		<View style={styles.container}>
			<Text>About Screen</Text>
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