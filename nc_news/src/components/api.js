import axios from "axios";

const baseURL = "https://rh-nc-news-api.herokuapp.com/api";

export const getArticles = topic => {
  return axios
    .get(`${baseURL}/articles/`, { params: { topic: topic } })
    .then(({ data }) => {
      return data;
    });
};

export const getSingleArticle = id => {
  return axios.get(`${baseURL}/articles/${id}`).then(({ data }) => {
    return data;
  });
};

export const getComments = id => {
  return axios.get(`${baseURL}/articles/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const changeVotes = (id, direction) => {
  const patchObj = [{ inc_votes: 1 }, { inc_votes: -1 }];
  if (direction === "up") {
    return axios
      .patch(`${baseURL}/articles/${id}`, patchObj[0])
      .then(({ data }) => {
        return data.article;
      });
  } else
    return axios
      .patch(`${baseURL}/articles/${id}`, patchObj[1])
      .then(({ data }) => {
        return data.article;
      });
};

export const getTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data;
  });
};

export const getSortedArticles = (sortVal, direction) => {
  if (direction) direction = "asc";
  if (!direction) direction = "desc";
  return axios
    .get(`${baseURL}/articles?sort_by=${sortVal}&&order=${direction}`)
    .then(({ data }) => {
      return data;
    });
};
