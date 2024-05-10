import React, { useState, useEffect } from "react";

const JobFilter = ({
  onFiltering,
  filters,
  filteredJobs,
  onSettingSalaryRange,
  salaryRange,
  showFilter,
}) => {
  const [filterSections, setFilterSections] = useState(filters);
  // const [salaryRange, setSalaryRange] = useState({ min: 0, max: 50 });

  useEffect(() => {
    updateButtonCounts();
  }, [filteredJobs, salaryRange]);

  const updateButtonCounts = () => {
    const typeCounts = {};

    // Count the number of each job type, job mode, and shift
    filteredJobs.forEach((job) => {
      ["workType", "jobType", "shift"].forEach((key) => {
        const type = job[key]?.toString().trim().toLowerCase();
        if (type) {
          typeCounts[type] = (typeCounts[type] || 0) + 1;
        }
      });
    });

    // Update button counts
    const updatedFilterSections = filterSections.map((section) => ({
      ...section,
      buttons: section.buttons.map((button) => ({
        ...button,
        count:
          button.value === "all"
            ? filteredJobs.length
            : typeCounts[button.value] || 0,
      })),
    }));

    setFilterSections(updatedFilterSections);
  };

  const handleCheckboxChange = (sectionIndex, buttonIndex) => {
    const updatedFilterSections = [...filterSections];
    const section = updatedFilterSections[sectionIndex];

    const updatedButtons = section.buttons.map((button, index) => {
      if (index === buttonIndex) {
        return {
          ...button,
          checked: !button.checked,
        };
      } else if (index === 0) {
        return {
          ...button,
          checked: false,
        };
      }
      return button;
    });

    section.buttons[0].checked = !updatedButtons
      .slice(1)
      .some((button) => button.checked);
    section.buttons = updatedButtons;

    onFiltering(updatedFilterSections);
  };

  const handleSalaryChange = (event) => {
    const { name, value } = event.target;
    const newValue = parseInt(value);
    // Ensure that the minimum value is less than or equal to the maximum value
    if (name === "min" && newValue > salaryRange.max) {
      onSettingSalaryRange({ ...salaryRange, max: newValue });
    } else if (name === "max" && newValue < salaryRange.min) {
      onSettingSalaryRange({ ...salaryRange, min: newValue });
    } else {
      onSettingSalaryRange({ ...salaryRange, [name]: newValue });
    }
    // onSettingSalaryRange(salaryRange);
  };

  return (
    <>
      {
        <div
          className={`bg-white p-4 shadow-md rounded-lg min-w-60 w-full max-w-96 mb-4 h-fit ${
            showFilter ? "block" : "hidden"
          }`}
        >
          {filterSections.map(({ title, buttons }, sectionIndex) => (
            <FilterSection
              key={sectionIndex}
              title={title}
              buttons={buttons}
              onCheckboxChange={(buttonIndex) =>
                handleCheckboxChange(sectionIndex, buttonIndex)
              }
            />
          ))}
          <div className="mb-3">
            <h2 className="font-semibold mb-2">Salary Range</h2>
            <div className="flex items-center gap-4">
              <label className="w-10">Min</label>
              <input
                type="range"
                name="min"
                value={salaryRange.min}
                min="0"
                max="50"
                step="1"
                onChange={handleSalaryChange}
                className="w-full"
              />
              <span className="w-24">{`${salaryRange.min} LPA`}</span>
            </div>
            <div className="flex items-center gap-4">
              <label className="w-10">Max</label>

              <input
                type="range"
                name="max"
                value={salaryRange.max}
                min="0"
                max="50"
                step="1"
                onChange={handleSalaryChange}
                className="w-full"
              />
              <span className="w-24">{`${salaryRange.max} LPA`}</span>
            </div>
          </div>
        </div>
      }
    </>
  );
};

const FilterSection = ({ title, buttons, onCheckboxChange }) => (
  <div className="mb-3">
    <h2 className="font-semibold mb-2">{title}</h2>
    <div className="grid grid-cols-2 gap-2">
      {buttons.map(({ label, checked, count }, buttonIndex) => (
        <label key={buttonIndex} className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            checked={checked}
            onChange={() => onCheckboxChange(buttonIndex)}
          />
          <span className="ml-2 text-sm">
            {label} ({count})
          </span>
        </label>
      ))}
    </div>
  </div>
);

export default JobFilter;
