import RSS from 'rss';
import { getBlogPostList } from '@/helpers/file-helpers';
import { BLOG_TITLE } from '@/constants';

export async function GET() {
	let feed = new RSS({
		title: BLOG_TITLE,
		feed_url: '/rss',
		site_url: '/',
	});
	let blogPostList = await getBlogPostList();

	blogPostList.forEach((blog) => {
		feed.item({
			title: blog.title,
			url: `/${blog.slug}`,
			description: blog.abstract,
			date: blog.publishedOn,
			guid: blog.slug,
		});
	});

	let xml = feed.xml();

	return new Response(xml, {
		status: 200,
		headers: { 'Content-Type': 'application/xml' },
	});
}

// TODO how about the first potential direction?
// TODO auto applied 'px' unit?
