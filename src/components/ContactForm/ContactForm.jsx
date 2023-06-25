import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import styled from '@emotion/styled';
import {
  BtnForm,
  ContactFormContainer,
  ContactFormTitle,
} from './ContactForm.styled';

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  label {
    margin-bottom: 5px;
    color: purple;
  }
  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .error-message {
    color: red;
    margin-top: 5px;
  }
`;


export default function ContactForm() {
  const initialState = { name: '', number: '' };
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Name may contain only letters, apostrophe, dash, and spaces.'
      )
      .required('Name is required'),
    number: Yup.string()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Phone number must be digits and can contain spaces, dashes, parentheses, and can start with +'
      )
      .required('Phone number is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    if (contacts.find(contact => contact.number === number)) {
      toast.error(`${number} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
    resetForm();
  };

  return (
    <ContactFormContainer>
      <ContactFormTitle>Add a new contact</ContactFormTitle>
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormField>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage
              component="div"
              name="name"
              className="error-message"
            />
          </FormField>

          <FormField>
            <label htmlFor="number">Number</label>
            <Field type="text" id="number" name="number" />
            <ErrorMessage
              component="div"
              name="number"
              className="error-message"
            />
          </FormField>

          <BtnForm type="submit">
            Add contact
          </BtnForm>
        </Form>
      </Formik>
      <ToastContainer />
    </ContactFormContainer>
  );
}
