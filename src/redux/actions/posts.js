import axios from "axios";

export function getPosts(data) {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
  // return axios.get("https://dummyjson.com/products");
}

export function deletePost(query = "") {
  return axios.delete("https://jsonplaceholder.typicode.com/posts/1");
}
