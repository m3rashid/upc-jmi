export interface IFooterLink {
  id: string
  title: string
  links: { id: string; label: string; link: string }[]
}

export const footerLinks: IFooterLink[] = [
  {
    id: 'footerLink1',
    title: 'Link',
    links: [
      { id: 'footerLink11', label: 'Link', link: '' },
      { id: 'footerLink12', label: 'Link', link: '' },
    ],
  },
  { id: 'footerLink2', title: 'Link', links: [] },
  { id: 'footerLink3', title: 'Link', links: [] },
]
