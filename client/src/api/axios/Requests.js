import api from "./axios"

export const fetchTopHeadlines = () => api.get(`/top-headlines`)
export const fetchSearch = ({ search }) => api.get(`/search/${search}`)
export const fetchTopCHeadlines = (countryName) => api.get(`/top/${countryName}`)
export const fetchCategory = ({ categories }) => {
   console.log(categories)
   return api.get(`/categories/${categories}`)
}

