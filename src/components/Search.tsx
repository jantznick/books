import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const SearchScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Search for an awesome book here!</Text>
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