import { useState } from "react";
import PostsList from "../components/PostsList";

function Posts() {
  const [modalIsVisible, setModalIsVisible] = useState(true); 

  return ( 
    <>
      <main>
        <PostsList />
      </main>
    </>
  )
}

export default Posts;
