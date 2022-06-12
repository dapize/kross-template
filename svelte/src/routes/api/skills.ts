export const get = async () => {
  return {
    status: 200,
    body: {
      list: [
        { title: 'Web Design', percentage: 90, color: '#fdb157' },
        { title: 'Logo Design', percentage: 60, color: '#9473e6' },
        { title: 'After Effects', percentage: 80, color: '#bdecf6' },
        { title: 'Web App', percentage: 70, color: '#ffbcaa' }
      ]
    }
  }
}
