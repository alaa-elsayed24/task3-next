'use client';
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditUser() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "" });

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`/api/users/${id}`);
      const data = await res.json();
      setForm({ name: data.name, email: data.email });
    };
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("User updated");
      router.push("/");
    } else {
      alert("Update failed");
    }
  };

  return (
    <div className="container mt-5">
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name:</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Email:</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} className="form-control" />
        </div>
        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}
