import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const RecommendScreen = () => {
	return (
		<View style={styles.container}>
			<Text>We will use AI to recommend an awesome book!</Text>
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