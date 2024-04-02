/** @type {import('next').NextConfig} */
import MDX from '@next/mdx';

const withMDX = MDX({
    extension: /\.mdx?$/,
    options: {
      // If using remark-gfm: you'll need to use next.config.mjs as the package is ESM only
      // https://github.com/remarkjs/remark-gfm#install
      remarkPlugins: [],
      rehypePlugins: [],
      // If using `MDXProvider`, uncomment the following line.
      // providerImportSource: "@mdx-js/react",
    },
  })
  
  
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    // pageExtensions including md and mdx
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    // Any other Next.js config goes below
    reactStrictMode: true,
  }
  
  // Combining MDX config with Next.js config
 export default withMDX(nextConfig)
