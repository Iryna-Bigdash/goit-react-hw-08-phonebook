import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import styled from "@emotion/styled";
import React from 'react';
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const Container = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid whitesmoke;
  background-color: white;
  margin-bottom: 20px;
  border-radius: 4px;
`;

const Title = styled.h3`
  color: #333;
  font-size: 18px;
  font-weight: bold;
`;

const Content = styled.p`
  color: #666;
  font-size: 16px;
`;

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderedPost = orderedPosts.map(post => (
    <Article key={post.id}> 
      <Title>{post.title}</Title>
      <Content>{post.content.substring(0, 100)}</Content>
      <p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
       < ReactionButtons post={post}/>
    </Article>
  ));

  return ( 
    <Container>
      <h2>PostsList</h2>
      {renderedPost}
    </Container>
  );
};

export default PostsList;