'use client';
import React from 'react';

// propsでpage.tsxでthrowしたErrorオブジェクトを受け取ることができる
// const Error = ({ error }: { error: Error }) => {
// page.tsxも"use client"を追加しておくことでreset関数を使ったリカバリーが使用できる
const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      読み込みエラーです<p>{error.message}</p>
      <button onClick={reset}>再読み込み</button>
    </div>
  );
};
export default Error;
