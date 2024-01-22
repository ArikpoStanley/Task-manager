import React from "react";
import Sidebar from "../components/Sidebar";
import { useRef } from "react";
import popup, { Popup } from "reactjs-popup";
import { useState } from "react";
import "reactjs-popup/dist/index.css";
import { FaSearch, FaPlus, FaTrash, FaEdit } from "react-icons/fa";

const TaskManager = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  var a, b, c;
  const [task, setTask] = useState({ a, b, c });
  const h4 = useRef(null);
  const h5 = useRef(null);
  const h6 = useRef(null);
  const h8 = useRef(null);
  const h9 = useRef(null);
  const h7 = useRef(null);
  const ib = useRef(null);
  const edit = (e) => {
    e.preventDefault();
    a = React.createElement(
      "h4",
      { className: "font-extrabold mb-4 lg:text-2xl text-xl" },
      name
    );
    b = React.createElement("p", { className: "mb-4" }, description);
    c = React.createElement("p", { className: "font-bold" }, "Due: " + date);
    setTask({ a, b, c });
    task.push({ a, b, c });
    ib.current.style.visibility = 'inherit';
  };

  const handleClick = () => {};

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className=" h-screen w-full m-1 rounded-xl bg-indigo-100">
        <div className=" p-5 shadow">
          <div className="header justify-between flex flex-row ">
            <h4 className="lg:flex md:flex font-extrabold text-2xl text-indigo-600">
              All Task{" "}
            </h4>
            <div className="flex flex-row bg-indigo-200 px-2 rounded-xl">
              <input
                type="text"
                className="outline-none p-2 focus:placeholder:-translate-y-2 focus:placeholder:text-[8px] 
                        placeholder:font-bold bg-indigo-200 lg:w-[400px] md:w-[250px]"
                placeholder="Search"
              />
              <FaSearch className="mt-3 text-indigo-600" />
            </div>
            <Popup
              className=""
              modal
              nested
              trigger={
                <button>
                  {" "}
                  <FaPlus className="font-bold text-indigo-600" />
                </button>
              }
            >
              {(close) => (
                <div className="modal">
                  <button
                    className="close bg-red-500 px-1 hover:scale-110 duration-500 font-bold text-white"
                    onClick={close}
                  >
                    &times;
                  </button>
                  <div
                    className="header w-[100%] lg:ml-20 underline border-b-1
                   border-gray-900 lg:p-5 p-0 font-extrabold text-indigo-800"
                  >
                    {" "}
                    Create Task
                  </div>
                  <div className="content">
                    <form
                      action="/"
                      className="flex flex-col mx-auto items-center justify-center px-9 space-y-6"
                    >
                      <div className="flex flex-col">
                        <label
                          htmlFor="Task"
                          className="font-bold text-indigo-600 "
                        >
                          Task Name:
                        </label>
                        <input
                          ref={h7}
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          type="text"
                          placeholder="Enter Task"
                          className="lg:w-[400px] md:w-[300px] w-[170px] outline-none rounded-lg bg-indigo-100 h-10 focus:placeholder:-translate-y-4 focus:placeholder:text-[8px] placeholder:font-bold placeholder:ml-10 p-2 "
                        />
                      </div>
                      <div className="flex flex-col ">
                        <label
                          htmlFor="Task"
                          className="font-bold text-indigo-600"
                        >
                          Description:
                        </label>
                        <textarea
                          ref={h8}
                          value={description}
                          onChange={(e) => {
                            setDescription(e.target.value);
                          }}
                          type="text"
                          placeholder="Description"
                          className="lg:w-[400px] md:w-[300px] w-[170px] outline-none  h-[70px] rounded-lg bg-indigo-100 focus:placeholder:-translate-y-2 focus:placeholder:text-[8px] placeholder:font-bold  overflow-hidden p-2"
                        ></textarea>
                      </div>
                      <div className="flex flex-col ">
                        <label
                          htmlFor="Date"
                          className="font-bold text-indigo-600"
                        >
                          Date:
                        </label>
                        <input
                          ref={h9}
                          value={date}
                          onChange={(e) => {
                            setDate(e.target.value);
                          }}
                          type="Date"
                          placeholder="Enter Task"
                          className="lg:w-[400px] md:w-[300px] w-[170px] outline-none rounded-lg bg-indigo-100 placeholder:font-bold focus:placeholder:-translate-y-4 focus:placeholder:text-[8px] placeholder:p-4 h-10 "
                        />
                      </div>
                      <input
                        className="button bg-indigo-700 p-2 mb-5 
          font-bold rounded-xl w-[150px] hover:bg-indigo-600 text-white"
                        type="submit"
                        value="Create Task"
                        onClick={edit}
                      />
                    </form>
                    <div className="actions "></div>
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </div>

        <div className="container flex flex-wrap gap-3 mt-5 ml-5">
          <div
            id="a"
            className=" p-5 rounded-lg bg-white shadow-black shadow-sm  max-w-[250px] lg:max-w-[300px]"
          >
            <h4 ref={h4} className="font-extrabold mb-4 lg:text-2xl text-xl">
              Wash my clothes
            </h4>
            <p ref={h5} className="my-4">
              I will be washing my clothes on sunday they are very dirty.
            </p>
            <p ref={h6} className="mb-2 font-bold">
              Due: <span>12/05/2024</span>
            </p>
            <div className="flex flex-row justify-between">
              <h3
                id="1"
                onClick={() => {
                  const a = document.getElementById("1");
                  if (a.innerHTML == "Pending") {
                    a.innerHTML = "Completed";
                  } else {
                    a.innerHTML = "Pending";
                  }
                }}
                className="bg-gray-100 text-yellow-600 cursor-pointer font-bold p-2"
              >
                Pending
              </h3>
              <div className="flex flex-row gap-3">
                <FaTrash
                  className="text-red-500 mt-3 cursor-pointer"
                  id="a"
                  onClick={() => {
                    const a = document.getElementById("a");
                    a.style.display = "none";
                  }}
                />
                <Popup
              modal
              nested
              trigger={
                <button>
                  {" "}
                  <FaEdit className="edit text-green-500 cursor-pointer" />
                </button>
              }
            >
              {(close) => (
                <div className="modal">
                  <button className="close bg-red-500 px-1 hover:scale-110 duration-500 font-bold text-white" onClick={close} >
                    &times;
                  </button>
                  <div className="header w-[100%] lg:ml-20 underline border-b-1 border-gray-900 lg:p-5 p-0 font-extrabold text-indigo-800">
                    {" "}
                    Edit Task
                  </div>
                  <div className="content">
                    <form
                      action="/"
                      className="flex flex-col mx-auto items-center justify-center px-8 space-y-6"
                    >
                      <div className="flex flex-col ">
                        <label htmlFor="Task" className="font-bold text-indigo-600 ">Task Name:</label>
                        <input
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                          type="text"
                          placeholder="Enter Task"
                          className="lg:w-[400px] md:w-[300px] w-[170px] outline-none rounded-lg bg-indigo-100 
                          h-10 focus:placeholder:-translate-y-4 focus:placeholder:text-[8px] placeholder:font-bold placeholder:ml-10 p-2 "
                        />
                      </div>
                      <div className="flex flex-col ">
                        <label htmlFor="Task" className="font-bold text-indigo-600">Description:</label>
                        <textarea
                        value={description}
                        onChange={(e)=>{setDescription(e.target.value)}}
                          type="text"
                          placeholder="Description"
                          className="lg:w-[400px] md:w-[300px] w-[170px] outline-none h-[70px] rounded-lg bg-indigo-100 focus:placeholder:-translate-y-2 focus:placeholder:text-[8px] placeholder:font-bold  overflow-hidden p-2"
                        ></textarea>
                      </div>
                      <div className="flex flex-col ">
                        <label htmlFor="Date" className="font-bold text-indigo-600">Date:</label>
                        <input
                        value={date}
                        onChange={(e)=>{setDate(e.target.value)}}
                          type="Date"
                          placeholder="Enter Task"
                          className="lg:w-[400px] md:w-[300px] w-[170px] outline-none rounded-lg bg-indigo-100 placeholder:font-bold focus:placeholder:-translate-y-4 focus:placeholder:text-[8px] placeholder:p-4 h-10 "
                        />
                      </div>
                      <input
                      className="button bg-indigo-700 p-2 mb-5
          font-bold rounded-xl w-[150px] hover:bg-indigo-600 text-white"
                      
                    type="submit" value="Create Task"/>
                    
                    </form>
                    <div className="actions ">
                    
                  </div>
                  
                  </div>
                  
                </div>
              )}
            </Popup>
          
                
              </div>
            </div>
          </div>
          <div
            id="b"
            className=" p-5 rounded-lg bg-white shadow-black shadow-sm max-w-[250px] lg:max-w-[300px]"
          >
            <h4 className="font-extrabold mb-4 lg:text-2xl text-xl">
              Have a zoom meeting
            </h4>
            <p className="my-4">
              I was slated by my colleagues to have a meeting with them on
              friday.
            </p>
            <p className="mb-2 font-bold">
              Due: <span>07/05/2024</span>
            </p>
            <div className="flex flex-row justify-between">
              <h3
                id="2"
                onClick={() => {
                  const a = document.getElementById("2");
                  if (a.innerHTML == "Pending") {
                    a.innerHTML = "Completed";
                  } else {
                    a.innerHTML = "Pending";
                  }
                }}
                className="bg-gray-100 text-yellow-600 cursor-pointer font-bold p-2"
              >
                Pending
              </h3>
              <div className="flex flex-row gap-3">
                <FaTrash
                  className="text-red-500 mt-3 cursor-pointer"
                  onClick={() => {
                    const a = document.getElementById("b");
                    a.style.display = "none";
                  }}
                />
                <Popup
              modal
              nested
              trigger={
                <button>
                  {" "}
                  <FaEdit className="edit text-green-500 cursor-pointer" />
                </button>
              }
            >
              {(close) => (
                <div className="modal">
                  <button className="close bg-red-500 px-1 hover:scale-110 duration-500 font-bold text-white" onClick={close} >
                    &times;
                  </button>
                  <div className="header w-[100%] lg:ml-20 underline border-b-1 border-gray-900 lg:p-5 p-0 font-extrabold text-indigo-800">
                    {" "}
                    Edit Task
                  </div>
                  <div className="content">
                    <form
                      action="/"
                      className="flex flex-col mx-auto items-center justify-center px-8 space-y-6"
                    >
                      <div className="flex flex-col ">
                        <label htmlFor="Task" className="font-bold text-indigo-600 ">Task Name:</label>
                        <input
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                          type="text"
                          placeholder="Enter Task"
                          className="lg:w-[400px] md:w-[300px] w-[170px] outline-none rounded-lg bg-indigo-100 
                          h-10 focus:placeholder:-translate-y-4 focus:placeholder:text-[8px] placeholder:font-bold placeholder:ml-10 p-2 "
                        />
                      </div>
                      <div className="flex flex-col ">
                        <label htmlFor="Task" className="font-bold text-indigo-600">Description:</label>
                        <textarea
                        value={description}
                        onChange={(e)=>{setDescription(e.target.value)}}
                          type="text"
                          placeholder="Description"
                          className="lg:w-[400px] md:w-[300px] w-[170px] outline-none h-[70px] rounded-lg bg-indigo-100 focus:placeholder:-translate-y-2 focus:placeholder:text-[8px] placeholder:font-bold  overflow-hidden p-2"
                        ></textarea>
                      </div>
                      <div className="flex flex-col ">
                        <label htmlFor="Date" className="font-bold text-indigo-600">Date:</label>
                        <input
                        value={date}
                        onChange={(e)=>{setDate(e.target.value)}}
                          type="Date"
                          placeholder="Enter Task"
                          className="lg:w-[400px] md:w-[300px] w-[170px] outline-none rounded-lg bg-indigo-100 placeholder:font-bold focus:placeholder:-translate-y-4 focus:placeholder:text-[8px] placeholder:p-4 h-10 "
                        />
                      </div>
                      <input
                      className="button bg-indigo-700 p-2 mb-5
          font-bold rounded-xl w-[150px] hover:bg-indigo-600 text-white"
                      
                    type="submit" value="Create Task"/>
                    
                    </form>
                    <div className="actions ">
                    
                  </div>
                  
                  </div>
                  
                </div>
              )}
            </Popup>
              </div>
            </div>
          </div>
          <div
            id="c"
            className=" p-5 rounded-lg bg-white shadow-black shadow-sm max-w-[250px] lg:max-w-[300px]"
          >
            <h4 className="font-extrabold mb-4 lg:text-2xl text-xl">
              Go fix my car
            </h4>
            <p className="my-4">
              I have to take my car to the mechanic today before i go to work
            </p>
            <p className="mb-2 font-bold">
              Due: <span>12/05/2024</span>
            </p>
            <div className="flex flex-row justify-between">
              <h3
                id="3"
                onClick={() => {
                  const a = document.getElementById("3");
                  if (a.innerHTML == "Pending") {
                    a.innerHTML = "Completed";
                  } else {
                    a.innerHTML = "Pending";
                  }
                }}
                className="bg-gray-100 text-yellow-600 cursor-pointer font-bold p-2"
              >
                Pending
              </h3>
              <div className="flex flex-row gap-3">
                <FaTrash
                  className="text-red-500 mt-3 cursor-pointer"
                  onClick={() => {
                    const a = document.getElementById("c");
                    a.style.display = "none";
                  }}
                />
                <Popup
              modal
              nested
              trigger={
                <button>
                  {" "}
                  <FaEdit className="edit text-green-500 cursor-pointer" />
                </button>
              }
            >
              {(close) => (
                <div className="modal">
                  <button className="close bg-red-500 px-1 hover:scale-110 duration-500 font-bold text-white" onClick={close} >
                    &times;
                  </button>
                  <div className="header w-[100%] lg:ml-20 underline border-b-1 border-gray-900 lg:p-5 p-0 font-extrabold text-indigo-800">
                    {" "}
                    Edit Task
                  </div>
                  <div className="content">
                    <form
                      action="/"
                      className="flex flex-col mx-auto items-center justify-center px-8 space-y-6"
                    >
                      <div className="flex flex-col ">
                        <label htmlFor="Task" className="font-bold text-indigo-600 ">Task Name:</label>
                        <input
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                          type="text"
                          placeholder="Enter Task"
                          className="lg:w-[400px] md:w-[300px] w-[170px] outline-none rounded-lg bg-indigo-100 
                          h-10 focus:placeholder:-translate-y-4 focus:placeholder:text-[8px] placeholder:font-bold placeholder:ml-10 p-2 "
                        />
                      </div>
                      <div className="flex flex-col ">
                        <label htmlFor="Task" className="font-bold text-indigo-600">Description:</label>
                        <textarea
                        value={description}
                        onChange={(e)=>{setDescription(e.target.value)}}
                          type="text"
                          placeholder="Description"
                          className="lg:w-[400px] md:w-[300px] w-[170px] outline-none h-[70px] rounded-lg bg-indigo-100 focus:placeholder:-translate-y-2 focus:placeholder:text-[8px] placeholder:font-bold  overflow-hidden p-2"
                        ></textarea>
                      </div>
                      <div className="flex flex-col ">
                        <label htmlFor="Date" className="font-bold text-indigo-600">Date:</label>
                        <input
                        value={date}
                        onChange={(e)=>{setDate(e.target.value)}}
                          type="Date"
                          placeholder="Enter Task"
                          className="lg:w-[400px] md:w-[300px] w-[170px] outline-none rounded-lg bg-indigo-100 placeholder:font-bold focus:placeholder:-translate-y-4 focus:placeholder:text-[8px] placeholder:p-4 h-10 "
                        />
                      </div>
                      <input
                      className="button bg-indigo-700 p-2 mb-5
          font-bold rounded-xl w-[150px] hover:bg-indigo-600 text-white"
                      
                    type="submit" value="Create Task"/>
                    
                    </form>
                    <div className="actions ">
                    
                  </div>
                  
                  </div>
                  
                </div>
              )}
            </Popup>
              </div>
            </div>
          </div>
          <div
            id="d"
            className=" p-5 rounded-lg bg-white shadow-black shadow-sm max-w-[250px] lg:max-w-[300px]"
          >
            <h4 className="font-extrabold mb-4 lg:text-2xl text-xl">
              Stop at a friends Place
            </h4>
            <p className="my-4">
              Heard Tobi is sick need to check on him much later or lets say by
              friday
            </p>
            <p className="mb-2 font-bold">
              Due: <span>12/05/2024</span>
            </p>
            <div className="flex flex-row justify-between">
              <h3
                id="4"
                onClick={() => {
                  const a = document.getElementById("4");
                  if (a.innerHTML == "Pending") {
                    a.innerHTML = "Completed";
                  } else {
                    a.innerHTML = "Pending";
                  }
                }}
                className="bg-gray-100 text-yellow-600 cursor-pointer font-bold p-2"
              >
                Pending
              </h3>
              <div className="flex flex-row gap-3">
                <FaTrash
                  className="text-red-500 mt-3 cursor-pointer"
                  onClick={() => {
                    const a = document.getElementById("d");
                    a.style.display = "none";
                  }}
                />
                <Popup
              modal
              nested
              trigger={
                <button>
                  {" "}
                  <FaEdit className="edit text-green-500 cursor-pointer" />
                </button>
              }
            >
              {(close) => (
                <div className="modal">
                  <button className="close bg-red-500 px-1 hover:scale-110 duration-500 font-bold text-white" onClick={close} >
                    &times;
                  </button>
                  <div className="header w-[100%] lg:ml-20 underline border-b-1 border-gray-900 lg:p-5 p-0 font-extrabold text-indigo-800">
                    {" "}
                    Edit Task
                  </div>
                  <div className="content">
                    <form
                      action="/"
                      className="flex flex-col mx-auto items-center justify-center px-8 space-y-6"
                    >
                      <div className="flex flex-col ">
                        <label htmlFor="Task" className="font-bold text-indigo-600 ">Task Name:</label>
                        <input
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                          type="text"
                          placeholder="Enter Task"
                          className="lg:w-[400px] md:w-[300px] w-[170px] outline-none rounded-lg bg-indigo-100 
                          h-10 focus:placeholder:-translate-y-4 focus:placeholder:text-[8px] placeholder:font-bold placeholder:ml-10 p-2 "
                        />
                      </div>
                      <div className="flex flex-col ">
                        <label htmlFor="Task" className="font-bold text-indigo-600">Description:</label>
                        <textarea
                        value={description}
                        onChange={(e)=>{setDescription(e.target.value)}}
                          type="text"
                          placeholder="Description"
                          className="lg:w-[400px] md:w-[300px] w-[170px] outline-none h-[70px] rounded-lg bg-indigo-100 focus:placeholder:-translate-y-2 focus:placeholder:text-[8px] placeholder:font-bold  overflow-hidden p-2"
                        ></textarea>
                      </div>
                      <div className="flex flex-col ">
                        <label htmlFor="Date" className="font-bold text-indigo-600">Date:</label>
                        <input
                        value={date}
                        onChange={(e)=>{setDate(e.target.value)}}
                          type="Date"
                          placeholder="Enter Task"
                          className="lg:w-[400px] md:w-[300px] w-[170px] outline-none rounded-lg bg-indigo-100 placeholder:font-bold focus:placeholder:-translate-y-4 focus:placeholder:text-[8px] placeholder:p-4 h-10 "
                        />
                      </div>
                      <input
                      className="button bg-indigo-700 p-2 mb-5
          font-bold rounded-xl w-[150px] hover:bg-indigo-600 text-white"
                      
                    type="submit" value="Create Task"/>
                    
                    </form>
                    <div className="actions ">
                    
                  </div>
                  
                  </div>
                  
                </div>
              )}
            </Popup>
              </div>
            </div>
          </div>
          <div
            id="e"
            className=" p-5 rounded-lg bg-white shadow-black shadow-sm max-w-[250px] lg:max-w-[300px]"
          >
            <h4 className="font-extrabold mb-4 lg:text-2xl text-xl">
              Clean the house
            </h4>
            <p className="my-4">
              Oops i have to clean the house before i leave for work tomorrow{" "}
            </p>
            <p className="mb-2 font-bold">
              Due: <span>12/05/2024</span>
            </p>
            <div className="flex flex-row justify-between">
              <h3
                id="6"
                onClick={() => {
                  const a = document.getElementById("6");
                  if (a.innerHTML == "Pending") {
                    a.innerHTML = "Completed";
                  } else {
                    a.innerHTML = "Pending";
                  }
                }}
                className="bg-gray-100 text-yellow-600 font-bold cursor-pointer p-2"
              >
                Pending
              </h3>
              <div className="flex flex-row gap-3">
                <FaTrash
                  className="text-red-500 mt-3 cursor-pointer"
                  onClick={() => {
                    const a = document.getElementById("e");
                    a.style.display = "none";
                  }}
                />
                <Popup
              modal
              nested
              trigger={
                <button>
                  {" "}
                  <FaEdit className="edit text-green-500 cursor-pointer" />
                </button>
              }
            >
              {(close) => (
                <div className="modal">
                  <button className="close bg-red-500 px-1 hover:scale-110 duration-500 font-bold text-white" onClick={close} >
                    &times;
                  </button>
                  <div className="header w-[100%] lg:ml-20 underline border-b-1 border-gray-900 lg:p-5 p-0 font-extrabold text-indigo-800">
                    {" "}
                    Edit Task
                  </div>
                  <div className="content">
                    <form
                      action="/"
                      className="flex flex-col mx-auto items-center justify-center px-8 space-y-6"
                    >
                      <div className="flex flex-col ">
                        <label htmlFor="Task" className="font-bold text-indigo-600 ">Task Name:</label>
                        <input
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                          type="text"
                          placeholder="Enter Task"
                          className="lg:w-[400px] md:w-[300px] w-[170px] outline-none rounded-lg bg-indigo-100 
                          h-10 focus:placeholder:-translate-y-4 focus:placeholder:text-[8px] placeholder:font-bold placeholder:ml-10 p-2 "
                        />
                      </div>
                      <div className="flex flex-col ">
                        <label htmlFor="Task" className="font-bold text-indigo-600">Description:</label>
                        <textarea
                        value={description}
                        onChange={(e)=>{setDescription(e.target.value)}}
                          type="text"
                          placeholder="Description"
                          className="lg:w-[400px] md:w-[300px] w-[170px] outline-none h-[70px] rounded-lg bg-indigo-100 focus:placeholder:-translate-y-2 focus:placeholder:text-[8px] placeholder:font-bold  overflow-hidden p-2"
                        ></textarea>
                      </div>
                      <div className="flex flex-col ">
                        <label htmlFor="Date" className="font-bold text-indigo-600">Date:</label>
                        <input
                        value={date}
                        onChange={(e)=>{setDate(e.target.value)}}
                          type="Date"
                          placeholder="Enter Task"
                          className="lg:w-[400px] md:w-[300px] w-[170px] outline-none rounded-lg bg-indigo-100 placeholder:font-bold focus:placeholder:-translate-y-4 focus:placeholder:text-[8px] placeholder:p-4 h-10 "
                        />
                      </div>
                      <input
                      className="button bg-indigo-700 p-2 mb-5
          font-bold rounded-xl w-[150px] hover:bg-indigo-600 text-white"
                      
                    type="submit" value="Create Task"/>
                    
                    </form>
                    <div className="actions ">
                    
                  </div>
                  
                  </div>
                  
                </div>
              )}
            </Popup>
              </div>
            </div>
          </div>
          <div
            ref={ib}
            id="f"
            className="p-5 rounded-lg bg-white shadow-black shadow-sm max-w-[250px] lg:max-w-[300px]"
          >
            {task.a}
            {task.b}
            {task.c}
            <div className="flex flex-row justify-between ">
              <h3
                id="5"
                onClick={() => {
                  const a = document.getElementById("5");
                  if (a.innerHTML == "Pending") {
                    a.innerHTML = "Completed";
                  } else {
                    a.innerHTML = "Pending";
                  }
                }}
                className="bg-gray-100 text-yellow-600 font-bold cursor-pointer p-2"
              >
                Pending
              </h3>
              <div className="flex flex-row gap-3">
                <FaTrash
                  className="text-red-500 mt-3 cursor-pointer"
                  onClick={() => {
                    const a = document.getElementById("f");
                    a.style.display = "none";
                  }}
                />
                <Popup
              modal
              nested
              trigger={
                <button>
                  {" "}
                  <FaEdit className="edit text-green-500 cursor-pointer" />
                </button>
              }
            >
              {(close) => (
                <div className="modal">
                  <button className="close bg-red-500 px-1 hover:scale-110 duration-500 font-bold text-white" onClick={close} >
                    &times;
                  </button>
                  <div className="header w-[100%] lg:ml-20 underline border-b-1 border-gray-900 lg:p-5 p-0 font-extrabold text-indigo-800">
                    {" "}
                    Edit Task
                  </div>
                  <div className="content">
                    <form
                      action="/"
                      className="flex flex-col mx-auto items-center justify-center px-8 space-y-6"
                    >
                      <div className="flex flex-col ">
                        <label htmlFor="Task" className="font-bold text-indigo-600 ">Task Name:</label>
                        <input
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                          type="text"
                          placeholder="Enter Task"
                          className="lg:w-[400px] md:w-[300px] w-[170px] outline-none rounded-lg bg-indigo-100 
                          h-10 focus:placeholder:-translate-y-4 focus:placeholder:text-[8px] placeholder:font-bold placeholder:ml-10 p-2 "
                        />
                      </div>
                      <div className="flex flex-col ">
                        <label htmlFor="Task" className="font-bold text-indigo-600">Description:</label>
                        <textarea
                        value={description}
                        onChange={(e)=>{setDescription(e.target.value)}}
                          type="text"
                          placeholder="Description"
                          className="lg:w-[400px] md:w-[300px] w-[170px] outline-none h-[70px] rounded-lg bg-indigo-100 focus:placeholder:-translate-y-2 focus:placeholder:text-[8px] placeholder:font-bold  overflow-hidden p-2"
                        ></textarea>
                      </div>
                      <div className="flex flex-col ">
                        <label htmlFor="Date" className="font-bold text-indigo-600">Date:</label>
                        <input
                        value={date}
                        onChange={(e)=>{setDate(e.target.value)}}
                          type="Date"
                          placeholder="Enter Task"
                          className="lg:w-[400px] md:w-[300px] w-[170px] outline-none rounded-lg bg-indigo-100 placeholder:font-bold focus:placeholder:-translate-y-4 focus:placeholder:text-[8px] placeholder:p-4 h-10 "
                        />
                      </div>
                      <input
                      className="button bg-indigo-700 p-2 mb-5
          font-bold rounded-xl w-[150px] hover:bg-indigo-600 text-white"
                      
                    type="submit" value="Create Task"/>
                    
                    </form>
                    <div className="actions ">
                    
                  </div>
                  
                  </div>
                  
                </div>
              )}
            </Popup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;


