import { NavLink} from 'react-router-dom';
import { useAuth } from 'hooks/hooks';

 export const Navigation = () => {
    const { isLoggenIn } = useAuth();

    return(
        <nav>
            <NavLink to='/'>
                Home
            </NavLink>
            {isLoggenIn && (
                <NavLink to='/contacts'>
                    Contacts
                    </NavLink>
            )}
        </nav>
    )
  
}
 