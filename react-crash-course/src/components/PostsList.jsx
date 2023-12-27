import { useState, useEffect } from 'react';
import Post from './Post';
import NewPost from '../routes/NewPost';
import classes from './PostsList.module.css';
import Modal from './Modal';

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch('http://localhost:8080/posts');
      const data = await response.json();
      setPosts(data.posts);
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  let modalContent = null;
  if (isPosting) {
    modalContent = (
      <Modal onClose={onStopPosting}>
        <NewPost
          onCancel={onStopPosting}
          onAddPost={addPostHandler}
        />
      </Modal>
    );
  }

  return (
    <>
      {modalContent}
      {!isFetching && posts.length > 0 &&
        (<ul className={classes.posts}>
          {posts.map((post, index) => <Post key={index} author={post.author} body={post.body} />)}
        </ul>)}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There is not post yet</h2>
          <p>Add post with "New Post"</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <p>Loading posts...</p>
        </div>
      )}
    </>
  );
}

export default PostsList;