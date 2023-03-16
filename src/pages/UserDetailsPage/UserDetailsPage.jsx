import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { getUserById, deleteUserById } from 'redux/users/usersOperations';
import { selectUserById } from 'redux/users/usersSelectors';

const UserDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);

  const user = useSelector(selectUserById);

  const handleDelete = () => {
    dispatch(deleteUserById(id));
    navigate('/users');
  };
  return (
    <>
      {user && (
        <div>
          <button type="button" onClick={() => navigate('/users')}>
            Go back
          </button>
          <h2>User Details</h2>
          <img src={user.avatar} alt={user.name} />
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.address}</p>
          <button type="button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </>
  );
};

export default UserDetailsPage;
