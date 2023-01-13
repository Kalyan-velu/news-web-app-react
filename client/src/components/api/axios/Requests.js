import categories from "../categories";

const requests =
	{
		fetchTopHeadlines: `/api/top-headlines`,
		fetchSearch: `/everything?q=`,
		fetchTopInHeadlines: `/top-headlines?country=in`,
		fetchBusiness: `/everything?q=business`,
		fetchGeneral: `/top-headlines?country=in&category=${categories}`
	}
export default requests;

