import { useEffect, useState } from 'react';
import { useAuth } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';

function NavBar() {
  const { session } = useAuth();
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    if (session) {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  }, [session]);

  const { signOut } = useAuth();
  return (
    <div>
      {isSignedIn ? 
      <div className='container sm mx-auto mb-6'>
      <div className="navbar bg-base-100 shadow-lg shadow-black-800/50 ">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to="/home">Home</Link>
        
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost" onClick={signOut}>
          Sign Out
        </button>
      </div>
      </div>
      </div>
        
        
        : <></>}
    </div>
  );
}

export default NavBar;
