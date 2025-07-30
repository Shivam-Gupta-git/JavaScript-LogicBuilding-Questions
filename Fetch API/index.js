const button1 = document.getElementById('button1')
const title1 = document.getElementById('title1')
const DataURL = 'https://dummyjson.com/products'


const getApiData = async ()=>{
  try {
    let response = await fetch(DataURL)
    let data = await response.json() 
    console.log(data.products)
    title1.innerText = data.products[1].title
  } catch (error) {
    console.log('data can not be reciving', error)
  }
}
button1.addEventListener('click', getApiData)
