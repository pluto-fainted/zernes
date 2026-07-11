import { useNavigate } from "react-router-dom";
export default function Dashboard() {
    const navigate = useNavigate();
    const projects = [
        { id: "1", name: "Zernes Project" },
        { id: "2", name: "HackClub Project" },
        { id: "3", name: "idk some other project" }
    ];
    return (<div style={{padding:"40px"}}><div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"40px"}}><h1 >Zernes</h1><button onClick={() => { localStorage.removeItem("token"); navigate("/login"); }} style={{background:"transparent",border:"1px solid #334155",padding:"8px 16px",borderRadius:"6px",color:"#f1f5f9"}}>Logout</button></div> <h2 style={{marginBottom:"20px"}}>Your Projects</h2><div style={{display:"grid",gap:"20px"}}>{projects.map((project) => (<div key={project.id} onClick={() => navigate(`/project/${project.id}`)} style={{background:"#1e293b",padding:"20px",borderRadius:"10px",cursor:"pointer"}}>{project.name}</div>))}</div></div>);
}