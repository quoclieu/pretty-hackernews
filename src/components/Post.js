import React from 'react';

const styles = {
  post: {
    width: '300px',
    margin: '20px'
  },
  someImg: {
    backgroundColor: 'red',
    height: '200px',
    width: '200px'
  }
};

export default ({ post }) => {
  const { url, title } = post;
  return (
    <section style={styles.post}>
      <div style={styles.someImg} />
      <h3>{title}</h3>
      <a href={url}>Click here</a>
    </section>
  );
};
