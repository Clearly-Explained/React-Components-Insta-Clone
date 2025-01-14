import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
      {/* map through the comments prop (line 12) and render a Comment for every piece of data (line 13) */}
      {comments.map((comment, index) => {
        return <Comment key={index} comment={comment} />
      })}
    </div>
  );
};

export default Comments;
