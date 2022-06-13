export const get = async () => {
  return {
    status: 200,
    body: {
      list: [
        {
          title: 'Research and Plan',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          icon: {
            image: '/images/icons/plan.png',
            width: 57,
            height: 59
          }
        },
        {
          title: 'Design and Develop',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          icon: {
            image: '/images/icons/design.png',
            width: 49,
            height: 49
          }
        },
        {
          title: 'Deliver',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          icon: {
            image: '/images/icons/print.png',
            width: 60,
            height: 43
          }
        }
      ]
    }
  }
}
