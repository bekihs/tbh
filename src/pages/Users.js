import { Link } from "react-router-dom";
import { useGetUsers } from "../hooks/useGetUsers";

function Users() {
  const users = useGetUsers();
  return (
    <div className="users">
      <ul>
        {users?.map(user => <li key={user.user_id}>
          <Link to={"/sessions/" + user.user_id} className='session'>{user.user_name}</Link></li>)}
      </ul>
    </div>
  );
}

export default Users;
