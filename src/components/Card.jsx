import React from "react";

function Card(props) {
    return (
        <div className="card border border-slate-400/30 rounded-lg relative overflow-hidden">
            <div className="image after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/60 after:opacity-0 after:transition-all duration-200 ease-linear">
                <img src={props.imgsrc} className="w-full" alt="" />
            </div>
            <div className="content p-8 absolute bottom-0 left-0 w-full transition-all duration-200 ease-linear opacity-0">
                <h5 className="text-slate-300 text-3xl font-semibold">
                    {props.title}
                </h5>
                <div className=" text-sm text-gray-300 font-semibold mt-2">
                    {props.subTitle}
                </div>
                <p className="text-base text-slate-300 font-normal mt-5">
                    {props.text}
                </p>
                <a
                    href={props.link}
                    target="_blank"
                    className=" bg-purple-500 text-white text-sm font-bold uppercase px-6 py-3 rounded inline-block hover:bg-blue-300 transition-all mt-6"
                >
                    Go somewhere
                </a>
            </div>
        </div>
    );
}

export default Card;
