import React from 'react'
import Background from './components/main/Background';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
  <button onClick={() => navigate('/about')}>Go to About Page</button>
      <Background/>
    
    </div>
  )
}
export default HomePage