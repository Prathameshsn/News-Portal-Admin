import { environment } from '../../../environments/environment';


export const apiConfig = {
    add: environment.apiURL + '/addnews',
    edit: environment.apiURL + '/updatenews',
    list: environment.apiURL + '/getnewslist',
    getNewsDetails: environment.apiURL + '/getNewsDetails',
    getCategories: environment.apiURL + '/getcategories'
}