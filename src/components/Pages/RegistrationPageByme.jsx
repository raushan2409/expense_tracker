import React from "react";

export default function RegistrationPageByme() {
  return (
    <div className="bg-gradient-to-tl p-32 from-green-400 to-indigo-900 h-1/2 max-w-full">
      <div className="bg-slate-50 bg-opacity-10 shadow-2xl rounded-3xl  p-7  h-30 m-auto w-[500px]">
        <p className="font-black font-serif text-2xl ">Login to your account</p>
        <p className="mb-2 hover:font-serif hover:text-2xl font-medium">Email</p>
        <input 
          className="bg-slate-200 rounded-md  animate-pulse  shadow-[inset_-12px_-8px_40px_#46464620] mb-7 w-[85%] h-9"
          type="email"
        />
        <p className="mb-2 hover:font-serif hover:text-2xl font-medium">Password</p>
        <input 
          className="bg-slate-200 rounded-md  mb-7 animate-pulse w-[85%] h-9 mt-1 shadow-[inset_-12px_-8px_40px_#46464620]"
          type="password"
        />
        <p className="mb-2 hover:font-serif hover:text-2xl font-medium ">Confirm Password</p>
        <input 
          className="bg-slate-200 rounded-md  mb-7 animate-pulse shadow-[inset_-12px_-8px_40px_#46464620] w-[85%] h-9 mt-1 "
          type="password"
        />
        <br />
        {/* npx tailwindcss -i ./src/input.css -o ./dist/style.css   fir --watch */}

        <button
          type="button"
          className="text-white w-[83%] h-10 shadow-lg bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create my account
        </button>
        <div class="w-full flex items-center justify-between py-5">
          <hr class="w-full bg-gray-400" />
          <p class="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
          <hr class="w-full bg-gray-400  " />
        </div>
        <p>
          Don't have account? <a href="#signup">Sign up here </a>
        </p>
      </div>
    </div>
  );
}
