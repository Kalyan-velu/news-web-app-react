import React, { useEffect, useState } from 'react'
import ArticleBlockItems from './ArticleBlockItems'
import { fetchTopHeadlines, fetchCategory } from "../../../../../api/axios/Requests"
import "../styles/ArticleBlock.scss"

const ArticleBlock = ({ listName: type, category }) => {
  const [result, setResults] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    async function fetchData() {
      try {
        if (type === "Top Headlines") {
          const { data } = await fetchTopHeadlines()
          setResults(data)
        }
        // if (type === "search" && query !== "") {
        //   const { data } = await fetchSearch(query)
        //   setResults(data)
        // }

        if (category === true) {
          const { data } = await fetchCategory({ categories: type })
          setResults(data)
        }
      } catch (error) {
        console.error(error)
        setError(error.response.data || error.message)
      }
    }
    fetchData()
  }, [type, category])
  return (
    <div aria-describedby={type} className='block'>
      <marquee><h1 className='block__header'>{type.toUpperCase()}</h1></marquee>
      <div className="block__container">
        {result ?
          <>
            {result.map((news) => (
              <ArticleBlockItems key={news.name} article={news} />
            ))
            }
          </> :
          <div style={{ color: "red" }}>{error?.message && error?.message || "Nothing To Show"}</div>
        }
      </div>
    </div>
  )
}

export default ArticleBlock