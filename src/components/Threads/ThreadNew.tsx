import { useState } from "react";
import { createThread } from "../../utils/threads";
import { useNavigate } from "react-router-dom"; // ← 登録後にトップページに戻すために必要

const ThreadNew = () => {
  const [title, setTitle] = useState(""); // 入力されたタイトルを保存するstate
  const navigate = useNavigate(); // 画面遷移に使うReact Routerの関数

  const handleSubmit = async () => {
    try {
      await createThread(title); // スレッドを作成
      navigate("/"); // トップページに遷移（スレッド一覧へ）
    } catch (err) {
      console.error("スレッドの作成に失敗しました", err);
    }
  };

  return (
    <div>
      <h2>スレッド新規作成</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button type="submit">作成</button>
      </form>
    </div>
  );
};

export default ThreadNew;