import React, { useState } from "react";

const App = () => {
    // let date = new Date().toLocaleTimeString();
    // const [time, setTim] = useState(date);

    // const changeDate = () => {
    //     date = new Date().toLocaleTimeString();
    //     setTim(date);
    // };

    // const [count, setCount] = useState(0);
    // const IncNum = () => setCount(count + 1);
    // const DecNum = () => setCount(count - 1);

    // let clock = new Date().toLocaleTimeString();
    // const [currTime, setCtime] = useState(clock);

    // const updateTitme = () => {
    //     clock = new Date().toLocaleTimeString();
    //     setCtime(clock);
    // };

    // setInterval(updateTitme, 1000);

    // const purple = "bg-purple-500";
    // const [bg, setBg] = useState(purple);
    // const [name, setName] = useState("Click Me");

    // const bgChange = () => {
    //     const yellow = "bg-yellow-500";
    //     setBg(yellow);
    //     setName("Ouch! 😖");
    // };
    // const nameChange = () => {
    //     setName("Double Click");
    //     setBg(purple);
    // };

    const [name, setName] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
    });

    const inputEvent = (event) => {
        // const value = event.target.value;
        // const name = event.target.name;

        const { name, value } = event.target;

        setName((prevValue) => {
            // console.log(prevValue);

            return {
                ...prevValue,
                [name]: value,
            };

            // if (name === "firstName") {
            //     return {
            //         firstName: value,
            //         lastName: prevValue.lastName,
            //         email: prevValue.email,
            //         mobile: prevValue.mobile,
            //     };
            // } else if (name === "lastName") {
            //     return {
            //         firstName: prevValue.firstName,
            //         lastName: value,
            //         email: prevValue.email,
            //         mobile: prevValue.mobile,
            //     };
            // } else if (name === "email") {
            //     return {
            //         firstName: prevValue.firstName,
            //         lastName: prevValue.lastName,
            //         email: value,
            //         mobile: prevValue.mobile,
            //     };
            // } else if (name === "mobile") {
            //     return {
            //         firstName: prevValue.firstName,
            //         lastName: prevValue.lastName,
            //         email: prevValue.email,
            //         mobile: value,
            //     };
            // }
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        alert("Form Submitted");
    };

    return (
        <div className="flex items-center flex-col justify-center h-screen ">
            <form onSubmit={onSubmit}>
                <div className="text-center">
                    <h1 className="text-5xl text-white font-medium font-mono">
                        Hello, {name.firstName} {name.lastName}
                    </h1>
                    <p className=" text-base text-slate-300 font-normal mt-3">
                        {name.email}
                    </p>
                    <p className=" text-base text-slate-300 font-normal mt-3">
                        {name.mobile}
                    </p>
                    <div className=" mt-10">
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            onChange={inputEvent}
                            value={name.firstName}
                            className="font-mono bg-slate-600 border-0 focus:outline-none w-96 h-14 px-4 text-white placeholder:text-white text-center text-xl"
                        />
                    </div>
                    <div className=" mt-10">
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            onChange={inputEvent}
                            value={name.lastName}
                            className="font-mono bg-slate-600 border-0 focus:outline-none w-96 h-14 px-4 text-white placeholder:text-white text-center text-xl"
                        />
                    </div>
                    <div className=" mt-10">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            name="email"
                            onChange={inputEvent}
                            value={name.email}
                            className="font-mono bg-slate-600 border-0 focus:outline-none w-96 h-14 px-4 text-white placeholder:text-white text-center text-xl"
                        />
                    </div>
                    <div className=" mt-10">
                        <input
                            type="text"
                            placeholder="Your Mobile Number"
                            name="mobile"
                            onChange={inputEvent}
                            value={name.mobile}
                            className="font-mono bg-slate-600 border-0 focus:outline-none w-96 h-14 px-4 text-white placeholder:text-white text-center text-xl"
                        />
                    </div>
                    <button className="font-mono bg-purple-500  border-solid border-[3px] border-white text-white text-2xl font-medium uppercase px-16 py-4 rounded-lg inline-block hover:bg-blue-400 transition-all mt-6">
                        Submit
                    </button>
                </div>
            </form>

            {/* <div className="text-center mt-10">
                <button
                    onDoubleClick={nameChange}
                    onMouseOver={bgChange}
                    className="bg-purple-500  border-solid border-[3px] border-white text-white text-2xl font-medium uppercase px-8 py-4 rounded-lg inline-block hover:bg-blue-400 transition-all mt-6"
                >
                    {name}
                </button>
            </div> */}

            {/* <div className="text-center mt-10">
                <h1 className="text-slate-300 text-5xl font-semibold">
                    {currTime}
                </h1>
            </div> */}

            {/* <div className="text-center">
                <h1 className="text-slate-300 text-5xl font-semibold">
                    {count}
                </h1>
                <button
                    className="bg-purple-500 text-white text-2xl font-medium uppercase px-8 py-4 rounded inline-block hover:bg-blue-300 transition-all mt-6"
                    onClick={IncNum}
                >
                    Add
                </button>
                <button
                    className="bg-purple-500 text-white ml-3 text-2xl font-medium uppercase px-8 py-4 rounded inline-block hover:bg-blue-300 transition-all mt-6"
                    onClick={DecNum}
                >
                    Remove
                </button>
            </div> */}
            {/* <div className="text-center mt-10">
                <h1 className="text-slate-300 text-5xl font-semibold">
                    {time}
                </h1>
                <button
                    className="bg-purple-500 text-white text-2xl font-medium uppercase px-8 py-4 rounded inline-block hover:bg-blue-300 transition-all mt-6"
                    onClick={changeDate}
                >
                    Get Time
                </button>
            </div> */}
        </div>
    );
};

export default App;
