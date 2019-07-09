import React from 'react';
import Post from './Post';

const styles = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap'
  }
};

export default ({ posts }) => {
  return (
    <div className="Grid" style={styles.grid}>
      {posts.map(({ id, ...post }) => {
        return <Post key={id} post={post} />;
      })}
    </div>
  );
};
