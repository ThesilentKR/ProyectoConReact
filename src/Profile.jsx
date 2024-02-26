import { useState } from 'react';
import UserCard from './component/UserCard';
import './styles/Profile.css';

const Profile = () => {
    const [userKey, setUserKey] = useState(1); 

    const handleNewUser = () => {
        setUserKey(prevKey => prevKey + 1); 
    };

    return (
        <div className="container mt-4 text-center">
        <div className='ProfileTitleContenedor mt-4'>
            <h1 className="ProfileTitle">Mi Perfil de Facebook</h1>
        </div>
            <UserCard key={userKey} />
            <button className="btn btn-primary mt-3" onClick={handleNewUser}>
                Mostrar otro perfil
            </button>
        </div>
    );
};

export default Profile;