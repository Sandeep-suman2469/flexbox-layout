import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-container">
       <div className="header">Header</div>
       <div className="middle">
         <div className="article">article</div>
         <div className="aside">Aside</div>
         <div className="nav">Nav</div>
       </div>
       <div className="footer">footer</div>
    </div>
  );
}
