import { useEffect } from 'react';
import { GlobalStyle } from './Utils/GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ThemeProvider } from 'styled-components';
import { theme } from './Utils/Theme';
import { Layout } from './Layout/Layout';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistor } from 'redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      {/* <PersistGate loading={<div>LOADING...</div>} persistor={persistor}> */}
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <div>LOADING...</div>}
        <ContactList />
        <GlobalStyle />
      </Layout>
      {/* </PersistGate> */}
    </ThemeProvider>
  );
};
