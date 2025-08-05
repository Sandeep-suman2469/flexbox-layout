import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-container">
       <div className="header">Header</div>
       <div className="middle">
         <div className="article">article</div>
         <div className="nav">Aside</div>
         <div className="aside">Nav</div>
       </div>
       <div className="footer">footer</div>
    </div>
  );
}
