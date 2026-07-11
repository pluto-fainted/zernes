import { useParams } from "react-router-dom";
import { useState } from "react";
export default function Project() {
    const { id } = useParams();
    const [content, setContent] = useState("// Start codin here...");return (<div style={{padding:"40px"}}><h2 style={{marginBottom:"20px"}}>Project ID: {id}</h2><textarea value={content} onChange={(e) => setContent(e.target.value)} style={{width:"100%",height:"450px",padding:"16px",fontFamily:"monospace",fontSize:"14px",background:"#0f172a",color:"#f1f5f9",border:"1px solid #334155",borderRadius:"8px"}} /><button onClick={() => alert("Saved successful")} style={{marginTop:"20px",padding:"10px 20px",background:"#3b82f6",border:"none",borderRadius:"6px",color:"white"}}>Save</button></div>);}