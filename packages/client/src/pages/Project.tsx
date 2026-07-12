import { useParams } from "react-router-dom";
import { useState } from "react";
import Editor from "@monaco-editor/react";
export default function Project() {
  const { id } = useParams();
  const [code, setCode] = useState(`Start typing..`);
  return (<div style={{height:"100vh",display:"flex", flexDirection:"column"}}>
      <div style={{padding:"16px 24px",background:"rgba(17,24,39,0.9)",backdropFilter:"blur(8px)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <h3 style={{margin:"0"}}>Project {id}</h3>
            <button onClick={() => alert("save success")} style={{ padding: "8px 16px", background: "#2563eb", border: "none", borderRadius: "6px", color: "white", }}>Save</button></div>
        <Editor height="100%" defaultLanguage="javascript" theme="vs-dark" value={code} onChange={(value) => setCode(value || "")} options={{ fontSize: 14, minimap: { enabled: false }, smoothScrolling: true, padding: { top: 10 }, }} /></div>);
}