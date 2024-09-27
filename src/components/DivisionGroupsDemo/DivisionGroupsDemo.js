'use client';
import React from 'react';
import clsx from 'clsx';
import { motion, LayoutGroup } from 'framer-motion';

import { range } from '@/utils';
import Card from '@/components/Card';
import SliderControl from '@/components/SliderControl';

import Equation from './Equation';
import styles from './DivisionGroupsDemo.module.css';

function DivisionGroupsDemo({ numOfItems = 12, initialNumOfGroups = 1, includeRemainderArea }) {
	const [numOfGroups, setNumOfGroups] = React.useState(initialNumOfGroups);

	const numOfItemsPerGroup = Math.floor(numOfItems / numOfGroups);

	const remainder = includeRemainderArea ? numOfItems % numOfGroups : null;

	let id = React.useId();

	// When we're splitting into 1-3 groups, display side-by-side
	// columns. When we get to 4, it should switch to a 2x2 grid.
	const gridStructure =
		numOfGroups < 4
			? {
					gridTemplateColumns: `repeat(${numOfGroups}, 1fr)`,
			  }
			: {
					gridTemplateColumns: '1fr 1fr',
					gridTemplateRows: '1fr 1fr',
			  };

	return (
		<LayoutGroup>
			<Card as='section' className={styles.wrapper}>
				<header className={styles.header}>
					<SliderControl
						label='Number of Groups'
						className={styles.slider}
						step={1}
						min={1}
						max={4}
						value={numOfGroups}
						onChange={(ev) => setNumOfGroups(Number(ev.target.value))}
					/>
				</header>

				<div className={styles.demoWrapper}>
					<div className={clsx(styles.demoArea)} style={gridStructure}>
						{range(numOfGroups).map((groupIndex) => (
							<motion.div key={groupIndex} className={styles.group} layout={true}>
								{range(numOfItemsPerGroup).map((index) => {
									// ~~to make sure that the circles in remainder area stack on the right side~~
									// let reverseIndexStarter = numOfGroups * numOfItemsPerGroup - 1; // this si not necessary
									// let layoutId = `${id}-${reverseIndexStarter - (index + numOfItemsPerGroup * groupIndex)}`;
									let layoutId = `${id}-${index + numOfItemsPerGroup * groupIndex}`;
									return <motion.div key={layoutId} className={styles.item} layoutId={layoutId} />;
								})}
							</motion.div>
						))}
					</div>
				</div>

				{includeRemainderArea && (
					<div className={styles.remainderArea}>
						<p className={styles.remainderHeading}>Remainder Area</p>
						{range(remainder).map((index) => {
							// to make sure that the circles in remainder area stack on the right side
							let reverseIndexStarter = numOfItems - 1;
							let layoutId = `${id}-${reverseIndexStarter - index}`;
							return <motion.div key={layoutId} className={styles.item} layoutId={layoutId} />;
						})}
					</div>
				)}

				<Equation dividend={numOfItems} divisor={numOfGroups} remainder={remainder} />
			</Card>
		</LayoutGroup>
	);
}

export default DivisionGroupsDemo;
