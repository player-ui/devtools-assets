/** @type {import('next').NextConfig} */
import MDX from '@next/mdx';
import smartypants from 'remark-smartypants'
import remarkGFM from 'remark-gfm'

export const BASE_PREFIX =
  process.env.NODE_ENV === 'production' ? '/DOCS_BASE_PATH' : undefined;

const withMDX = MDX({
  extension: /\.mdx?$/,
  options: {
    // If using remark-gfm: you'll need to use next.config.mjs as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [remarkGFM],
    rehypePlugins: [],
    // If using `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
})


/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PREFIX,
  },
  // pageExtensions including md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Any other Next.js config goes below
  reactStrictMode: true,
}

// Combining MDX config with Next.js config
export default withMDX(nextConfig)
