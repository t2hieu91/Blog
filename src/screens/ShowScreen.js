import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContextReducer';

const ShowScreen = ({ navigation }) => {
	const id = navigation.getParam('id');

	const { state } = useContext(Context);

	const blogPost = state.find(
		blogPost => blogPost.id === id
	);

	return (
		<View style={styles.container}>
			<Text>ShowScreen</Text>
			<Text>{id}</Text>
			<Text>{blogPost.title}</Text>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default ShowScreen;
