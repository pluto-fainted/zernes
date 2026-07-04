const handleLogin = () => {
    localStorage.setItem("token", "demo-token");
    navigate("/dashboard");
};