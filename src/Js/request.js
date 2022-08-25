//classe que faz todas requisiçoes  
export  class ApiRequests {  

        static baseUrl = "https://kenzie-news-api.herokuapp.com/api"
        //nao precisa pegar o token
        //static token = localStorage.getItem("@kenzieNews:token") || ""
        static headers = {
          //usa aspas quando sao duas palavras
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`
         
        }
        
    static async createNews(data) {
        const news = await fetch(`${this.baseUrl}/news`, {
          method: "GET",
          headers: this.headers,
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .catch(err => console.log(err))
    
        return news
      }
      
}