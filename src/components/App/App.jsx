
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Container, Title } from './App.styled';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { getError, getIsLoading } from "redux/selectors";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
<>
  <Container>
    <Title>Phonebook</Title>
    <ContactForm />    
    <Title>Contacts</Title>
    <Filter />
    {isLoading && !error && <b>Request in progress...</b>}
    <ContactList />
  </Container>
</>
  );
};

export default App;
