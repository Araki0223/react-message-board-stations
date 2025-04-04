// @ts-check
import axios from "axios";
const BASE_URL = "https://railway.bulletinboard.techtrain.dev";

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
    try {
        const response = await axios.post('${BASE_URL}/threads', { title });
        return response.data; // 作成したスレッドの情報を返す
    } catch (error) {
        console.error("スレッドの作成に失敗しました", error);
        throw error;
    }
};