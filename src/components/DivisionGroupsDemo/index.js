'use client'; // TODO why this line is necessary?

import dynamic from 'next/dynamic';
let DivisionGroupsDemo = dynamic(() => import('./DivisionGroupsDemo'));
export default DivisionGroupsDemo;
