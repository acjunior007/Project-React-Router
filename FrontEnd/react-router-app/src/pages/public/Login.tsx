import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        // Simulate .NET API response
        const fakeToken = "fake-jwt-token-from-api";
        const role = email === "admin@example.com" ? "admin" : "user";

        const successlogin = login(fakeToken, email, role);
        if (successlogin)   
            navigate("/dashboard");

    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 bg-white mx-auto mt-4 p-4 rounded w-80" >
            <h1 className="bg-slate-500 p-2 rounded text-white text-center">Login</h1>

            <input className="bg-slate-100 p-2 rounded"
             type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input className="bg-slate-100 p-2 rounded" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

            <button type="submit" className="bg-blue-500 p-2 rounded text-white">Login</button>
        </form>
    )

}