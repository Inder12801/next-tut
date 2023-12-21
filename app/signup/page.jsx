"use client";
const Signup = () => {
  return (
    <div
      className="flex-col min-h-screen
     m-auto bg-blue-300 w-fit text-center items-center justify-center"
    >
      <h1 className="text-2xl text-green-800 ">This is Signup page</h1>
      <div className="flex-col justify-start">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="name"
        >
          Username
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="Enter your username"
          id="username"
        ></input>
        <p className="mt-1 text-xs text-gray-500">*This field is required</p>
      </div>
      <div className="flex-col justify-start">
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
      <div className="flex-col justify-start">
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
        class="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Signup
      </button>
    </div>
  );
};

export default Signup;
