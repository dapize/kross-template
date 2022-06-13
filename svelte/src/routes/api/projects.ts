export const get = async () => {
  return {
    status: 200,
    body: {
      list: [
        { image: '/images/portfolio/item-1.png' },
        { image: '/images/portfolio/item-2.png' },
        { image: '/images/portfolio/item-3.png' },
        { image: '/images/portfolio/item-4.png' },
        { image: '/images/portfolio/item-5.png' }
      ]
    }
  }
}
