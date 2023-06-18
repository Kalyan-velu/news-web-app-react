import React from 'react'
import Parametrs from "../../../common/data"
import ArticleBlock from './articlesBlocks'

const Home = () => {

   const { CategoriesHome, category } = Parametrs

   return (
      <div className='home'>
         {CategoriesHome.map((listName) => (
            <ArticleBlock key={listName} listName={listName} />
         ))}

         {category.map(category => (
            <ArticleBlock key={category} category={true} listName={category} />
         ))}

      </div>
   )
}

export default Home