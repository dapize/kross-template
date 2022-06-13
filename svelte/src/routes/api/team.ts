export const get = async () => {
  return {
    status: 200,
    body: {
      members: [
        { name: 'Jack Schenziwe', role: 'Project Manager', image: '/images/team/member-1.png' },
        { name: 'Jack Schenziwe', role: 'Project Manager', image: '/images/team/member-2.png' },
        { name: 'Jack Schenziwe', role: 'Project Manager', image: '/images/team/member-3.png' }
      ]
    }
  }
}


