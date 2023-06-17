import React from 'react'
import { Link } from "react-router-dom"
const ArticleBlockItems = ({ article }) => {
   const { source, title = "Heleediu" } = article
   return (
      <>
         <div className='block__container__item'>
            <Link className='block__container__item__link' to={"/"}><h2>{title}</h2></Link>
            <p style={{ textAlign: "right" }}>
               {source.name}
            </p>
         </div>
      </>
   )
}

export default ArticleBlockItems