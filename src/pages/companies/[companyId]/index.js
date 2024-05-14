import CompanyInfo from "@/components/CompaniesDetailsComponent/CompanyInfo";
import MainScreen from "@/components/CompaniesDetailsComponent/MainScreen";
import ManualNavbar from "@/components/ManualNavbar/ManualNavbar";
import RootLayout from "@/components/RootLayout/RootLayout";

const { AllCompaniesData } = require("@/data/CompaniesData");
const { useRouter } = require("next/router");
const { useEffect, useState } = require("react");

const CompanyDetailsPage = () => {
  const router = useRouter();
  const query = router.query;
  const [company, setCompany] = useState();
  useEffect(() => {
    setCompany(
      AllCompaniesData.find(
        (company) => company.id.toString().trim() === query?.companyId
      )
    );
  }, [query]);

  const linkData = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Companies",
      link: "/companies",
    },
    {
      name: company?.name,
      link: `/companies/${company?.id}`,
    },
  ];
  return (
    <RootLayout>
      {linkData && <ManualNavbar data={linkData} />}
      {company && (
        <div className="flex lg:flex-nowrap flex-wrap gap-8  mx-auto justify-center py-8 px-4">
          <MainScreen company={company} />
          <CompanyInfo company={company} />
        </div>
      )}
    </RootLayout>
  );
};

export default CompanyDetailsPage;
