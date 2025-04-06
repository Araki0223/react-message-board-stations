import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPosts, createPost } from "../../utils/threads";

const PostList = () => {
  const { threadId } = useParams(); // URLのパラメータからスレッドIDを取得
  const [posts, setPosts] = useState<Array<{ id: string; post: string }>>([]); // 投稿一覧
  const [newPost, setNewPost] = useState(""); // フォーム入力内容を管理

  // 投稿一覧を取得してstateに保存
  useEffect(() => {
    const fetchData = async () => {
      if (!threadId) return;
      const data = await fetchPosts(threadId);
      setPosts(data.posts);
    };

    fetchData();
  }, [threadId]); // threadIdが変わったら再取得

  // 投稿送信処理
  const handleSubmit = async () => {
    if (!threadId || !newPost.trim()) return;

    // 投稿APIを叩く
    await createPost(threadId, newPost);

    // 投稿後に最新の投稿一覧を再取得
    const updated = await fetchPosts(threadId);
    setPosts(updated.posts);

    // フォーム内容をクリア
    setNewPost("");
  };

  return (
    <div>
      <h2>投稿一覧</h2>

      {/* 投稿リスト表示 */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.post}</li>
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