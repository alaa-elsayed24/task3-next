'use client';
import { addUserAction } from "../actions";
import { useFormStatus } from "react-dom";

export default function AddUserPage() {
  const { pending } = useFormStatus();

  return (
    <main className="container mt-5">
      <h1 className="mb-4">Add User</h1>

      <form action={addUserAction}>
        <div className="mb-3">
          <label>Name:</label>
          <input name="name" className="form-control mt-2" required />
        </div>

        <div className="mb-3">
          <label>Email:</label>
          <input name="email" type="email" className="form-control mt-2" required />
        </div>

        <button disabled={pending} className="btn btn-success">
          {pending ? "Adding..." : "Add User"}
        </button>
      </form>
    </main>
  );
}
