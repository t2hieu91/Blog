import React, { useState } from 'react';

const BlogContextState = React.createContext();

export const BlogProviderState = ({ children }) => {
	const [blogPosts, setBlogPosts] = useState([]);

	const addBlogPost = () => {
		setBlogPosts([
			...blogPosts,
			{ title: `Blog Post #${blogPosts.length + 1}` }
		]);
	};

	return (
		// value={{ data: blogPosts, addBlogPost: addBlogPost }}
		<BlogContextState.Provider value={{ data: blogPosts, addBlogPost }}>
			{children}
		</BlogContextState.Provider>
	)
};

export default BlogContextState;
