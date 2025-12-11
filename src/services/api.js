export const getExampleData = async () => {
  // mô phỏng delay 1s
  await new Promise(resolve => setTimeout(resolve, 1000))
  return {
    data: [
      { name: 'Item 1', value: 100 },
      { name: 'Item 2', value: 200 },
      { name: 'Item 3', value: 300 }
    ]
  }
}
