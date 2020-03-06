import React, { useContext } from 'react';
import { StyleSheet, Text, View} from 'react-native';

const CreateScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>CreateScreen</Text>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default CreateScreen;
