import categories from "../categories";

const requests =
	{
		fetchTopHeadlines: `/everything?q=apple&from=2021-09-23&to=2021-09-23&sortBy=popularity&apikey=${process.env.REACT_APP_API_KEY}`,
		fetchTopInHeadlines: `/top-headlines?country=in`,
		fetchBusiness: `/everything?q=business`,
		fetchGeneral: `/top-headlines?country=in&category=${categories}`
	}
export default requests;

