export const get = async () => {
  return {
    status: 200,
    body: {
      list: [
        {
          id: 1,
          avatar: '/images/user-1.jpg',
          author: 'Carole Marvin.',
          date: '15 january 2015 At 10:30 pm',
          content: 'Ne erat velit invidunt his. Eum in dicta veniam interesset, harum fuisset te nam ea cu lupta definitionem.',
        },
        {
          id: 2,
          avatar: '/images/user-2.jpg',
          author: 'Jaquan Rolfson.',
          date: '15 january 2015 At 10:30 pm',
          content: 'Ne erat velit invidunt his. Eum in dicta veniam interesset, harum fuisset te nam ea cu lupta definitionem',
        },
        {
          id: 3,
          avatar: '/images/user-3.jpg',
          author: 'Bruce Bernier.',
          date: '15 january 2015 At 10:30 pm',
          content: 'Ne erat velit invidunt his. Eum in dicta veniam interesset, harum fuisset te nam ea cu lupta definitionem',
        },
      ]
    }
  }
}
