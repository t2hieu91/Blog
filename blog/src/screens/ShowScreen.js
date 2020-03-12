import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContextReducer';
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
	const id = navigation.getParam('id');

	const { state } = useContext(Context);

	const blogPost = state.find(
		blogPost => blogPost.id === id
	);

	return (
		<View style={styles.container}>
			<Text>{blogPost.id}</Text>
			<Text>{blogPost.title}</Text>
			<Text>{blogPost.content}</Text>
		</View>
	)
};

ShowScreen.navigationOptions = ({ navigation }) => {
	const id = navigation.getParam('id');
	return {
		headerRight: () => (
			<TouchableOpacity onPress={() => navigation.navigate('Edit', { id: id })}>
				<EvilIcons name="pencil" size={35} />
			</TouchableOpacity>
		)
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default ShowScreen;
