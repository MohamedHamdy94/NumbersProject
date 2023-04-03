import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NHOC = (Components) => {
  const navigate = useNavigate();

  function NewComponent() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    useEffect(() => {
      if (userInfo) {
        return;
      } else {
        navigate('/login');
      }
    }, [userInfo]);

    return <Components />;
  }
  return NewComponent;
};

export default NHOC;
