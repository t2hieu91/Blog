import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { Context } from  '../context/BlogContextReducer';

const CreateScreen = ({ navigation }) => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const { addBlogPost } = useContext(Context);

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Enter Title:</Text>
			<TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
			<Text style={styles.label}>Enter Content:</Text>
			<TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}/>
			<Button title="Add Blog Post" onPress={
				() => addBlogPost(title, content, () => {
					navigation.navigate('Index');
				})
			}/>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	input: {
		fontSize: 18,
		borderWidth: 1,
		borderColor: 'gray',
		marginBottom: 15,
		padding: 5,
		margin: 5,
	},
	label: {
		fontSize: 18,
		marginBottom: 5,
		marginLeft: 5,
	},
});

export default CreateScreen;
