export interface PageLink {
  id: string;
  title: string;
  url: string;
  target?: string;
}

export const pagelinks: PageLink[] = [
  {
    id: 'home',
    title: 'Home',
    url: '/'
  },
  {
    id: 'projects',
    title: 'Projects',
    url: '/projects'
  },
  {
    id: 'blog',
    title: 'Blog',
    url: '/blog'
  },
  {
    id: 'contact',
    title: 'Contact',
    url: '/contact'
  }
]
