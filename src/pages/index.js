import RootLayout from "@/components/RootLayout/RootLayout";
import MainScreen from "@/components/HomeComponents/MainScreen/MainScreen";
import UsersOptions from "@/components/HomeComponents/UsersOptions/UsersOptions";
import LatestJobs from "@/components/HomeComponents/LatestJobs/LatestJobs";
import CompaniesHiring from "@/components/HomeComponents/CompaniesHiring/CompaniesHiring";
import FraudAlert from "@/components/HomeComponents/FraudAlert/FraudAlert";

export default function Home() {
  return (
    <RootLayout>
      <MainScreen />
      <UsersOptions />
      <LatestJobs />
      <CompaniesHiring />
      <FraudAlert />
    </RootLayout>
  );
}
