import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/auth';
import { register } from '../api/user';

function RegisterPage() {

    const history = useHistory();
    const { setAuthTokens } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
        const response = await register(username, password);
        setAuthTokens(response.data);
        history.push('/');
        } catch (error) {
        setError(error.response.data.message);
        }
    };
    
    return (
        <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
        {error && <p>{error}</p>}
        </div>
    );
    }

export default RegisterPage;