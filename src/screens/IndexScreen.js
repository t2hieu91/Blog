import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import BlogContextState from "../context/BlogContextState";
import { Context } from "../context/BlogContextReducer";
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
	const { state, addBlogPost, deleteBlogPost } = useContext(Context);

	return (
		<View style={styles.container}>
			<Button title="Add Post" onPress={addBlogPost} />
			<FlatList
				data={state}
				keyExtractor={(blogPost) => blogPost.title}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() => navigation.navigate('Show', { id: item.id })}
						>
							<View style={styles.row}>
								<Text style={styles.title}>{item.title} - {item.id}</Text>
								<TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
									<Feather style={styles.icon} name="trash" />
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
					)
				}}
			/>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 20,
		paddingHorizontal: 15,
		borderTopWidth: 1,
		borderColor: 'gray',
	},
	title: {
		fontSize: 18,
	},
	icon: {
		fontSize: 24,
	}
});

export default IndexScreen;
