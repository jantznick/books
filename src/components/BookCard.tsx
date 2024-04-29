import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, Pressable } from 'react-native';
import { getGoogleData } from '../data/fetch';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

export const BookCard = ({navigate, item, setSelectedBook}) => {
    const [googleBookData, setGoogleBookData] = useState(null);
    const [loadedBookData, setLoadedBookData] = useState(false);

    useEffect(() => {
        console.log(JSON.stringify(item))
        // TODO: having some issues here with queries per day
        // consider putting the nyt list and corresponding google info in a db for lower key usage
        const bookData = getGoogleData(item.isbns[0].isbn10);

        bookData.then(x => {
            console.log(x)
            const book = x.items[0];
            console.log(book)
            setGoogleBookData(book)
            setLoadedBookData(true);
        }).catch(error => {
            console.log(item.isbns[0].isbn10)
            console.log(error)
        })
    }, [])

    const handlePress = () => {
        setSelectedBook(item);
        navigate('Detail View')
    }

	return (
        loadedBookData && (
            <TouchableWithoutFeedback onPress={handlePress}>
                <View style={styles.container} >
                    <View className='p-1 bg-teal-700'>
                        <Image
                            src={googleBookData?.volumeInfo.imageLinks.smallThumbnail}
                            style={{
                                width: width*0.6,
                                height: height*0.4
                            }}
                            className="rounded-sm"
                        />
                    </View>
                    <View className='bg-teal-700 p-2 mt-2 rounded-md'>
                        <Text className='flex items-start'>{item.rank}. {item.title} by {item.author}</Text>
                        <Text>{item.description}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
	);
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		backgroundColor: '#0bd5c8',
		alignItems: 'center',
		justifyContent: 'center',
	},
});