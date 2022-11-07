import React, { useEffect, useState } from "react";
import { FaInfoCircle } from 'react-icons/fa';
import { FaExclamationTriangle } from 'react-icons/fa';
// import { AiOutlineClose } from 'react-icons/ai';
import { FaTimesCircle } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';


export default function Alert({
    type = 'warning',
    open,
    title = '',
    description = '',
    className
}) {
    const classNames = {
        success: 'bg-success',
        warning: 'bg-warning',
        info: 'bg-info',
        error: 'bg-error',
    }
    const icons = {
        warning: <FaExclamationTriangle className="m-auto"/>,
        success: <FaCheckCircle className="m-auto" />,
        error: <FaTimesCircle className="m-auto"/>,
        info: <FaInfoCircle className="m-auto"/>,
    }
    useEffect(() => { setstate(open) }, [open])
    const [state, setstate] = useState(opener)

    return (
        <div className={`${classNames[type]} ${state ? '' : 'hidden'} min-w-[300px] justify-between flex w-min rounded-sm ${className}`} >
            <div className="flex">
                <div className="flex">
                    <h1 className="m-auto text-center text-2xl w-[50px]">{icons[type]}</h1>
                </div>
                <div className="mr-[10px] my-1">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <p className="text-sm">{description}</p>
                </div>
            </div>
            <div className="flex">
                <button onClick={() => { open = false; setstate(open) }} className=" text-white font-senibold my-auto w-[40px] h-[30px] border-l-[1px] text-xl" type="transparent">X</button>
            </div>

        </div>)
}