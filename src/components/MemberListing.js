import { useState } from "react";

function MemberListing(props) {
  return (
    <>
      <h3>Üyelerimiz</h3>
      <ul>
        {props.memberProp.map((member) => {
          return (
            <li>
              {member.email}
              <br />
              {member.isim}
              <br />({member.rol})
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MemberListing;
