import Axios from "axios";

export const http = Axios.create({
  baseURL: "https://pbpark.hbird.com.cn/wp-json/v1/pbpark/",
});

export async function getPosts(params) {
  const res = await http.get("posts", { params });
  return res.data;
}
