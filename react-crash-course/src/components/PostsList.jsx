import { useState, useEffect } from 'react';
import Post from './Post';
import classes from './PostsList.module.css';
import { useLoaderData } from 'react-router-dom';

function PostsList() {
  const posts = useLoaderData();
  return (
    <>
      {posts.length > 0 &&
        (<ul className={classes.posts}>
          {posts.map((post) => <Post key={post.id} id={post.id} author={post.author} body={post.body} />)}
        </ul>)}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There is not post yet</h2>
          <p>Add post with "New Post"</p>
        </div>
      )}
    </>
  );
}

export default PostsList;