import RSS from 'rss';
import { getBlogPostList } from '@/helpers/file-helpers';
import { BLOG_TITLE, BLOG_DESCRIPTION, BLOG_ROOT_URL } from '@/constants';

export async function GET() {
	let feed = new RSS({
		title: BLOG_TITLE,
		description: BLOG_DESCRIPTION,
		feed_url: `${BLOG_ROOT_URL}/rss.xml`,
		site_url: BLOG_ROOT_URL,
	});
	let blogPostList = await getBlogPostList();

	blogPostList.forEach((post) => {
		feed.item({
			title: post.title,
			url: `${BLOG_ROOT_URL}/${post.slug}`,
			description: post.abstract,
			date: post.publishedOn,
			guid: post.slug,
		});
	});

	let xml = feed.xml({ indent: true });

	return new Response(xml, {
		status: 200,
		headers: { 'Content-Type': 'application/xml' },
	});
}

// TODO how about the first potential direction?
// TODO auto applied 'px' unit?
