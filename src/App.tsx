// import React from "react";
// import ____ from "react"; // React の基本的な機能を使うための import
import ThreadList from "./components/ThreadList"; // スレッド一覧コンポーネントをインポート

const App = () => { // コンポーネントの定義
  return (
    <div> {/* React のルート要素（フラグメントを使うか div にするか？） */}
      <h2>スレッド掲示板</h2> {/* 見出しを追加 */}
      <ThreadList /> {/* スレッド一覧コンポーネントを表示 */}
    </div>
  );
};

export default App; // App コンポーネントをエクスポート