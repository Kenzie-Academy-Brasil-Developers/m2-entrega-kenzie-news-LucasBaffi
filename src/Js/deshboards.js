import {Render} from "./render.js"
import { ApiRequests } from "./request.js"

const response = await ApiRequests.createNews()
console.log(response);

class DashBoard {
    static renderDash(news) {
        const newsList = document.getElementById("newsList")
        newsList.innerHTML = ''

        Render.renderNewsList(news)

    }

}

const news = await ApiRequests.createNews()
DashBoard.renderDash(news)