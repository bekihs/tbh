import { Link, useParams } from "react-router-dom";
import { useGetSessions } from "../hooks/useGetSessions";

function Sessions() {
    const { userId } = useParams();
    const sessions = useGetSessions();
    return (
        <div className="sessions">
            <ul>
            {sessions?.map(s=><li key={s.session_id}><Link to={`/session/${userId}/${s.session_id}`} className='session'>{s.session_title}</Link></li>)}
  
            </ul>
        </div>
    );
}

export default Sessions;
