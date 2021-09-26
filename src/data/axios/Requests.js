import categories from "../categories";

const requests =
	{
		fetchTopHeadlines: `/everything?q=apple&f&sortBy=popularity`,
		fetchTopInHeadlines: `/top-headlines?country=in`,
		fetchBusiness: `/everything?q=business`,
		fetchGeneral: `/top-headlines?country=in&category=${categories}`
	}
export default requests;

