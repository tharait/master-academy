import * as React from "react";

export const InputError = (props: { error: string }) => {
  return (
    <div className="text-red-500 text-sm">{props.error}</div>
  );
}