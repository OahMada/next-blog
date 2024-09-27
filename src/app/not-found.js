import Link from 'next/link';

import styles from './not-found.module.css';
import { BLOG_TITLE } from '@/constants';

export const metadata = {
	title: `404 Not found • ${BLOG_TITLE}`,
};

export default function NotFound() {
	return (
		<div className={styles.wrapper}>
			<h2>404 Not Found</h2>
			<p>This page does not exist. Please check the URL and try again.</p>
			<Link href='/'>Return Home</Link>
		</div>
	);
}
