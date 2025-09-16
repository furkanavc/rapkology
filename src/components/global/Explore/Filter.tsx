import clsx from "clsx";
import React from "react";
interface FilterProps {
  className?: string;
}
const Filter = ({ className }: FilterProps) => {
  return <div className={clsx(className ?? "")}>Filter</div>;
};

export default Filter;
