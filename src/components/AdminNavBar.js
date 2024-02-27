import React from "react";

function AdminNavBar({ onChangePage }) {
 
  
  return (
    <nav>
      <button onClick={() => onChangePage("Form")}>New Question</button>
    </nav>
      );
}

export default AdminNavBar;