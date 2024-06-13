const RecruitersTable = ({ RecruitersTableData }) => {
  const tableClasses = "min-w-full bg-white rounded-lg";
  const thClasses = "py-3 px-1 text-sm font-medium";
  const tdClasses = "py-3 px-1 text-xs font-semibold";
  const statusClasses = "border py-1 px-3 rounded-full text-xs";
  const rowClasses = "border-b border-zinc-200 hover:bg-zinc-100";
  const headerRowClasses = "border-b border-zinc-200 text-zinc-400 text-sm";
  const fontClasses = "text-zinc-600 text-sm font-light";
  const hideInMobileForm = "";
  // "md:inline hidden";

  return (
    <div className="h-fit overflow-auto" style={{ minHeight: "500px" }}>
      <table className={`${tableClasses}`}>
        <thead>
          <tr className={headerRowClasses}>
            <th className={`${thClasses} text-start `}>ID</th>
            <th className={`${thClasses} text-start `}>CoOrdinator</th>
            <th className={`${thClasses}  text-start`}>Email-Id</th>
            <th className={`${thClasses}  text-center ${hideInMobileForm}`}>
              No.Of Posts
            </th>
            <th className={`${thClasses} text-center ${hideInMobileForm}`}>
              Applications
            </th>
            <th className={`${thClasses} text-center ${hideInMobileForm}`}>
              Date of Post
            </th>
            <th className={`${thClasses} text-center `}>Status</th>
          </tr>
        </thead>
        <tbody className={fontClasses}>
          {RecruitersTableData?.map((rowData, index) => (
            <tr key={index} className={rowClasses}>
              <td className={`${tdClasses} text-left whitespace-nowrap`}>
                {rowData.id}
              </td>
              <td className={`${tdClasses} text-left whitespace-nowrap`}>
                {rowData.coordinator}
              </td>
              <td className={`${tdClasses}  text-left whitespace-nowrap`}>
                {rowData.emailId}
              </td>
              <td className={`${tdClasses} text-center ${hideInMobileForm}`}>
                {rowData.noOfPosts}
              </td>
              <td className={`${tdClasses} text-center ${hideInMobileForm}`}>
                {rowData.applications}
              </td>
              <td className={`${tdClasses} ${hideInMobileForm}  text-center`}>
                {rowData.dateOfPost}
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
export default RecruitersTable;
