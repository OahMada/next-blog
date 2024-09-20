import React from 'react';

import BlogSummaryCard from '@/components/BlogSummaryCard';

import { getBlogPostList } from '@/helpers/file-helpers';

import styles from './homepage.module.css';

async function Home() {
	let blogPosts = await getBlogPostList();

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.mainHeading}>Latest Content:</h1>

			{blogPosts.map((blog) => {
				return <BlogSummaryCard {...blog} key={blog.slug} />;
			})}
		</div>
	);
}

export default Home;
