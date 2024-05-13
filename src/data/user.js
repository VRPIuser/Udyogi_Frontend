import Skills from "@/components/Signup/Preferences/skills";

const UserData = {
  firstName: "Kattula Pavan",
  lastName: "Kumar",
  mobileNumber: "9645784689",
  gender: "male",
  email: "pavan@gmail.com",

  WorkExperience: {
    totalExperience: {
      totalYears: 1,
      totalMonths: 1,
    },
    noticePeriod: "15 Days",
    experiencesDetails: [
      {
        companyName: "TCS",
        jobTitle: "Frontend Developer",
        location: "Hyderabad",
        salary: "3.76",
        startDate: "2022-01-27",
        endDate: "2024-08-01",
        latestExperience: true,
      },
      {
        companyName: "TCS",
        jobTitle: "Frontend Developer",
        location: "Hyderabad",
        salary: "3.76",
        startDate: "2022-01-27",
        endDate: "2024-08-01",
        latestExperience: true,
      },
    ],
  },
  educationDetails: [
    {
      degree: "Bachelor of Technology",
      collegeName: "Sri Venkateswara College of Engineering",
      specializedIn: "Mechanical Engineering",
      startDate: "2017-06-27",
      endDate: "2021-08-01",
      latestDegree: true,
    },
    {
      degree: "Bachelor of Technology",
      collegeName: "Sri Venkateswara College of Engineering",
      specializedIn: "Mechanical Engineering",
      startDate: "2017-06-27",
      endDate: "2021-08-01",
      latestDegree: false,
    },
  ],

  resume: {
    fileName: "resume.pdf",
    updatedOn: "2024-08-01",
  },

  preference: {
    jobRole: ["UI Designer", "Frontend Developer"],
    Skills: [
      "Problem Solving",
      "Interpersonal Skills",
      "User Research",
      "CSS",
      "Bootstrap",
    ],
    location: ["Bangalore", "Gurgaon", "Delhi", "Pune", "Lucknow", "Mumbai"],
    jobType: ["Contractual", "Permanent"],
    experience: {
      upperLimit: 3,
      lowerLimit: 1,
      experienceMetrics: "years",
    },
    workMode: ["Work from Home", "Hybrid", "Remote", "Onsite"],
  },
  profilePic: false,

  jobApplications: [
    {
      jobId: "1",
      applicantId: "1",
      applicationStatus: [
        {
          status: "Applied",
          statusDate: "2024-05-06",
        },
        {
          status: "Profile Viewed",
          statusDate: "2024-05-07",
        },
      ],
    },
    {
      jobId: "2",
      applicantId: "1",
      status: "Rejected",
      applicationStatus: [
        {
          status: "Applied",
          statusDate: "2024-05-06",
        },
        {
          status: "Profile Viewed",
          statusDate: "2024-05-07",
        },
        {
          status: "Rejected",
          statusDate: "2024-05-07",
        },
      ],
    },
    {
      jobId: "3",
      applicantId: "2",
      status: "Shortlisted",
      applicationStatus: [
        {
          status: "Applied",
          statusDate: "2024-05-06",
        },
        {
          status: "Profile Viewed",
          statusDate: "2024-05-07",
        },
        {
          status: "Shortlisted",
          statusDate: "2024-05-07",
        },
      ],
    },
    // Add more job applications as needed...
  ],
  savedJobs: [
    {
      jobId: "3",
      savedOn: "2024-04-01",
    },
    {
      jobId: "5",
      savedOn: "2024-02-01",
    },
    {
      jobId: "6",
      savedOn: "2024-01-01",
    },
  ],
};

export default UserData;
