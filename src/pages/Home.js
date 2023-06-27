import PostsList from "features/post/PostsList";
import AddPostForm from "features/post/AddPostForm";
import { useAuth } from "hooks/hooks";

const styles = {
    container: {
      minHeight: 'calc(100vh - 50px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontWeight: 500,
      fontSize: 48,
      textAlign: 'center',
    },
  };
  
  export default function Home() {
    const { isLoggedIn } = useAuth();
    return (
      <div style={{textAlign: 'center'}}>
        <h1 style={styles.title}>
          Contacts manager welcome page{' '}
        </h1>
        {isLoggedIn ? (
          <>
        <AddPostForm/>
        < PostsList />
        </>) : < PostsList />}
      </div>
    );
  }    

