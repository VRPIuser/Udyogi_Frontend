import UsersTable from "./UsersTable";
import sharedClasses from "../DashboardClasses";
import SearchInput from "@/components/UI/SearchInput/SearchInput";
import useInput from "@/hooks/use-Input";
import { ValueUndefinedValidations } from "@/components/InputValidations/InputValidations";
import Dropdown from "@/components/UI/Dropdown/Dropdown";
import { colorTheme } from "../../../../../constants";
import Pagination from "@/components/UI/Pagination/Pagination";
import usePagination from "@/hooks/use-Pagination";
import { useEffect } from "react";

const tableData = [
  {
    id: "1",
    coordinator: "Pavan",
    emailId: "pavan",
    noOfPosts: "1",
    applications: "1",
    dateOfPost: "12/12/2020",
    status: "Active",
  },
  {
    id: "2",
    coordinator: "Pavan",
    emailId: "pavan",
    noOfPosts: "1",
    applications: "1",
    dateOfPost: "12/12/2020",
    status: "Active",
  },
  {
    id: "3",
    coordinator: "Pavan",
    emailId: "pavan",
    noOfPosts: "1",
    applications: "1",
    dateOfPost: "12/12/2020",
    status: "Active",
  },
  {
    id: "4",
    coordinator: "Pavan",
    emailId: "pavan",
    noOfPosts: "1",
    applications: "1",
    dateOfPost: "12/12/2020",
    status: "Active",
  },
  {
    id: "5",
    coordinator: "Pavan",
    emailId: "pavan",
    noOfPosts: "1",
    applications: "1",
    dateOfPost: "12/12/2020",
    status: "Active",
  },
  {
    id: "6",
    coordinator: "Pavan",
    emailId: "pavan",
    noOfPosts: "1",
    applications: "1",
    dateOfPost: "12/12/2020",
    status: "Active",
  },
  {
    id: "7",
    coordinator: "Pavan",
    emailId: "pavan",
    noOfPosts: "1",
    applications: "1",
    dateOfPost: "12/12/2020",
    status: "Active",
  },
  {
    id: "8",
    coordinator: "Pavan",
    emailId: "pavan",
    noOfPosts: "1",
    applications: "1",
    dateOfPost: "12/12/2020",
    status: "Active",
  },
  {
    id: "9",
    coordinator: "Pavan",
    emailId: "pavan",
    noOfPosts: "1",
    applications: "1",
    dateOfPost: "12/12/2020",
    status: "Active",
  },
  {
    id: "10",
    coordinator: "Pavan",
    emailId: "pavan",
    noOfPosts: "1",
    applications: "1",
    dateOfPost: "12/12/2020",
    status: "Active",
  },
  {
    id: "11",
    coordinator: "Pavan",
    emailId: "pavan",
    noOfPosts: "1",
    applications: "1",
    dateOfPost: "12/12/2020",
    status: "Active",
  },
  {
    id: "12",
    coordinator: "Pavan",
    emailId: "pavan",
    noOfPosts: "1",
    applications: "1",
    dateOfPost: "12/12/2020",
    status: "Active",
  },
  {
    id: "13",
    coordinator: "Pavan",
    emailId: "pavan",
    noOfPosts: "1",
    applications: "1",
    dateOfPost: "12/12/2020",
    status: "Active",
  },
  {
    id: "14",
    coordinator: "Pavan",
    emailId: "pavan",
    noOfPosts: "1",
    applications: "1",
    dateOfPost: "12/12/2020",
    status: "Active",
  },
];

const UsersComponent = () => {
  const searchInput = useInput({ validateValue: ValueUndefinedValidations });

  const { currentItems, currentPage, itemsPerPage, paginate, totalItems } =
    usePagination({ items: tableData, itemsPerPage: 8 });

  return (
    <div className="mt-4 p-4 bg-white rounded-lg">
      <div className={`${sharedClasses.flexCenter} mb-4`}>
        <h2 className="text-lg font-semibold">All Users</h2>
        <div className="flex gap-4">
          <SearchInput searchInput={searchInput} />
          <DateFilter />
          <button className={`${sharedClasses.button}`}>Create Post</button>
        </div>
      </div>
      <UsersTable tableData={currentItems} />
      <div className="flex justify-between items-center">
        <span>
          Showing data 1 to {itemsPerPage} of {tableData.length} entries
        </span>

        <Pagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={paginate}
        />
      </div>
    </div>
  );
};

export default UsersComponent;

const DateFilter = () => {
  const DateFilterInput = useInput({
    validateValue: ValueUndefinedValidations,
  });

  const DateOptions = [
    {
      label: "today",
      value: 0,
    },
    {
      label: "yesterday",
      value: 1,
    },
    {
      label: "one week",
      value: 7,
    },
    {
      label: "month",
      value: 30,
    },
    {
      label: "year",
      value: 365,
    },
  ];

  useEffect(() => {
    console.log(DateFilterInput.value);
  });

  return (
    <div className="bg-zinc-100 border border-zinc-200 rounded-lg flex items-center justify-center p-1 content-center gap-2">
      <span className="text-sm">Sort by :</span>
      {/* <Dropdown
        options={DateOptions}
        onSelect={(value) => DateFilterInput.AssignValue(value)}
        placeholder={"filter"}
        inputStyles={{
          margin: 0,
          border: "0px solid",
          // backgroundColor: "#f1f1f14d",
          width: "100px",
          fontWeight: "500",
          // height: "40px",
          // padding: "0.3rem",
        }}
        colorTheme={colorTheme.input}
        style={{
          minWidth: "100px",
          // width: "100px",
          // height: "40px",
        }}
        optionStyles={{
          top: "100%",
        }}
      /> */}
      <select
        onChange={DateFilterInput.valueChangeHandler}
        className="rounded-lg px-1"
      >
        {DateOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
