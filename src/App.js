import { useState } from "react";
import "./App.css";
import MemberListing from "./components/MemberListing";

function App() {
  const [memberList, setMemberList] = useState([
    {
      isim: "Baran",
      email: "baran@google.com",
      rol: "Mobile",
    },
  ]);
  return (
    <div className="App">
      <header>
        {memberList.length === 0 ? (
          <div>Henüz bir üyemiz yok</div>
        ) : (
          <MemberListing memberProp={memberList} />
        )}
      </header>
    </div>
  );
}

export default App;
