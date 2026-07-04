import { useParams } from "react-router-dom";
import { useState } from "react";
export default function Project() {
    const { id } = useParams();
    const [content, setContent] = useState("// Start codin here...");
    return (<div className="min-h-screen bg-zinc-950 text-white p-8"><div className="max-w-gxl mx-auto"><h1 className="text-2xl font-bold mb-6">Project ID: {id}</h1><textarea value={content} onChange={(e) => setContent(e.target.value)} className="w-full h-96 bg-zinc-900 p-4 rounded-xl font-mono text-sm" /><button onClick={() => alert("Demo save successful")} className="mt-4 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg">Save</button></div></div>);
}