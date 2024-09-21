import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
// import dynamic from 'next/dynamic';

import BlogHero from '@/components/BlogHero';
import CodeSnippet from '@/components/CodeSnippet';
import DivisionGroupsDemo from '@/components/LazyDivisionGroupsDemo';
// import Spinner from '@/components/Spinner';

import { loadBlogPost } from '@/helpers/file-helpers';

import styles from './postSlug.module.css';

// var DivisionGroupsDemo = dynamic(() => import('@/components/DivisionGroupsDemo'), { loading: Spinner });

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
				<MDXRemote
					source={postContent}
					components={{
						pre: CodeSnippet,
						DivisionGroupsDemo,
					}}
				/>
			</div>
		</article>
	);
}

export default BlogPost;
