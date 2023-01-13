const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.API_KEY);

const TopHeadLines=async(req,res)=>{
   const {articles}=await newsapi.v2.topHeadlines({sources: 'bbc-news,the-verge'})
   res.status(200).json({
      articles
   })
}

module.exports = {TopHeadLines}