import React, { createContext, useState } from "react";
import {
  FaChevronLeft,
  FaPlus,
  FaEdit,
  FaStreetView,
  FaTrash,
  FaWindows,
  FaSignOutAlt,
  FaChevronRight,
} from "react-icons/fa";
import pic from "../assets/tm.png";
import tguy from "../assets/IT-Guy.png";
import popup, { Popup } from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const sideBarContext = createContext()

const Sidebar = () => {
    const [open, setOpen] =  useState(true)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
  return (
    
    <aside className={` h-screen ${open? "w-[260px]" : "w-[60px]"}`}>
      <nav className={` h-full flex flex-col bg-white border-r shadow-sm`}>
        <div className=" p-4 pb-2 flex justify-between items-center">
          <img
            src={pic}
            alt=""
            className={`lg:w-[120px] md:w-[90px] lg:flex md:flex hidden ${!open? "hidden": "hidden"} `}
          />
          <button onClick={()=>setOpen((curr) =>! curr)}
            className="p-1 rounded-full bg-gray-50 border-2 text-indigo-600
           border-indigo-600 hover:bg-indigo-600 hover:text-white"
          >
           {open? <FaChevronLeft /> :  <FaChevronRight/>}
          </button>
        </div>
        
        <sideBarContext.Provider value={{open}}>
        <ul className="flex-1 px-3 ">
          <SidebarItem  alert icon={<FaWindows size={20}/>} text={`${open? "Dashboard": ''}`} />
          <SidebarItem alert active icon={<FaStreetView size={20}/>} text={`${open? "View Task": ''}`} />
          <Popup
              modal
              nested
              trigger={
                <button>
                  {" "}
                  <SidebarItem icon={<FaPlus size={20}/>} text={`${open? "Create Task": ''}`} />
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
                    Create a Task
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
            <Popup
              modal
              nested
              trigger={
                <button>
                  {" "}
                  <SidebarItem icon={<FaEdit size={20} />} text={`${open? "Edit Task": ''}`} />
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
          
          <SidebarItem icon={<FaTrash size={20} onClick={()=>active} />} text={`${open? "Delete Task": '' }`} />
          <SidebarItem icon={<FaSignOutAlt size={20}/>} text={`${open? "Log out": ''}`}/>
        </ul>
        </sideBarContext.Provider>
        
        

        <div className="py-2 lg:justify-between justify-center flex lg:flex-row flex-col" >
          <img src={tguy} alt="" className="w-14 h-14 rounded-full lg:mx-0 mx-auto" />
          <div className={`${open? "flex mr-3 flex-col":"hidden"} lg:mx-0 ml-10 lg:flex md:flex hidden`}>
            <h4 className="font-extrabold">Stanley Samuel</h4>
            <p className="text-indigo-400 font-bold text-xs">Frontend Developer</p>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;

export function SidebarItem({ icon, text, active, alert }) {
  return (
    <li onClick={()=>active}
      className={` relative flex items-center px-3 py-2 my-5
        font-medium rounded-md cursor-pointer
        transition-colors ${
          active
            ? "bg-gradient-to-r from-indigo-900 to-indigo-400 text-white "
            : "hover:bg-indigo-600 hover:text-white"
        }`}
    >
      {icon}
      <span className={`${!open? "w-52 ml-3": "flex"} lg:flex md:flex hidden`}>{text}</span>
      {alert && (
        <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${open? "":""}`} />
      )}
    </li>
  );
}

