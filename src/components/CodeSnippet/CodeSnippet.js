import React from 'react';
import { Code } from 'bright';

import theme from './theme';
import styles from './CodeSnippet.module.css';

Code.lineNumbers = true;
Code.theme = theme;

function CodeSnippet(props) {
	return <Code {...props} className={styles.wrapper} />;
}

export default CodeSnippet;
