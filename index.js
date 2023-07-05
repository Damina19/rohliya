import {data} from './pythonAllData.js'
 document.addEventListener('DOMContentLoaded', ()=>{
    const card =  document.createElement ('div');
   
    const targetDiv = document.querySelector('#target')
    data.forEach((item,index)=>{

      // const row = document.createElement('div')


    const article = document.createElement("p")
    article.innerText = `your article is:${item.id}`
 
    

    const img = document.createElement("img")
    img.src = `${item.image}`


      const priceTitle = document.createElement("h1")
      const productNametitle  = document.createElement("p")

      productNametitle.innerText = `your product name is: ${item.product_name}`
    
      priceTitle.innerText = `your price is:  ${item.price}` 


      // row.innerHTML = `<h1>${item.price} </h1>

      const imgContainer = document.createElement("div")
      imgContainer.className = "item_image_container"

      imgContainer.appendChild(img)
      
      
      targetDiv.appendChild(article)
      targetDiv.appendChild(productNametitle)
      targetDiv.appendChild(priceTitle)
      targetDiv.appendChild(imgContainer)
    
    })
   
 }
 )