import { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h2 className="mb-5 text-3xl font-bold text-gray-700">Login</h2>
      <form onSubmit={handleSubmit} className="p-5 bg-white rounded shadow-md">
        <label className="block mb-2">
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
        </label>
        <label className="block mb-2">
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
        </label>
        <button type="submit" className="w-full px-3 py-2 mt-3 text-white bg-blue-600 rounded-md hover:bg-blue-500">Submit</button>
      </form>
    </div>
  );
}

export default LoginPage;