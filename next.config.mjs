// https://github.com/vercel/next.js/discussions/30770

import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
});

var nextConfig = {
	experimental: {
		outputFileTracingIncludes: {
			'/*': ['./content/**/*'],
		},
	},
};

export default bundleAnalyzer(nextConfig);
