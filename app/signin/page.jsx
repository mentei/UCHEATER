"use client";
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold">Sign In</h1>
      
      {/* Google Sign-In */}
      <button 
        className="mt-4 px-6 py-2 bg-red-500 hover:bg-red-600 rounded-lg"
        onClick={() => signIn("google")}
      >
        Sign in with Google
      </button>

      {/* Manual Sign-In */}
      <form
        className="mt-4 flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          signIn("credentials", {
            username: e.target.username.value,
            password: e.target.password.value,
          });
        }}
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="p-2 rounded text-black"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-2 rounded mt-2 text-black"
        />
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
}
