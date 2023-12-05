import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const createUser = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    console.log(data, error);
    if (!error) {
      navigate('/home');
    } else {
      alert(error.message);
    }
  };

  const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(data, error);
    if (!error) {
      navigate('/home');
    } else {
      alert(error.message);
    }
  };

  return (
    <div>
      <div className="flex flex-col w-full max-w-md mx-auto mt-8 p-4 rounded-lg shadow-lg shadow-blue-500/50">
        <h2 className="text-center mb-4 text-xl font-bold">Register/Login</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={createUser}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
          <button
            onClick={login}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
      </div>




    </div>


  );
}

export default Login;
