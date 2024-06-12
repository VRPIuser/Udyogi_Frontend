import Dropdown from "@/components/UI/Dropdown/Dropdown";
import Pagination from "@/components/UI/Pagination/Pagination";
import TransformRawDataToTableData from "@/hooks/TransformRawDataToTableData";
import usePagination from "@/hooks/use-Pagination";
import { useRouter } from "next/router";

const {
  default: CustomTable,
} = require("@/components/UI/CustomTable/CustomTable");
const { useEffect } = require("react");

const ApplicationsTable = () => {
  const applicants = [
    {
      id: "001",
      name: "John",
      experience: "2 years",
      salaryExpectations: "5 LPA",
      noticePeriod: "15 Days",
      status: "Open",
      AppliedDate: "2022-01-15T08:30:00",
    },
    {
      id: "002",
      name: "John",
      experience: "2 years",
      salaryExpectations: "5 LPA",
      noticePeriod: "15 Days",
      status: "Open",
      AppliedDate: "2022-01-15T08:30:00",
    },
    {
      id: "003",
      name: "John",
      experience: "2 years",
      salaryExpectations: "5 LPA",
      noticePeriod: "15 Days",
      status: "Open",
      AppliedDate: "2022-01-15T08:30:00",
    },
    {
      id: "004",
      name: "John",
      experience: "2 years",
      salaryExpectations: "5 LPA",
      noticePeriod: "15 Days",
      status: "Open",
      AppliedDate: "2022-01-15T08:30:00",
    },
    {
      id: "005",
      name: "John",
      experience: "2 years",
      salaryExpectations: "5 LPA",
      noticePeriod: "15 Days",
      status: "Open",
      AppliedDate: "2022-01-15T08:30:00",
    },
    {
      id: "006",
      name: "John",
      experience: "2 years",
      salaryExpectations: "5 LPA",
      noticePeriod: "15 Days",
      status: "Open",
      AppliedDate: "2022-01-15T08:30:00",
    },
  ];
  const { currentItems, currentPage, itemsPerPage, paginate, totalItems } =
    usePagination({ items: applicants, itemsPerPage: 3 });

  const router = useRouter();

  const data = currentItems.map((item) => {
    return {
      ...item,
      Actions: (
        <button
          className="border border-orange-500 hover:bg-orange-100 transition-all text-orange-500 bg-white px-4 py-2 rounded-lg"
          onClick={() => {
            router.push(`/dashboard/admin/resume/${item.id}`);
          }}
        >
          View
        </button>
      ),
    };
  });

  const tableData = TransformRawDataToTableData(data);
  return (
    <div className="p-4 bg-white mt-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold my-4">All Applications</h2>

      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />

      <CustomTable tableData={tableData}></CustomTable>
      <div className="flex justify-between items-center w-full">
        <span>
          Showing data {1 + itemsPerPage * (currentPage - 1)} to{" "}
          {currentItems.length + itemsPerPage * (currentPage - 1)} of{" "}
          {applicants.length} entries
        </span>

        <Pagination
          itemsPerPage={itemsPerPage}
          onPageChange={paginate}
          totalItems={totalItems}
        />
      </div>
    </div>
  );
};

export default ApplicationsTable;
