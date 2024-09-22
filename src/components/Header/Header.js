'use client';

import React from 'react';
import clsx from 'clsx';
import { Rss, Sun, Moon } from 'react-feather';
import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation';

import Logo from '@/components/Logo';
import VisuallyHidden from '@/components/VisuallyHidden';
import { LIGHT_TOKENS, DARK_TOKENS } from '@/constants';

import styles from './Header.module.css';

function Header({ theme, className, ...delegated }) {
	let [colorTheme, setColorTheme] = React.useState(theme);
	let router = useRouter();

	function handleChangeColorTheme() {
		let nextTheme = colorTheme === 'light' ? 'dark' : 'light';
		setColorTheme(nextTheme);

		Cookie.set('color-theme', nextTheme);

		let root = document.documentElement;
		let colors = nextTheme === 'light' ? LIGHT_TOKENS : DARK_TOKENS;

		root.setAttribute('data-color-theme', nextTheme);
		Object.entries(colors).map(([key, value]) => {
			root.style.setProperty(key, value);
		});
	}

	return (
		<header className={clsx(styles.wrapper, className)} {...delegated}>
			<Logo />

			<div className={styles.actions}>
				<button
					className={styles.action}
					onClick={() => {
						router.push('/rss.xml');
					}}
				>
					<Rss
						size='1.5rem'
						style={{
							// Optical alignment
							transform: 'translate(2px, -2px)',
						}}
					/>
					<VisuallyHidden>View RSS feed</VisuallyHidden>
				</button>
				<button className={styles.action} onClick={handleChangeColorTheme}>
					{colorTheme === 'light' ? <Sun size='1.5rem' /> : <Moon size='1.5rem' />}
					<VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
				</button>
			</div>
		</header>
	);
}

export default Header;
