const getGotData =
    async function() {
  const response = await fetch(
      'https://thronesapi.com/api/v2/Characters',
  )
  if (response.status == 200) {
    // console.log(await response.json())
    return response.json()
  }
  else {
    new Error(response.status)
  }
}

export default getGotData