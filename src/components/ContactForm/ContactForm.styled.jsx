import styled from '@emotion/styled';

const ContactFormContainer = styled.div`
  padding: 40px;
  text-align: center;
`;

const ContactFormTitle = styled.h2`
  margin-bottom: 20px;
  color: purple;
`;

const BtnForm = styled.button`
  font-weight: bold;
  font-size: 18px;
  color: #8b54c1;
  border: 1px solid #8b54c1;
  background-color: inherit;
  padding: 6px;
  border-radius: 5%;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  &:focus,
  &:hover {
    color: purple;
  }
`;

export { ContactFormContainer, ContactFormTitle, BtnForm };
