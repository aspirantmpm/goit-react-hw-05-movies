import { useNavigate } from 'react-router-dom';
import { Message } from '../components/Globalstyle';

const NotFound = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/');
  }, 2000);
  return <Message>Page not found</Message>;
};

export default NotFound;
