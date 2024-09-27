'use client'; // why this line is necessary? https://discord.com/channels/783425607492304947/1288914933282766971

import dynamic from 'next/dynamic';
let DivisionGroupsDemo = dynamic(() => import('./DivisionGroupsDemo'));
export default DivisionGroupsDemo;
