import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'blog.indonode.dev',
  title: 'Indonode Blog',
  subtitle: 'Indonode Blog',
  lang: 'en-US',
  description: 'Powered by Indonode.dev',
  author: {
    name: 'Indonode',
    avatar: '/assets/maskable@192.png',
    status: '🌸',
    bio: 'Crypto & Blockchain Enthusiast'
  },
  themeColor: '#3D4451'
}
