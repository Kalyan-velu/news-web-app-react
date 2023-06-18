import React from 'react'
import { Link } from "react-router-dom"
const ArticleBlockItems = ({ article }) => {
   const { source, title, url, description } = article
   return (
      <>
         <div aria-describedby={title} title={description} className='block__container__item'>
            <Link className='block__container__item__link' to={"/"}><h2><a className='block__container__item__link' href={url} target="_blank" rel="noopener noreferrer">{title}</a></h2></Link>
            <p style={{ textAlign: "right" }}>
               {source.name}
            </p>
         </div>
      </>
   )
}

export default ArticleBlockItems