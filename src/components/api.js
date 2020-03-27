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
    return data.article;
  });
};

export const getComments = id => {
  return axios.get(`${baseURL}/articles/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const changeVotes = (id, direction, type) => {
  let component = "";
  type ? (component = "articles") : (component = "comments");
  return axios
    .patch(`${baseURL}/${component}/${id}`, { inc_votes: direction })
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
  if (direction) direction = "desc";
  if (!direction) direction = "asc";
  return axios
    .get(`${baseURL}/articles?sort_by=${sortVal}&&order=${direction}`)
    .then(({ data }) => {
      return data;
    });
};

export const addComment = (id, postComment, user) => {
  return axios
    .post(`${baseURL}/articles/${id}/comments`, {
      username: user,
      body: postComment
    })
    .then(res => {
      return res.data;
    });
};

export const deleteComment = id => {
  return axios.delete(`${baseURL}/comments/${id}`).then(res => {
    return res;
  });
};
export const getUsers = user => {
  return axios.get(`${baseURL}/users/${user}`).then(({ data }) => {
    return data;
  });
};
