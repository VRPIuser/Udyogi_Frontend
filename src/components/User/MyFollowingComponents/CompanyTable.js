import React from "react";
import CompanyRow from "./CompanyRow";

const TABLE_HEADER_CLASS =
  "text-xs text-zinc-700 uppercase bg-zinc-50 border-b";
const TABLE_CELL_CLASS = "relative py-2 px-3 bg-white";
const TABLE_ROW_CLASS = "bg-white border-b";

const CompanyTable = ({ companies, searchInput }) => {
  // Function to filter companies based on search input and company name
  const filteredCompanies = companies.filter((company) => {
    // Check if the company name includes the search input value
    return company.name
      .toLowerCase()
      .includes(searchInput.toLowerCase().trim());
  });

  return (
    <table className="w-full text-sm text-left text-zinc-500">
      <thead className={TABLE_HEADER_CLASS}>
        <tr>
          <th scope="col" className={`${TABLE_CELL_CLASS} pl-16 py-4`}>
            Name
          </th>
          <th scope="col" className={`${TABLE_CELL_CLASS} py-4`}>
            Founded date
          </th>
          <th scope="col" className={`${TABLE_CELL_CLASS} py-4`}></th>
        </tr>
      </thead>
      <tbody>
        {filteredCompanies.map((company, index) => (
          <CompanyRow key={index} company={company} />
        ))}
      </tbody>
    </table>
  );
};

export default CompanyTable;
