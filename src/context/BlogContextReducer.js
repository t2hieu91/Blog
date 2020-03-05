import React, { useState, useReducer } from 'react';

const BlogContextReducer = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: `Blog Post #${state.length + 1}` }];
        default:
            return state;
    }
};

export const BlogProviderReducer = ({ children }) => {
	const [blogPosts, dispatch] = useReducer(blogReducer,[]);

	const addBlogPost = () => {
		dispatch({ type: 'add_blogpost' });
	};

	return (
		// value={{ data: blogPosts, addBlogPost: addBlogPost }}
		<BlogContextReducer.Provider value={{ data: blogPosts, addBlogPost }}>
			{children}
		</BlogContextReducer.Provider>
	)
};

export default BlogContextReducer;
