// @ts-check
import axios from "axios";
import { BASE_URL } from "../const";

/**
 * スレッド一覧を取得する（１０件ずつ）
 * @param offset 何件目から取得するか（デフォルト：0）
 * @returns スレッドのリスト
 */
export const fetchThreads = async (offset: number = 0) => {
    try {
        const response = await axios.get(`${BASE_URL}/threads?offset=${offset}`);
        return response.data; // スレッド一覧を返す
    } catch (error) {
        console.error("スレッド一覧の取得にし敗しました", error);
        throw error;
    }
};

/**
 * スレッドを作成する
 * @param title スレッドのタイトル
 * @returns 作成したスレッドの情報
 */
export const createThread = async (title: string) => {
    const res = await axios.post(`${BASE_URL}/threads`, { title });
    return res.data;
};

export const fetchPosts = async (threadId: string, offset: number = 0) => {
  const res = await axios.get(`${BASE_URL}/threads/${threadId}/posts?offset=${offset}`);
  return res.data;
};

/**
 * 指定したスレッドに投稿を作成する
 * @param threadId 投稿するスレッドのID
 * @param post 投稿内容
 */
export const createPost = async (threadId: string, post: string) => {
  const response = await axios.post(
    `${BASE_URL}/threads/${threadId}/posts`, // ← URLを完成させよう
    {
      post: post // ← ボディの中身
    }
  );

  return response.data; // ← 必要ならレスポンスデータを返す
};