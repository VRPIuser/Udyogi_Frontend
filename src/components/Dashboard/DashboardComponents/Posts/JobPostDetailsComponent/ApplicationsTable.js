import { ValueUndefinedValidations } from "@/components/InputValidations/InputValidations";
import Dropdown from "@/components/UI/Dropdown/Dropdown";
import Pagination from "@/components/UI/Pagination/Pagination";
import TransformRawDataToTableData from "@/hooks/TransformRawDataToTableData";
import useInput from "@/hooks/use-Input";
import usePagination from "@/hooks/use-Pagination";
import { useRouter } from "next/router";
import { colorTheme } from "../../../../../../constants";
import { applicants } from "@/data/admin/applicantsData";
import {
  DateDate,
  Experiences,
  SalaryExpectationsData,
  StatusData,
} from "@/data/DropdownData";
import ConvertToValueUsedForCondition from "@/hooks/ConvertToValueUsedForCondition";

const {
  default: CustomTable,
} = require("@/components/UI/CustomTable/CustomTable");
const { useEffect, useState } = require("react");

const ApplicationsTable = () => {
  const experienceDropdownInput = useInput({
    validateValue: ValueUndefinedValidations,
  });
  const salaryExpectationsDropdownInput = useInput({
    validateValue: ValueUndefinedValidations,
  });
  const statusDropdownInput = useInput({
    validateValue: ValueUndefinedValidations,
  });
  const dateDropdownInput = useInput({
    validateValue: ValueUndefinedValidations,
  });

  const [filteredApplicants, setFilteredApplicants] = useState(applicants);

  // useEffect to filter applicants based on experience dropdown

  const router = useRouter();

  useEffect(() => {
    filterApplicants();
  }, [
    experienceDropdownInput.value,
    salaryExpectationsDropdownInput.value,
    statusDropdownInput.value,
    dateDropdownInput.value,
  ]);

  const filterApplicants = () => {
    let filtered = applicants;

    if (experienceDropdownInput.value) {
      filtered = filtered.filter(
        (applicant) =>
          ConvertToValueUsedForCondition(applicant.experience) ===
          ConvertToValueUsedForCondition(experienceDropdownInput.value.label)
      );
    }

    if (salaryExpectationsDropdownInput.value) {
      const salaryRange =
        salaryExpectationsDropdownInput.value.value.split("@");
      const salaryLowerLimit = Number(salaryRange[0]) || 0;
      const salaryUpperLimit = Number(salaryRange[1]) || Infinity;

      filtered = filtered.filter((applicant) => {
        const applicantSalary =
          Number(applicant.salaryExpectations.split(" ")[0]) || 0;
        return (
          applicantSalary >= salaryLowerLimit &&
          applicantSalary <= salaryUpperLimit
        );
      });
    }

    if (statusDropdownInput.value) {
      filtered = filtered.filter(
        (applicant) =>
          ConvertToValueUsedForCondition(applicant.status) ===
          ConvertToValueUsedForCondition(statusDropdownInput.value)
      );
    }

    if (dateDropdownInput.value) {
      const currentDate = new Date();
      let dateLimit = new Date();

      switch (dateDropdownInput.value) {
        case "Today":
          dateLimit.setDate(currentDate.getDate() - 1);
          break;
        case "1 week":
          dateLimit.setDate(currentDate.getDate() - 7);
          break;
        case "1 month":
          dateLimit.setMonth(currentDate.getMonth() - 1);
          break;
        case "1 year":
          dateLimit.setFullYear(currentDate.getFullYear() - 1);
          break;
        default:
          break;
      }

      filtered = filtered.filter((applicant) => {
        console.log(dateLimit, new Date(applicant.AppliedDate));

        return new Date(applicant.AppliedDate) >= dateLimit;
      });
    }

    setFilteredApplicants(filtered);
  };

  const { currentItems, currentPage, itemsPerPage, paginate, totalItems } =
    usePagination({ items: filteredApplicants, itemsPerPage: 3 });

  const data = currentItems.map((item) => {
    return {
      ...item,
      Actions: (
        <button
          className="border border-orange-500 hover:bg-orange-100 transition-all text-orange-500 bg-white px-2 py-1 rounded-lg"
          onClick={() => {
            router.push(`/dashboard/admin/user-profile/${item.id}`);
          }}
        >
          view
        </button>
      ),
    };
  });

  const tableData =
    data.length > 0
      ? TransformRawDataToTableData(data)
      : {
          rows: [],
          titles: [
            "id",
            "name",
            "experience",
            "salary Expectations",
            "notice Period",
            "status",
            "Applied Date",
            "Actions",
          ],
        };

  return (
    <div className="p-4 bg-white mt-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold my-4">All Applications</h2>
      <div className="flex gap-4 items-center justify-end">
        <Dropdown
          placeholder={"Experiences"}
          onSelect={(value) => experienceDropdownInput.AssignValue(value)}
          colorTheme={colorTheme.input}
          options={Experiences}
          inputStyles={{ maxWidth: "180px" }}
          style={{
            maxWidth: "180px",
          }}
        />
        <Dropdown
          placeholder={"Salary Expectations"}
          onSelect={(value) =>
            salaryExpectationsDropdownInput.AssignValue(value)
          }
          colorTheme={colorTheme.input}
          options={SalaryExpectationsData}
          inputStyles={{ maxWidth: "180px" }}
          style={{
            maxWidth: "180px",
          }}
        />
        <Dropdown
          placeholder={"Status"}
          onSelect={(value) => statusDropdownInput.AssignValue(value)}
          colorTheme={colorTheme.input}
          options={StatusData}
          inputStyles={{ maxWidth: "180px" }}
          style={{
            maxWidth: "180px",
          }}
        />
        <Dropdown
          placeholder={"Time passed"}
          onSelect={(value) => dateDropdownInput.AssignValue(value)}
          colorTheme={colorTheme.input}
          options={DateDate}
          inputStyles={{ maxWidth: "180px" }}
          style={{
            maxWidth: "180px",
          }}
        />
      </div>
      {tableData.rows.length > 0 ? (
        <CustomTable tableData={tableData}></CustomTable>
      ) : (
        <p>No Data</p>
      )}
      <div className="flex justify-between items-center w-full mt-4">
        <span>
          Showing data {1 + itemsPerPage * (currentPage - 1)} to{" "}
          {currentItems.length + itemsPerPage * (currentPage - 1)} of{" "}
          {filteredApplicants.length} entries
        </span>
        {console.log(currentItems.length, itemsPerPage)}
        {totalItems > itemsPerPage && (
          <Pagination
            itemsPerPage={itemsPerPage}
            onPageChange={paginate}
            totalItems={totalItems}
          />
        )}
      </div>
    </div>
  );
};

export default ApplicationsTable;
