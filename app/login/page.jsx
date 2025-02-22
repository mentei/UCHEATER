export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold">Login</h2>
        <input type="text" placeholder="Email" className="border p-2 w-full mt-3 bg-gray-700" />
        <input type="password" placeholder="Password" className="border p-2 w-full mt-3 bg-gray-700" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 w-full">Login</button>
      </div>
    </div>
  );
}
