import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-container">
       <div className="header"><span style={{ padding:'20px'}}>Header</span></div>
       <div className="middle">
         <div className="article"><span style={{ padding:'20px' }}>article</span></div>
         <div className="aside"><span style={{ padding:'20px' }}>Aside</span></div>
         <div className="nav"><span style={{ padding:'20px' }}>Nav</span></div>
       </div>
       <div className="footer"><span style={{ padding:'20px' }}>footer</span></div>
    </div>
  );
}
