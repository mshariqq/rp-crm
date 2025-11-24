import { useState, useEffect, useContext } from "react";
import { AppContext } from "../AppProvider";
import { Input } from "../components/Form/Input";
import { Helmet } from "react-helmet";
import { Navigate, useNavigate } from "react-router-dom";

export function Login(){

    const {login, user} = useContext(AppContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // 👈 use navigate
    const [error, setError] = useState({
        show : 'd-none',
        error: null
    });

    useEffect(() => {
        if(user){
            navigate('/');
        }
    }, [user]);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePass = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = async (e) => {
        try {
            await login(email, password);
            navigate('/');
            
        } catch (error) {
             setError({
                show: "",
                error: error.message || "Login failed"
            });
        }
    }

    return (
        <>
        <Helmet>
            <title>Login | RP CRM</title>
        </Helmet>
        <div className="card shadow border-0 mt-5">
            <div className="card-body d-flex flex-column">

                <p className={`text-danger ${error.show}`  }>{error.error}</p>

                <Input onChange={handleEmail} type="email" label='Your Email' value={email} placeholder="Ex: john@email.com" />
                <span className="p-2"></span>

                <Input type="password" onChange={handlePass} label="Your Password" value={password} placeholder='********' />
                <span className="p-2"></span>

                <Input type="checkbox" name="rememberPassword" className="mx-2" label='Remember Password' />
                <span className="p-3"></span>

                <button onClick={handleLogin} className="btn btn-primary">Login</button>

            </div>
        </div>
        </>
    );
}