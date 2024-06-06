const AllJobsTable = ({ tableData }) => {
  const tableClasses = "min-w-full bg-white shadow-md rounded-lg";
  const thClasses = "py-3 px-1 text-sm font-medium";
  const tdClasses =
    "max-w-16 overflow-hidden w-fit py-3 px-1 text-xs font-semibold";
  const statusClasses = "border py-1 px-3 rounded-full text-xs";
  const rowClasses = "border-b border-zinc-200 hover:bg-zinc-100";
  const headerRowClasses = "border-b border-zinc-200 text-zinc-400 text-sm";
  const fontClasses = "text-zinc-600 text-sm font-light";

  return (
    <div className="overflow-y-auto">
      <table className={`${tableClasses}`}>
        <thead>
          <tr className={headerRowClasses}>
            <th className={`${thClasses} text-start `}>ID</th>
            <th className={`${thClasses} text-start `}>Job Title</th>
            <th className={`${thClasses} text-center `}>Experience</th>
            <th className={`${thClasses} text-center `}>Salary</th>
            <th className={`${thClasses}  text-center`}>Openings</th>
            <th className={`${thClasses} text-center`}>Applications</th>
            <th className={`${thClasses} text-center`}>Date</th>
            <th className={`${thClasses} text-center`}>Coordinator</th>
            <th className={`${thClasses} text-center`}>Status</th>
          </tr>
        </thead>
        <tbody className={fontClasses}>
          {tableData.map((rowData, index) => (
            <tr key={index} className={rowClasses}>
              <td className={`${tdClasses} text-left whitespace-nowrap`}>
                {rowData.id}
              </td>
              <td className={`${tdClasses} text-left whitespace-nowrap`}>
                {rowData.title}
              </td>
              <td className={`${tdClasses} text-center whitespace-nowrap`}>
                {rowData.experience}
              </td>
              <td className={`${tdClasses} text-center whitespace-nowrap`}>
                {rowData.salary}
              </td>
              <td className={`${tdClasses} text-center`}>{rowData.openings}</td>
              <td className={`${tdClasses} text-center`}>
                {rowData.applications}
              </td>
              <td className={`${tdClasses} text-center`}>
                {rowData.dateOfPost}
              </td>
              <td className={`${tdClasses} text-center`}>
                {rowData.coordinator}
              </td>
              <td className={`${tdClasses} text-center`}>
                <span
                  className={`${statusClasses} ${
                    rowData.status
                      ? "border-green-600 bg-green-300 text-green-600 "
                      : "border-red-600 bg-red-300 text-red-600 "
                  } w-16 block mx-auto`}
                >
                  {rowData.status ? "Active" : "Inactive"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllJobsTable;
