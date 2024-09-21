import React from 'react';

import Spinner from '@/components/Spinner';
import dynamic from 'next/dynamic';

var LazyDivisionGroupsDemo = dynamic(() => import('@/components/DivisionGroupsDemo'), { loading: Spinner });

function DivisionGroupsDemo({ children, ...delegated }) {
	return <LazyDivisionGroupsDemo {...delegated}>{children}</LazyDivisionGroupsDemo>;
}

export default DivisionGroupsDemo;
