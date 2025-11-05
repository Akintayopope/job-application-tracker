import './index.css'
import jobs from './jobs.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-blue-50">
      <main className="max-w-5xl mx-auto py-8 space-y-6">
        <Heading />

        <StatsSection data={24} description="Total Applications" color='blue' />
        <StatsSection data={8} description="Interviews Scheduled" color='yellow' />
        <StatsSection data={2} description="Offers Received" color='green' />
        <StatsSection data={'33%'} description="Response Rate" color='purple' />
        <TabFilter />
        <JobList />
        <AddButton />

      </main>
    </div>
  );
}

const colorClasses = {
  blue: "bg-gradient-to-b from-blue-500 to-blue-400",
  yellow: "bg-gradient-to-b from-yellow-500 to-yellow-400",
  green: "bg-gradient-to-b from-green-500 to-green-400",
  purple: "bg-gradient-to-b from-purple-500 to-purple-400"

}


function Heading() {
  return (
    <header className="my-6 px-6">
      <h1 className="text-3xl font-bold text-gray-800">
        Job Application Tracker
      </h1>
      <h6 className="text-sm text-gray-500 font-medium">
        Keep track of your job search journey
      </h6>
    </header>
  );
}

function StatsSection({ data, description, color = 'blue' }) {
  return (
    <div className="flex bg-white rounded-xl shadow-lg border border-gray-200 mt-2 mb-3 overflow-hidden">

      <div className={`w-2 ${colorClasses[color]}`}></div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900">{data}</h2>
        <h6 className="text-sm text-gray-500">{description}</h6>
      </div>
    </div>
  );
}

function TabFilter() {
  const tabItems = tabs.map((tab, i) => <li key={i} className="
        px-4 py-2 rounded-lg font-medium text-sm cursor-pointer
        bg-gray-200 text-gray-700 shadow-sm
        hover:bg-blue-600 hover:text-white hover:shadow-md
        active:bg-blue-700 transition
      "
  >{tab.label} ({tab.count})</li>)


  return <ul className="flex gap-3 list-none">{tabItems}</ul>

}

const tabs = [
  { label: "All", count: 24 },
  { label: "Applied", count: 12 },
  { label: "Interview", count: 8 },
  { label: "Offer", count: 2 },
  { label: "Rejected", count: 2 },
];


function JobCard({ status, title, company, appliedDate, salary, location, nextStep, highlightColor },) {
  const colorMap = {
    yellow: "bg-yellow-400",
    green: "bg-green-500",
    blue: "bg-blue-500",
    red: "bg-red-500"
  };


  return (


    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mt-4 relative overflow-hidden hover:shadow-lg transition">
      <div className={`absolute top-0 left-0 w-full h-1 ${colorMap[highlightColor]}`}></div>
      <span className={`absolute top-4 right-4 ${colorMap[highlightColor]} text-xs font-medium px-3 py-1 rounded-full`}>

        {status}
      </span>
      <h2 className="text-lg font-semibold text-gray-900">{jobs.title}</h2>
      <p className="text-sm text-gray-600 mb-3">{company}</p>
      <div className="flex flex-col gap-1 text-sm text-gray-700 mb-4">
        <p>📅 Applied: {appliedDate}</p>
        <p>💰 Salary: {salary}</p>
        <p>📍 Location: {location}</p>
      </div>
      <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 text-sm p-3 rounded-md mb-4">
        <strong>Next step:</strong> {nextStep}
      </div>
      <a className="text-blue-600 text-sm font-medium hover:underline" href="#">
        View Application →
      </a>

    </div>)

}

function JobList() {
  return (jobs.map(job => (<div>
    <JobCard
      key={job.id}
      title={job.title}
      company={job.company}
      appliedDate={job.appliedDate}
      salary={job.salary}
      location={job.location}
      nextStep={job.nextStep}
      status={job.status}
      highlightColor={job.highlightColor} />
  </div>
  )))
}



function AddButton() {
  return (
    <div className="flex justify-center my-6">
      <button className="bg-blue-600 text-white font-semibold px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition">
        + Add New Application
      </button>
    </div>
  );
}


