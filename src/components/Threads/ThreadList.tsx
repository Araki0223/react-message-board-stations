import { useEffect, useState } from "react";
import { fetchThreads } from "../../utils/threads"; // スレッド一覧取得の関数をインポート
import { useNavigate } from "react-router-dom";

const ThreadList = () => {
  const [threads, setThreads] = useState<Array<{ id: string; title: string }>>([]); // 初期値を空配列に設定
  const navigate = useNavigate(); // 画面遷移に使うReact Routerの関数

  useEffect(() => {
    // スレッド一覧を取得して state にセット
    const fetchData = async () => {
      try {
        const data = await fetchThreads();
        // console.log("API レスポンス:", data); // デバッグ用ログ

        if (Array.isArray(data)) {
          setThreads(data); // 正常な配列なら state を更新
        } else {
          console.error("エラー: API から配列ではないデータが返ってきました", data);
        }
      } catch (error) {
        console.error("スレッド一覧の取得に失敗しました", error);
      }
    };

    fetchData();
  }, []);

  const handleCreateThread = () => {
    navigate("/threads/new"); // スレッド新規作成画面に遷移
  };

  return (
    <div>
      <h2>スレッド一覧</h2>
      <button onClick={handleCreateThread}>新規作成</button>
      <ul>
        {Array.isArray(threads) ? (
          threads.map((thread) => (
            <li key={thread.id}>{thread.title}</li>
          ))
        ) : (
          <p>データの取得に失敗しました</p>
        )}
      </ul>
    </div>
  );
};

export default ThreadList;