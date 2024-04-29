import React, {useContext, useEffect, useState} from 'react';
import { StyleSheet, View, Text, Button, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';

import { NYT } from '../data/hard';

import { BookCard } from './BookCard';

import { UserContext } from '../UserContext';

const {width, height} = Dimensions.get('window');

export const MainScreen = ({navigation}) => {
	const { user, setUser } = useContext(UserContext);
	const [books, setBooks] = useState([]);
	const [booksTwo, setBooksTwo] = useState([]);
	const [selectedBook, setSelectedBook] = useState({})

	useEffect(() => {
		setBooks(NYT['combined-print-and-e-book-fiction'].results.books)
		setBooksTwo(NYT['combined-print-and-e-book-nonfiction'].results.books)
	}, [])

	useEffect(() => {
		console.log('selected book changed:');
		console.log(selectedBook.title);
	}, [selectedBook])

	return (
		<View style={{
			...styles.container,
			alignItems: user ? 'center' : 'flex-start',
			justifyContent: user ? 'center' : 'flex-start'
		}} className='px-2'>
			<View>
				<Button
					title={user ? "Login" : "Logout"}
					onPress={() => setUser(user ? '' : 'Nick')}
				/>

				<ScrollView>

					<Text className='mb-8'>NYT Best Seller List - Data Provided by New York Times</Text>
					<Carousel
						data={books}
						renderItem={({item}) => <BookCard navigate={navigation.navigate} setSelectedBook={setSelectedBook} item={item} />}
						firstItem={0}
						inactiveSlideOpacity={0.20}
						sliderWidth={width}
						itemWidth={width*0.62}
						slideStyle={{display: 'flex', alignItems: 'center'}}
					/>

					<Text className='mb-8 mt-8'>NYT Best Seller List - Data Provided by New York Times</Text>
					<Carousel
						data={booksTwo}
						renderItem={({item}) => <BookCard navigate={navigation.navigate} setSelectedBook={setSelectedBook} item={item} />}
						firstItem={0}
						inactiveSlideOpacity={0.20}
						sliderWidth={width}
						itemWidth={width*0.62}
						slideStyle={{display: 'flex', alignItems: 'center'}}
					/>

				</ScrollView>

			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0bd5c8',
	},
});