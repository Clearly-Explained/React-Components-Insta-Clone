/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, {useState} from 'react';
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
import Posts from "./components/Posts/Posts";
import SearchBar from "./components/SearchBar/SearchBar";
// Import the dummyData
import './App.css';
import dummyData from "./dummy-data";

const App = () => {
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**. See line 21.
  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.

  const [posts, setPosts] = useState(dummyData);
  const likePost = postId => {
    /*
      This function serves the purpose of increasing the number of likes by one, of the post with a given id.

      The state of the app lives at the top of the React tree, but it wouldn't be fair for nested components not to be able to change state!
      This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.

      Invoke `setPosts` and pass as the new state the invocation of `posts.map`. (line 34)
      The callback passed into `map` performs the following logic:
        - if the `id` of the post matches `postId` (line 35), return a new post object with the desired values (use the spread operator)(line 36).
        - otherwise just return the post object unchanged (line 37 & 38).
     */
    setPosts(posts.map((data) => {
      if (data.id === postId) {
        return { ...data, likes: data.likes + 1 }
      } else {
        return data
      }
    }))
  };

  return (
    <div className='App'>
      {/* Add SearchBar and Posts here to render them (next line)*/}
      <SearchBar />
      <Posts likePost = {likePost} posts = {posts} />
      {/* Check the implementation of each component, to see what props they require, if any! (Posts requires likePost and posts*/}
    </div>
  );
};

export default App;
