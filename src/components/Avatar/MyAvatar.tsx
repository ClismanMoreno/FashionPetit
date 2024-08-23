import React, { useState, useEffect } from 'react';
import Avvvatars from 'avvvatars-react';

const MyAvatar: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user');
      if (user) {
        const parsedUser = JSON.parse(user);
        setUserEmail(parsedUser.email);
      }
    }
  }, []);

  return <>{userEmail && <Avvvatars value={userEmail} style="shape" />}</>;
};

export default MyAvatar;
