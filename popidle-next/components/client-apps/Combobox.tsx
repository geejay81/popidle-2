"use client"

import { useCombobox } from "downshift"
import { useEffect, useState } from "react"

function getOptionFilter(inputValue: string) {
  const lowerCasedInputValue = inputValue.toLowerCase()

  return function optionFilter(option: any) {
    return (
      !inputValue ||
      option.toLowerCase().includes(lowerCasedInputValue)
    )
  }
}

type ComboBoxProps = {
  selectedItem: string,
  setSelectedItem: any,
  options: string[]
}

function ComboBox({selectedItem, setSelectedItem, options}: ComboBoxProps) {

  const [items, setItems] = useState<string[]>([]);

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    onInputValueChange({inputValue}) {
      setItems(options.filter(getOptionFilter(inputValue)))
    },
    items,
    itemToString(item) {
      return item ? item : ''
    },
    selectedItem,
    onSelectedItemChange: ({selectedItem: newSelectedItem}) => {
      setSelectedItem(newSelectedItem);
    },
  })
    return (
      <div>
        <div className="flex flex-col gap-1">
          <label htmlFor="search-field" className="w-fit" {...getLabelProps()}>
            Select an album
          </label>
          <div className="flex shadow-sm bg-white gap-0.5">
            <input
              id="search-field"
              placeholder="Search albums"
              className="w-full p-4 border border-black focus:border-2"
              autoComplete="off"
              {...getInputProps()}
            />
            {/* <button
              aria-label="toggle menu"
              className="p-4 border border-black focus:border-2"
              type="button"
              {...getToggleButtonProps()}
            >
              {isOpen ? <>&#8593;</> : <>&#8595;</>}
            </button> */}
          </div>
        </div>
        <ul
          className={`absolute w-72 bg-white mt-1 shadow-md max-h-40 overflow-scroll p-0 z-10 ${
            !(isOpen && items.length) && 'hidden'
          }`}
          {...getMenuProps()}
        >
          {isOpen &&
            items.map((item: any, index) => (
              <li className={
                `py-2 px-3 shadow-sm flex flex-col${highlightedIndex === index ? ' bg-slate-200' : ''}`}
                key={index}
                {...getItemProps({item, index})}
              >
                <span>{item}</span>
                {/* <span className="text-sm text-gray-700">{item.author}</span> */}
              </li>
            ))}
        </ul>
      </div>
    )
  }
  
export default ComboBox;