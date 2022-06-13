export const post = async () => {
  return {
    status: 200,
    body: {
      message: '¡Comment added successfully!',
      id: Math.floor(Math.random() * (100 - 1 + 1) + 1)
    }
  }
}
