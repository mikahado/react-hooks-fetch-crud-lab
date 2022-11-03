import React from "react";

function AdminNavBar({ onChangePage }) {
  return (
    <nav>
      <button onClick={() => onChangePage("Form")}>New Quest</button>
      <button onClick={() => onChangePage("List")}>View Quest</button>
    </nav>
  );
}

export default AdminNavBar;
