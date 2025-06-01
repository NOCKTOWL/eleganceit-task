"use client";

import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";

export default function FormComponent() {
  const [country, setCountry] = useState("");

  return (
    <>
        <form className="grid grid-cols-6 gap-4 p-6 rounded-lg max-w-7xl">
            <label className="col-span-6 hidden" htmlFor="country-select">Country/Region</label>
            <select
                id="country-select"
                className="custom-input col-span-6"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
            >
                <option value="" disabled>Country/Region</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Australia">Australia</option>
            </select>
            <input
                type="text"
                placeholder="First name"
                className="custom-input col-span-3"
            />
            <input
                type="text"
                placeholder="Last name"
                className="custom-input col-span-3"
            />
            <input
                type="text"
                placeholder="Company (optional)"
                className="custom-input col-span-6"
            />
            <div className="relative col-span-6 flex items-center">
                <input
                type="text"
                placeholder="Address"
                className="custom-input w-full"
                />
                <IoSearch className="absolute text-lg right-4 top-50% text-gray-500" />
            </div>
            <input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                className="custom-input col-span-6"
            />
            {country !== "Australia" && (
                <input
                    type="text"
                    placeholder="Postal code"
                    className="custom-input col-span-3"
                />
            )}
            <input
                type="text"
                placeholder="City"
                className={`custom-input ${country !== "Australia" ? "col-span-3" : "col-span-2"}`}
            />
            {country === "Australia" && (
                <>
                    <select
                        className="custom-input col-span-2"
                        defaultValue=""
                    >
                        <option value="" disabled>State/Territory</option>
                        <option value="North Holland">North Holland</option>
                        <option value="New South Wales">New South Wales</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Postcode"
                        className="custom-input col-span-2"
                    />
                </>
            )}
            
            <div className="relative col-span-6 flex items-center">
                <input
                type="phone"
                placeholder="Phone"
                className="custom-input w-full"
                />
                <FaRegQuestionCircle className="absolute text-lg right-4 top-50% text-gray-500" />
            </div>
        </form>
    </>
  )
}
