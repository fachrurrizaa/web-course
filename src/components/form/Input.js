import React from 'react'

export default function Input({ label, placeholder, type }) {
  return (
    <div className="form-control w-full max-w-xs">
        <label className="label">
            <span className="label-text font-normal text-[#160442] text-base mb-3">{ label }</span>
        </label>
        <input type={ type } placeholder={ placeholder } className="input input-bordered w-full max-w-xs text-[#6B7193] rounded-full mb-4" />
    </div>
  )
}
