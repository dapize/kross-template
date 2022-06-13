export const get = async () => {
  return {
    status: 200,
    body: {
      list: [
        {
          title: 'UI Design',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          classIcon: 'ti-palette'
        },
        {
          title: 'UX Design',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          classIcon: 'ti-vector',
          active: true
        },
        {
          title: 'Interaction Design',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          classIcon: 'ti-panel'
        }
      ]
    }
  }
}



