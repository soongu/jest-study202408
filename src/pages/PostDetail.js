import React from 'react';
import { useLoaderData } from 'react-router-dom';

export const loader = async ({ params }) => {
  // 예제용으로 간단한 데이터를 로드합니다.
  const postId = params.postId;
  const post = { id: postId, title: `Post Title ${postId}`, content: `This is the content for post ${postId}.` };
  return post;
};

const PostDetail = () => {
  const post = useLoaderData();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;
