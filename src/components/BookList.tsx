import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const BookListScreen = () => {
	return (
		<View style={styles.container}>
			<Text>We will display all books you've rated or want to read here!</Text>
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