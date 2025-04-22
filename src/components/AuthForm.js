import React, { useState } from 'react';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export default function AuthForm() {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, form.email, form.password);
        alert("Registered successfully!");
      } else {
        await signInWithEmailAndPassword(auth, form.email, form.password);
        alert("Signed in successfully!");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {isRegister ? 'Register' : 'Sign In'}
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          {isRegister ? 'Register' : 'Sign In'}
        </button>
      </form>
      <p className="text-center mt-4">
        {isRegister ? 'Already have an account?' : 'Need an account?'}{' '}
        <button
          className="text-blue-600 underline"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? 'Sign In' : 'Register'}
        </button>
      </p>
    </div>
  );
}
