import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const TextInput = () => {
  let [phoneNumber, setPhoneNumber] = useState("");
  let [valid, setValid] = useState(true);

  const handleChange = (e) => {
    const input = e.target.value;
    setPhoneNumber(input);
    setValid(validatePhoneNumber(input));
  };

  const validatePhoneNumber = (input) => {
    return /^\d{10}$/.test(input);
  };

  return (
    <div className="mt-4">
      <label className="text-xs text-fade">Phone Number</label>
      <div className="flex gap-2 text-sm">
        <PhoneInput
          className="text-white font-base"
          containerStyle={{
            width:"100px"
          }}
          inputStyle={{
            backgroundColor:"black",
            width:"80px",
            fontSize:"14px",
            border: "1px solid rgb(156 163 175)"
          }}
          dropdownClass="text-black"
          country={"in"}
          inputProps={{
            required: true,
          }
          }
          disabled
        />
        <input value={phoneNumber} onChange={handleChange} type="text" className="bg-transparent border border-gray-400 rounded-md w-full font-base text-sm px-3 outline-none"/>
      </div>
        <p className = {`text-fade text-xs mt-1 ${!valid ? "visible" : "invisible"}`}>Please enter a valid number</p>
    </div>
  );
};
export default TextInput;
