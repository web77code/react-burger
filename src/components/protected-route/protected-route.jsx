import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ 
  anonymousOnly = false, 
  authOnly = false, 
  ...rest }
  ) => {

  const { isAuth } = useSelector((store) => store.auth);

  if(anonymousOnly && isAuth) {
    return <Redirect to="/" />
  }

  if(authOnly && !isAuth) {
    return <Redirect to="/login" />
  }

  return <Route {...rest} />;
}

export default ProtectedRoute;
