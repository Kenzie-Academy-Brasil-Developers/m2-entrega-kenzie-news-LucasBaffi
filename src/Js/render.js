 export class Render {

    static renderNewsList(array) {
      const ul = document.getElementById('newsList')
  
      array.forEach((News) => {
        const card = this.renderCard(News)
  
        ul.appendChild(card)
      })
    }
  //criando template
    static renderCard(News) {
      const li = document.createElement('li')      
      const image = document.createElement('img')
      const linkCategoria = document.createElement('a')
      const h3Titulo = document.createElement('h3')
      const pResumo = document.createElement('p')   
      const span = document.createElement('span')    
      //nao precisa trabalhar com localStorage
      //const user = localStorage.getItem('') 
  
      image.classList.add("imgLi")
      image.src = News.imagem
      linkCategoria.innerText = News.categoria
      linkCategoria.src = "#"
      h3Titulo.innerText = News.titulo
      pResumo.innerText = News.resumo   
      span.innerText = `Fonte: ${News.fonte}`     
 
      li.append( image, linkCategoria, h3Titulo, pResumo, span)

      return li
    }
  
  }

  
