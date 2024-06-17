import CompanyInfoForm from "@/components/Dashboard/DashboardComponents/ProfileComponent/ProfileComponent";
import DashboardLayout from "@/components/Dashboard/DashboardLayout.js/DashboardLayout";
import {
  ABCTechnologies,
  DataCrunchersInc,
  VRPIGroup,
} from "@/data/CompaniesData";
import ConvertToValueUsedForCondition from "@/hooks/ConvertToValueUsedForCondition";

const AdminProfile = () => {
  const companyDetails = DataCrunchersInc;

  const getSocialLink = (title) => {
    return (
      companyDetails.socialMediaLinks.find((link) => {
        return ConvertToValueUsedForCondition(link.title) === title;
      })?.address || ""
    ); // Ensure that you are returning the URL of the link.
  };

  const facebookLink = getSocialLink("facebook");
  const twitterLink = getSocialLink("twitter");
  const instagramLink = getSocialLink("instagram");
  const linkedinLink = getSocialLink("linkedin");
  const whatsappLink = getSocialLink("whatsapp");

  const companyData = {
    logo: companyDetails.logo,
    companyName: companyDetails.name || "",
    industryType: companyDetails.industryType || "",
    location: companyDetails.location || "",
    totalFollowers: companyDetails.totalFollowers || "",
    totalRecruiters: companyDetails.totalRecruiters || "",
    currentOpenings: companyDetails.currentOpenings || "",
    mobileNumber: companyDetails.mobileNumber || "",
    emailId: companyDetails.emailId || "",
    companyURL: companyDetails.companyWebsite || "",
    facebookLink: facebookLink,
    twitterLink: twitterLink,
    linkedinLink: linkedinLink,
    instagramLink: instagramLink,
    whatsappLink: whatsappLink,
    companySize: companyDetails.companySize
      ? {
          label: `${companyDetails.companySize.lowerLimit}-${companyDetails.companySize.upperLimit} members`,
          value: `${companyDetails.companySize.lowerLimit}@${companyDetails.companySize.upperLimit}`,
        }
      : { label: "", value: "" },
    foundedIn: companyDetails.foundedIn || "",
    incorporateId: "",
    overview: companyDetails.overview || "",
  };

  return (
    <DashboardLayout>
      <CompanyInfoForm companyData={companyData} />
    </DashboardLayout>
  );
};

export default AdminProfile;
