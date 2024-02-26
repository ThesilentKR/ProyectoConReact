import { useState, useEffect } from 'react';
import './UserCard.css';

const UserCard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        setUser(data.results[0]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="card">
      {user && (
        <div className="card-body">
          <img
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
            className="card-img-top mb-3 ProfileImage rounded-circle"
          />
          <h5 className="card-title ProfileName">{`${user.name.first} ${user.name.last}`}</h5>
          <p className="card-text ProfileEmail">{`Email: ${user.email}`}</p>
          <p className='card-text ProfileLocation'>{`Calle: ${user.location.street.name} `}</p>
          <p className='card-text ProfileLocation'>{`Numero: ${user.location.street.number} `}</p>
          <p className='card-text ProfileLocation'>{`Pais: ${user.location.country}`}</p>
          <p className='card-text ProfilePhone'>{`Telephono fijo: ${user.phone}`}</p>
          <p className='card-text ProfilePhone'>{`Numero de telefono: ${user.cell}`}</p>
          <p className='card-text ProfilePhone'>{`Username: ${user.login.username}`}</p>
          <p className='card-text ProfilePhone'>{`Password: ${user.login.password}`}</p>
        </div>
      )}
    </div>
  );
};

export default UserCard;
