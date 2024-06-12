const { useParams } = require("next/navigation");
const { useEffect } = require("react");

const ApplicantResumePage = () => {
  const params = useParams();
  useEffect(() => {
    if (params) {
      console.log(params.userId);
    }
  }, [params]);

  return <div>{params && <h1>Applicant Resume Page{params.userId}</h1>}</div>;
};

export default ApplicantResumePage;
