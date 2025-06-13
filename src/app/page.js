'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { UserItem } from "./component/userItem";

export default function HomePage() {
  const [users, setUsers] = useState([]);

  // Fetch users from API on first load
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("/api/users");
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  // Delete user by id
  const deleteUser = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;

    const res = await fetch(`/api/users/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
    } else {
      alert("Failed to delete user");
    }
  };

  return (
    <main className="container mt-5">
      <h1 className="mb-4">All Users</h1>
      <Link href="/add" className="btn btn-primary mb-3">Add New User</Link>

      <ul>
        {users.map((user) => (
          <UserItem key={user._id} user={user} onDelete={deleteUser} />
        ))}
      </ul>
    </main>
  );
}
