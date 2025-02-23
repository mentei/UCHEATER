"use client";
import { signIn, signOut, useSession } from "next-auth/react";

const signin = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <button onClick={() => signOut()} className="px-4 py-2 bg-red-500 text-white rounded">
          Logout
        </button>
      ) : (
        <>
          <button onClick={() => signIn("google")} className="px-4 py-2 bg-blue-500 text-white rounded m-2">
            Login with Google
          </button>
          <button onClick={() => signIn("github")} className="px-4 py-2 bg-gray-800 text-white rounded m-2">
            Login with GitHub
          </button>
        </>
      )}
    </div>
  );
};

export default signin;
