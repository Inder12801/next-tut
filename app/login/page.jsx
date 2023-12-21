import Link from "next/link";

const Login = () => {
  return (
    <div
      className="flex-col min-h-screen
     bg-slate-100 w-full text-center items-center justify-center"
    >
      <h1 className="text-2xl text-green-800 ">This is Login page</h1>

      <div className="flex-col w-fit justify-start text-left">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="email"
          placeholder="Enter your email"
          id="email"
        ></input>
        <p className="mt-1 text-xs text-gray-500">*This field is required</p>
      </div>
      <div className="flex-col w-fit justify-start text-left">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="password"
          placeholder="Enter your password"
          id="password"
        ></input>
        <p className="mt-1 text-xs text-gray-500">*This field is required</p>
      </div>
      <button
        type="button"
        className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Login
      </button>
      <h3>
        Don't have an account ?{" "}
        <Link href={"/signup"} className="text-purple-600">
          Signup
        </Link>
      </h3>
    </div>
  );
};

export default Login;
