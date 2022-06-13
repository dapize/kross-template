export const get = async () => {
  return {
    status: 200,
    body: {
      list: [
        {
          period: 'Jan 2007 - Feb 2009',
          title: 'Junior UX Designer',
          company: 'WEBEX',
          icon: '/images/experience/icon-1.png'
        },
        {
          period: 'Mar 2009 - Aug 2014',
          title: 'UX & UI Designer',
          company: 'AUGMEDIX',
          icon: '/images/experience/icon-2.png'
        },
        {
          period: 'Sep 2014 - Present',
          title: 'Senior UI Designer',
          company: 'THEMEFISHER',
          icon: '/images/experience/icon-3.png'
        }
      ]
    }
  }
}
