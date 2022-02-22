import axios from "axios";

const key = '24781518-e1a8cace8e42cfd12d2f64e58';
axios.defaults.baseURL = "https://pixabay.com/";

export const fetchArticlesWithQuery = async (page,search) => {
  const response = await axios.get(`api/?q==${search}&page=${
    page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`);
  return response.data;
};

export default {
  fetchArticlesWithQuery,
};