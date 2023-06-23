import styled from '@emotion/styled';

const FormContainer = styled.div`
  margin: 0 auto;
  min-width: 300px;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const SubmitButton = styled.button`
  width: 180px;
  padding: 8px;
  align-self: center;
  font-size: 20px;
  color: #8b54c1;
  border: none;
  border-radius: 5%;
  background-color: white;
  cursor: pointer; 
  transition: background-color 0.3s ease-in-out;
      &:focus,
      &:hover {
        background-color: #e7e6e6;
      }
`;
export { FormContainer, Title, StyledForm, SubmitButton };