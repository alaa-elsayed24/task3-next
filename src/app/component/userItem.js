'use client';

import Link from "next/link";

export function UserItem({ user, onDelete }) {
  return (
    <li className="list-group-item mt-5 shadow-lg p-4 rounded-4">
      <h2 className="text-black d-inline-block">user name :- </h2> 
      <p className="d-inline-block fs-4">{user.name}</p>
      <hr />
      <h2 className="text-black d-inline-block">user email:-</h2>
      <p className="d-inline-block fs-4">{user.email}</p>
      <br />
      <button className="btn btn-danger me-3" onClick={() => onDelete(user._id)}>
        delete
      </button>
       <Link href={`/edit/${user._id}`} className="btn btn-warning me-3">edit</Link>
    </li>
  );
}
