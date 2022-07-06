import { useSelector } from 'react-redux';
import { Redirect, Route, useHistory } from 'react-router-dom';

const ProtectedRoute = ({ 
  anonymousOnly = false, 
  authOnly = false,
  hasParrentPage = false,
  ...rest }
  ) => {

  const history = useHistory();
  const { isAuthChecked, data } = useSelector((store) => store.user);

  if(hasParrentPage) {
    if(history.location.state) {
      if(hasParrentPage !== history.location.state.from) {
        return <Redirect to={hasParrentPage} />
      }
    } else {
      return <Redirect to={hasParrentPage} />
    }
  }

  if(anonymousOnly && data) {
    return <Redirect to="/" />
  }

  if(authOnly && (isAuthChecked && !data)) {
    return <Redirect to="/login" />
  }

  return <Route {...rest} />;
}

export default ProtectedRoute;
