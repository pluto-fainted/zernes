import { Routes, Route, Navigate } from "react-router-dom";
import Project from "./pages/Project";
function Login() {
  return <div style={{ padding: 40 }}>Login Page</div>;
}
function Dashboard() {
  return <div style={{ padding: 40 }}>Dashboard</div>;
}
export default function App() {
  return (<Routes><Route path="/" element={<Navigate to="/login" />} /><Route path="/login" element={<Login />} /><Route path="/dashboard" element={<Dashboard />} /><Route path="/project/:id" element={<Project />} /></Routes>);
}