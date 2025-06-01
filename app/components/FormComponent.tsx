"use client";

import { IoSearch } from "react-icons/io5";

export default function FormComponent() {
  return (
    <>
        <form className="grid grid-cols-6 gap-4 p-6 rounded-lg max-w-7xl">
            <select className="custom-input col-span-6">
                <option disabled selected>Country/Region</option>
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
            <input
                type="text"
                placeholder="Postal code"
                className="custom-input col-span-3"
            />
            <input
                type="text"
                placeholder="City"
                className="custom-input col-span-3"
            />
            <input
                type="phone"
                placeholder="Phone"
                className="custom-input col-span-6"
            />
        </form>
    </>
  )
}
