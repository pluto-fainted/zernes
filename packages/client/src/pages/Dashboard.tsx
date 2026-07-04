import { useNavigate } from "react-router-dom";
export default function Dashboard() {
    const navigate = useNavigate();
    const projects = [
        { id: "1", name: "Zernes Demo" },
        { id: "2", name: "HackClub Project" },
        { id: "3", name: "idk some other project" }
    ];
    return (
        <div className="min-h-screen bg-zinc-950 text-white p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-4xl font-bold tracking-tight">Zernes</h1>
                    <button onClick={() => { localStorage.removeItem("token"); navigate("/login"); }} className="text-zinc-400 hover:text-white">Logout</button>
                </div> <h2 className="text-2xl font-semibold mb-6">Your Projects</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{projects.map((project) => (<div key={project.id} onClick={() => navigate(`/projects/${project.id}`)} className="bg-zinc-900 hover:bg-zinc-800 p-6 rounded-2xl cursor-pointer transition-all border border-zinc-800 hover:border-zinc-700"><h3 className="text-xl font-medium">{project.name}</h3><p className="text-xinc-500 text-sm mt-2">Click to open editor</p></div>))}
                </div>
            </div>
        </div>);
}