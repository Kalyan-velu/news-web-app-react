import { useEffect, useState } from 'react'
import { fetchCategory, fetchSearch, fetchTopHeadlines } from '../api/axios/Requests'

const useFetch = ({ type, query = "", category = false }) => {
   const [result, setResults] = useState(null)
   const [error, setError] = useState(null)
   console.log({ type, category, result ,error})
   

   return { result, error }

}

export default useFetch