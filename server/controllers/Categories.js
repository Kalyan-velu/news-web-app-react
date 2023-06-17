const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.API_KEY);

const TopHeadLines = async (req, res) => {
   try {
      const { articles } = await newsapi.v2.topHeadlines({
         country: "in",
      })
      res.status(200).send(
         articles
      )
   } catch (error) {
      res.status(500).json({
         message: error.message
      })
   }
}

const CountryTop = async (req, res) => {
   const { id } = req.params
   try {
      const { articles } = await newsapi.v2.topHeadlines({
         country: id,
      })
      res.status(200).send(
         articles
      )
   } catch (error) {
      res.status(500).send(
         error.message
      )
   }

}
const Category = async (req, res) => {
   const { id } = req.params
   try {
      const { articles } = await newsapi.v2.topHeadlines({
         category: id,
      })
      res.status(200).send(
         articles
      )
   } catch (error) {
      res.status(500).send(
         error.message
      )
   }
}
const Search = async (req, res) => {
   const { id } = req.params
   try {
      const { articles } = await newsapi.v2.topHeadlines({
         q: id,
      })
      res.status(200).send(
         articles
      )
   } catch (error) {
      res.status(500).send(
         error.message
      )
   }
}
module.exports = { TopHeadLines, CountryTop, Category, Search }