import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import BlogContextState from "../context/BlogContextState";
import BlogContextReducer from "../context/BlogContextReducer";

const IndexScreen = () => {
	const { data, addBlogPost } = useContext(BlogContextReducer);

	return (
		<View style={styles.container}>
			<Text>IndexScreen</Text>
			<Button title="Add Post" onPress={addBlogPost} />
			<FlatList
				data={data}
				keyExtractor={(blogPost) => blogPost.title}
				renderItem={({ item }) => {
					return <Text>{item.title}</Text>
				}}
			/>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});

export default IndexScreen;
