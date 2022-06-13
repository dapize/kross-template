export const get = async () => {
  return {
    status: 200,
    body: {
      projects: [
        { image: '/images/portfolio/item-1.png', groups: ['design', 'illustration'] },
        { image: '/images/portfolio/item-2.png', groups: ['branding'] },
        { image: '/images/portfolio/item-3.png', groups: ['illustration'] },
        { image: '/images/portfolio/item-6.png', groups: ['design', 'branding'] },
        { image: '/images/portfolio/item-8.png', groups: ['illustration'] },
        { image: '/images/portfolio/item-5.png', groups: ['design'] },
        { image: '/images/portfolio/item-1.png', groups: ['branding'] },
        { image: '/images/portfolio/item-3.png', groups: ['design', 'illustration', 'branding'] },
        { image: '/images/portfolio/item-7.png', groups: ['illustration'] }
      ],
      filters: [
        {
          title:'All',
          value: 'all',
          active: true
        },
        {
          title: 'UI/UX Design',
          value: 'design'
        },
        {
          title: 'BRANDING',
          value: 'branding'
        },
        {
          title: 'ILLUSTRATION',
          value: 'illustration'
        }
      ]
    }
  }
}
