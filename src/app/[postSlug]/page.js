import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
// import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

import BlogHero from '@/components/BlogHero';
// import Spinner from '@/components/Spinner';
import { BLOG_TITLE } from '@/constants';
import COMPONENT_MAP from '@/helpers/mdx-components';
import { loadBlogPost } from '@/helpers/file-helpers';

import styles from './postSlug.module.css';

// var DivisionGroupsDemo = dynamic(() => import('@/components/DivisionGroupsDemo'), { loading: Spinner });

async function BlogPost({ params: { postSlug } }) {
	let blogPostData = await loadBlogPost(postSlug);
	if (!blogPostData) {
		notFound();
	}

	let {
		frontmatter: { title, publishedOn },
		content,
	} = blogPostData;

	return (
		<article className={styles.wrapper}>
			<BlogHero title={title} publishedOn={publishedOn} />
			<div className={styles.page}>
				<MDXRemote source={content} components={COMPONENT_MAP} />
			</div>
		</article>
	);
}

export async function generateMetadata({ params: { postSlug } }) {
	let blogPostData = await loadBlogPost(postSlug);
	if (!blogPostData) {
		return null;
	}

	let {
		frontmatter: { title, abstract },
	} = blogPostData;

	return {
		title: `${title} • ${BLOG_TITLE}`,
		description: abstract,
	};
}

export default BlogPost;
