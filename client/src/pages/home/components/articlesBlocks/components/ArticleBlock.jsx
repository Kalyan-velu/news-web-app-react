import React from 'react'
import useFetch from '../../../../../hooks/useFetch'
import ArticleBlockItems from './ArticleBlockItems'
import "../styles/ArticleBlock.scss"
const ArticleBlock = ({ listName, category }) => {
  const { result, error } = useFetch({ type: listName, category: category })

  console.log(error)

  return (
    <div className='block'>
      <marquee><h1 className='block__header'>{listName.toUpperCase()}</h1></marquee>
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