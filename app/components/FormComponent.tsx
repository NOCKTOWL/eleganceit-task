"use client";

export default function FormComponent() {
  return (
    <>
        <form className="grid grid-cols-6 gap-4 p-6 rounded-lg max-w-7xl">
            <select className="custom-input col-span-6">
                <option value="" disabled selected>Country/Region</option>
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
        </form>
    </>
  )
}
