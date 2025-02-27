"use client";
import { useSession, signOut } from "next-auth/react";
import ContentForm from "./detector/ContentForm";

const Dashboard = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  if (!session) {
    return <p className="text-center text-red-400">You are not logged in.</p>;
  }
  console.log(session)

  return (
    <div className="max-w-4xl mx-auto text-center text-white mt-20">
      <h2 className="text-3xl font-bold">Welcome, {session.user?.name}!</h2>
      <p className="text-gray-300">This is your secure AI detection dashboard.</p>

      <ContentForm />

      <button onClick={() => signOut()} className="mt-4 bg-red-500 px-6 py-3 rounded">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
