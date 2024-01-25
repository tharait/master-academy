import * as React from "react";

export default function PageHeading(props: {
  heading: string;
  meta?: React.ReactNode;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 justify-between my-4">
      <div className="flex gap-4 items-center">
        {props.icon &&
        <div className="flex-none flex items-center justify-center w-14 h-14 rounded bg-gray-200">
          {props.icon}
        </div>
        }
        <div>
          <h1 className="font-bold text-lg my-0">{props.heading}</h1>
          {props.meta && (
            <p className="font-normal text-sm text-gray-400 my-0">
              {props.meta}
            </p>
          )}
        </div>
      </div>
      <div>{props.children}</div>
    </div>
  );
}
