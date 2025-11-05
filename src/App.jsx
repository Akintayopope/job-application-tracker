import './index.css'

export default function App() {
  return (
    <div className="min-h-screen bg-blue-50">
      <main className="max-w-5xl mx-auto py-8 space-y-6">
        <Heading />

        <StatsSection data={24} description="Total Applications" color='blue' />
        <StatsSection data={8} description="Interviews Scheduled" color='yellow' />
        <StatsSection data={2} description="Offers Received" color='green' />
        <StatsSection data={'33%'} description="Response Rate" color='purple' />
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

}

function JobList() {

}

function AddButton() {

}

function Footer() {

}