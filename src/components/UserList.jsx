import { useState } from "react";
import { useGetUsersQuery, useAddUserMutation } from "../features/api/apiSlice";

const UserList = () => {
  const { data: users, isLoading } = useGetUsersQuery();
  const [addUser] = useAddUserMutation();
  const [form, setForm] = useState({ name: "", job: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.name && form.job) {
      try {
        await addUser(form).unwrap();
        setForm({ name: "", job: "" });
      } catch (error) {
        console.error("Error adding user:", error);
      }
    }
  };

  return (
    <div className="container">
      <h2>Users:</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users?.map((u, index) => (
            <li key={index}>
              {u.name} - {u.job}
            </li>
          ))}
        </ul>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Job"
          value={form.job}
          onChange={(e) => setForm({ ...form, job: e.target.value })}
        />
        <button type="submit">Add new user</button>
      </form>
    </div>
  );
};

export default UserList;
