import { useEffect, useState } from 'react'
import { fetchCategory, fetchSearch, fetchTopHeadlines } from '../api/axios/Requests'

const useFetch = ({ type, query = "", category = false }) => {
   const [result, setResults] = useState(null)
   const [error, setError] = useState(null)
   console.log({ type, category, result ,error})
   useEffect(() => {
      async function fetchData() {
         try {
            if (type === "Top Headlines") {
               const { data } = await fetchTopHeadlines()
               setResults(data)
            }
            if (type === "search" && query !== "") {
               const { data } = await fetchSearch(query)
               setResults(data)
            }

            if (category === true) {
               const { data } = await fetchCategory({ categories: type })
               setResults(data)
            }
         } catch (error) {
            console.error(error)
            setError(error.response.data || error.message)
         }
      }
      return (() => {
         fetchData()
      })
   }, [type, category, query])

   return { result, error }

}

export default useFetch