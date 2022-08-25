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
      //nao precisa trabalhar com localStorage
      //const user = localStorage.getItem('') 
  
  
      image.src = News.imagem
      linkCategoria.innerText = News.categoria
      h3Titulo.innerText = News.titulo
      pResumo.innerText = News.resumo        
 
      li.append( image, linkCategoria, h3Titulo, pResumo)

      return li
    }
  
  }

  
