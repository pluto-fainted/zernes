import { useNavigate } from "react-router-dom";
export default function Login() {
    const navigate = useNavigate();
    const handleLogin = () => {
        localStorage.setItem("token", "demo-token");
        navigate("/dashboard");
    };
    return (<div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}><div style={{ width: "350px", padding: "40px", background: "#1e293b", borderRadius: "12px", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}><h1 style={{ marginBottom: "30px" }}>Zernes</h1><button onClick={handleLogin} style={{ width: "100%", padding: "14px", background: "#3b82f6", border: "none", borderRadius: "8px", color: "white", fontSize: "16px" }}>Login</button></div></div>);
}