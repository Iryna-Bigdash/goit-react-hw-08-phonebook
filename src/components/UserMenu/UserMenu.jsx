import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/hooks';
import { LogOutBtn, UserContainer, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserContainer>
      <p>Welcome, <UserName>{user.name}</UserName></p>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
      Logout
      </LogOutBtn>
    </UserContainer>
  );
};