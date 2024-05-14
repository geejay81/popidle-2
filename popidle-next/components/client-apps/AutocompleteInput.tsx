import React, { useEffect, useState, KeyboardEvent } from 'react';

interface AutocompleteProps {
  options: string[];
  inputStyle: {}
}

const Autocomplete: React.FC<AutocompleteProps> = ({ options }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [currentFocus, setCurrentFocus] = useState<number>(-1);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    const filtered = options.filter(option =>
      option && option.toUpperCase().includes(value.toUpperCase())
    );
    setFilteredOptions(filtered);
    setCurrentFocus(-1);
  };

  const handleOptionClick = (value: string) => {
    setInputValue(value);
    setFilteredOptions([]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const x = document.getElementById("autocomplete-list")?.getElementsByTagName("div");
    if (x) {
      if (e.key === "ArrowDown") {
        setCurrentFocus(prev => (prev < x.length - 1) ? prev + 1 : prev);
      } else if (e.key === "ArrowUp") {
        setCurrentFocus(prev => (prev > 0) ? prev - 1 : prev);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (currentFocus > -1) {
          setInputValue(filteredOptions[currentFocus]);
          setFilteredOptions([]);
          setCurrentFocus(-1);
        }
      }
    }
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (!document.getElementById("autocomplete-container")?.contains(e.target as Node)) {
      setFilteredOptions([]);
    }
  };

  return (
    <div id="autocomplete-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {filteredOptions.length > 0 && (
        <div id="autocomplete-list" className="autocomplete-items">
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              className={index === currentFocus ? "autocomplete-active" : ""}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Autocomplete;
