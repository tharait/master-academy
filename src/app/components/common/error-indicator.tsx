import * as React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

export const ErrorIndicator = ({message}: {message: string}) => {
    return (
        <div className="bg-red-100 text-red-800 rounded p-3 flex gap-4 items-center">
            <div className="w-8 h-8 text-red-800">
                <FaExclamationTriangle/>
            </div> 
            <div>{message}</div>
        </div>
    )
}