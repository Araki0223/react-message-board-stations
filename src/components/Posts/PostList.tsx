import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // ← ルーティングに必要なパッケージをインポート
import { fetchPosts, createPost } from "../../utils/threads"; // ← 投稿一覧取得の関数をインポート

const PostList = () => {
  const { threadId } = useParams(); // ← パラメータ名を記入
  const [posts, setPosts] = useState<Array<{id: string, post: string}>>([]); // ← 型と初期値を記入
  const [newPost, setNewPost] = useState(""); // ← 初期値を入れよう

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(threadId){
        const data = await fetchPosts(threadId); // ← 引数を記入
        setPosts(data.posts); // ← データから取り出すキーを記入
        }
      } catch (error) {
        console.error("投稿の取得に失敗しました", error);
      }
    };

    fetchData();
  }, [threadId]); // ← 依存配列を記入

  const handleSubmit = async () => {
    if (!threadId || !newPost.trim()) return;

    await createPost(threadId, newPost); // ← 引数を入れよう

    const updated = await fetchPosts(threadId); // 再取得
    setPosts(updated.posts);

    setNewPost(""); // ← フォームをリセット
  };

  return (
    <div>
      <h2>投稿一覧</h2>

      {/* 投稿リスト表示 */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.post}</li> // ← 表示したい内容を記入
        ))}
      </ul>

      {/* 投稿フォーム */}
      <div>
        <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="投稿内容を入力"
        />
        <br />
        <button onClick={handleSubmit}>送信</button>
      </div>
    </div>
  );
};

export default PostList;