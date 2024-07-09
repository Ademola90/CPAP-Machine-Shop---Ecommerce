import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const Inputs = ({
  placeholder,
  label,
  onChange,
  type,
  name,
  css,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div>
      <div>
        {" "}
        <strong className="text-base satoshi font-medium text-[#3e4347]">
          {label}
        </strong>
      </div>
      <input
        type={type || "text"}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full ${css} pl-6 h-49px text-base text-plain font-normal satoshi border border-[#E0E0E0]`}
        id=""
      />
    </div>
  );
};

export const TextInputs = ({
  placeholder,
  label,
  onChange,
  type,
  name,
  css,
  onMouseEnter,
  onMouseLeave,
  value,
  ...restProps
}) => {
  return (
    <div>
      <div>
        {" "}
        <strong className="text-base satoshi font-medium text-[#3e4347]">
          {label}
        </strong>
      </div>
      <input
        type={type || "text"}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className={`${css} lg:w-full rounded-2xl w-full outline-none mt-2  pl-6 h-12 text-base text-plain font-normal satoshi border border-[#E0E0E0]`}
        id=""
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        value={value}
        {...restProps}
      />
    </div>
  );
};

export const PasswordInputs = ({
  placeholder,
  label,
  onChange,
  type,
  name,
  css,
  onMouseEnter,
  onMouseLeave,
  value,
  ...restProps
}) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div>
        {" "}
        <strong className="text-base satoshi font-medium text-[#3e4347]">
          {label}
        </strong>
      </div>
      <div
        className={`${css} lg:w-full rounded-2xl mt-2  relative h-12 text-base text-plain font-normal satoshi border border-[#E0E0E0]`}
      >
        <input
          type={show ? "text" : "password"}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          className={`h-full pl-6 w-full outline-none rounded-2xl focus:border-none`}
          id=""
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          value={value}
          {...restProps}
        />
        <div
          onClick={() => setShow(!show)}
          className="absolute cursor-pointer top-5 right-4"
        >
          {show ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>
    </div>
  );
};

export const SearchInput = ({ placeholder, onChange }) => {
  return (
    <input
      className="border-[#DDDEEE] border rounded-md w-80 h-10 placeholder:text-sm px-2 placeholder-[#757576]"
      placeholder={placeholder}
      type="text"
      onChange={onChange}
    />
  );
};
export const Input = ({ placeholder, onChange, width, height, css }) => {
  return (
    <input
      className={`border-[#DDDEEE] ${width} ${css} outline-none border rounded-md h-10 placeholder:text-sm px-2 placeholder-[#757576]`}
      placeholder={placeholder}
      type="text"
      onChange={onChange}
    />
  );
};

export const BranchSelectInput = ({
  placeholder,
  onChange,
  borderColor,
  height,
  width,
  rounded,
}) => {
  return (
    <div className="flex items-center relative">
      <input
        className={`border-[#DDDEEE] ${rounded} border rounded-md w-80 h-10 placeholder:text-sm px-2 placeholder-[#757576]`}
        placeholder={placeholder}
        type="text"
        onChange={onChange}
        style={{ borderColor: borderColor, width: width, height: height }}
      />
      <RiArrowDropDownLine
        className="absolute right-2 cursor-pointer"
        size={24}
      />
    </div>
  );
};

export const Select = ({ optfour, optone, optthree, opttwo, css }) => {
  return (
    <div>
      <select
        name=""
        className={`w-full pl-2 h-full text-base text-plain font-normal satoshi border border-[#E0E0E0] ${css}`}
      >
        <option value="">{optone}</option>
        <option value="">{opttwo}</option>
        <option value="">{optthree}</option>
        <option value="">{optfour}</option>
      </select>
    </div>
  );
};

export default Inputs;
