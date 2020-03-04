import React, { useState } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
	const [blogPosts, setBlogPosts] = useState([]);

	const addBlogPost = () => {
		setBlogPosts([
			...blogPosts,
			{ title: `Blog Post #${blogPosts.length + 1}` }
		]);
	};

	return (
		// value={{ data: blogPosts, addBlogPost: addBlogPost }}
		<BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
			{children}
		</BlogContext.Provider>
	)
};

export default BlogContext;
