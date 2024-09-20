import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

import BlogHero from '@/components/BlogHero';

import { loadBlogPost } from '@/helpers/file-helpers';

import styles from './postSlug.module.css';

export async function generateMetadata({ params: { postSlug } }) {
	let {
		frontmatter: { title, abstract },
	} = await loadBlogPost(postSlug);

	return {
		title: `${title} • Bits & Bytes`,
		description: abstract,
	};
}

async function BlogPost({ params: { postSlug } }) {
	let { content: postContent } = await loadBlogPost(postSlug);

	return (
		<article className={styles.wrapper}>
			<BlogHero title='Example post!' publishedOn={new Date()} />
			<div className={styles.page}>
				<MDXRemote source={postContent} />
			</div>
		</article>
	);
}

export default BlogPost;
