import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs'
)

export const documentationNav = {
  'Started': [
    // TODO: Add these pages
    // pages['tailwind-cli'],
    // { title: 'Play CDN', href: '#' },
    pages['editor-setup'],
  ],
  'Concepts': [
    pages['utility-first'],
  ]
}

const guidePages = createPageList(
  require.context(`../pages/guide/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'guide'
)

export const guideNav = {
  'Started': [
    // TODO: Add these pages
    // pages['tailwind-cli'],
    // { title: 'Play CDN', href: '#' },
    guidePages['editor-setup'],
  ],
  'Concepts': [
    guidePages['utility-first'],
  ]
}