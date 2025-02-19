import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export const BookDetailScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Book Detail Screen</Text>
			<Button
				title="Back"
				onPress={() => navigation.goBack()}
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