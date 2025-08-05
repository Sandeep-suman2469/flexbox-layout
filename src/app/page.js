import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-container">
       <div className="header"><span style={{ padding:'7px' }}>Header</span></div>
       <div className="middle">
         <div className="article"><span style={{ padding:'7px' }}>article</span></div>
         <div className="aside"><span style={{ padding:'7px' }}>Aside</span></div>
         <div className="nav"><span style={{ padding:'7px' }}>Nav</span></div>
       </div>
       <div className="footer"><span style={{ padding:'7px' }}>footer</span></div>
    </div>
  );
}
