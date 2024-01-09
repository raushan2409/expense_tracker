import React from "react";

export default function ExpensePage() {
  return (
    <>
      <div className="flex justify-start">
        <br />
        <div className=" mr-[40%] ml-3 mt-10 shadow-2xl   w-[35%] h-[310px] max-h-[500px] rounded-xl p-2 bg-neutral-100">
          <input
            className="mx-7 rounded-2xl hover:bg-transparent  shadow-inner mt-3 bg-slate-200 p-2 text-xl  font-serif w-[90%] "
            placeholder="Enter Expense Amount"
            type="number"
            name=""
            id=""
          />
          <br />

          <input
            className="mx-7 rounded-2xl mt-3 mb-3 hover:bg-transparent shadow-inner bg-slate-200 p-2 text-xl font-serif w-[90%] "
            type="text"
            placeholder="Description of Expense"
          />
          <br />
          <label
            className="mx-7 mb-1 mt-0 rounded-xl  hover:bg-transparent shadow-inner bg-slate-200 p-2 text-xl font-serif w-[90%] "
            for="cars"
          >
            Category:
          </label>
          <select
            className=" mb-1  rounded-xl  hover:bg-transparent shadow-inner bg-slate-200 p-2 text-xl font-serif w-[20%]"
            name="cars"
            id="cars"
          >
            <option value="food">Food</option>
            <option value="petrol">Petrol</option>
            <option value="party">Party</option>
            <option value="others">Others</option>
          </select>
          <br />
          <input
            className="mx-7 rounded-2xl mt-3 hover:bg-transparent shadow-inner bg-slate-200 p-2 text-xl font-serif w-[90%] "
            type="date"
            placeholder="dd-mm-yyyy"
          />
          <br />

          <button
            type="button"
            className="mt-3  ml-[35%] text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Add Expenses
          </button>
        </div>
        <div className="max-h-fit h-fit bg-neutral-100 mt-8 hover:p-10 hover:bg-slate-50 w-auto max-w-fit  shadow-2xl rounded-xl p-4">
          <h1 className="text-2xl  font-semibold hover:text-3xl hover:text-green-950 p-2 underline">
            Total Expenses
          </h1>
          <p className="w-[90%] h-9 rounded-xl p-1 text-center bg-gradient-to-r from-orange-300 via-gray-600 to-green-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80  text-white font-semibold  bg-green-400 m-auto text-xl hover:cursor-not-allowed">
            Rs. 9898
          </p>
        </div>
      </div>
      <div className="max-h-fit h-fit bg-neutral-100 mt-8  hover:bg-slate-50 w-auto max-w-fit   shadow-inner mx-5 rounded-md p-5">
        <span className="h-[90%] bg-teal-800 p-2 rounded-xl mr-3 text-xl font-semibold text-white">
          2023-09-12
        </span>
        <span className="h-[90%] bg-teal-800 p-2 rounded-xl mr-3 text-xl font-medium text-white">
          Rs.3848 - desc
        </span>
        <button
          type="button"
          class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-3"
        >
          Edit
        </button>

        <button
          type="button"
          class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          Delete
        </button>
      </div>
    </>
  );
}
