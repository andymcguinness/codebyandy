import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  // Optimize CSS handling
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Enable experimental optimizations
  experimental: {
    optimizeCss: true,
  },

  // Compress responses
  compress: true,

  // Optimize images
  images: {
    formats: ['image/avif' as const, 'image/webp' as const],
    minimumCacheTTL: 31536000, // 1 year cache for optimized images
  },
}

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkFrontmatter, remarkGfm],
    rehypePlugins: [],
  },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)