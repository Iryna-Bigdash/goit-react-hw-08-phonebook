import React from 'react';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import styled from "@emotion/styled";
import { selectAllUsers } from 'features/users/usersSlice';
import { postAdded } from './postSlice';

const Section = styled.section`
  margin-top: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  margin-bottom: 10px;
`;

const Textarea = styled.textarea`
  padding: 5px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #333;
  color: #fff;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const users = useSelector(selectAllUsers);

  const onTitleChange = e => setTitle(e.target.value);
  const onContentChange = e => setContent(e.target.value);
  const onAuthorChange = e => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded(title, content, userId)
      );
      setTitle('');
      setContent('');
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <Section>
      <h2>Add a new Post</h2>
      <Form>
        <Label htmlFor="postTitle">Post Title</Label>
        <Input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChange}
        />

        <Label htmlFor="postContent">Content:</Label>
        <Textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChange}
        />

        <label htmlFor="postAuthor">Author:</label>
        <select
          id="postAuthor"
          value={userId}
          onChange={onAuthorChange}
        >
          <option value=""></option>
          {usersOptions}
        </select>

        <Button
          type="button"
          onClick={onSavePostClicked}
          disabled={!canSave}
        >
          Save Post
        </Button>
      </Form>
    </Section>
  );
};

export default AddPostForm;
