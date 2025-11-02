import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "m1",
      date: "2025-11-02",
      type: "Merit",
      description: "Outstanding performance in clinical practice",
      faculty_name: "Dr. Rodriguez",
      sanction: "Recognition",
    },
    {
      id: "d1",
      date: "2025-11-01",
      type: "Demerit",
      description: "Late attendance in morning rounds",
      faculty_name: "Prof. Santos",
      sanction: "2 hours",
    },
    {
      id: "si1",
      date: "2025-10-30",
      type: "Serious Infraction",
      description: "Unauthorized access to patient records",
      faculty_name: "Dr. Chen",
      sanction: "Committee Review",
    },
    {
      id: "m2",
      date: "2025-10-28",
      type: "Merit",
      description: "Volunteer work in community health program",
      faculty_name: "Dr. Smith",
      sanction: "Certificate",
    },
    {
      id: "d2",
      date: "2025-10-25",
      type: "Demerit",
      description: "Incomplete clinical documentation",
      faculty_name: "Dr. Rodriguez",
      sanction: "3 hours",
    },
    {
      id: "m3",
      date: "2025-10-20",
      type: "Merit",
      description: "Excellence in patient care",
      faculty_name: "Prof. Santos",
      sanction: "Recognition",
    },
    {
      id: "si2",
      date: "2025-10-15",
      type: "Serious Infraction",
      description: "Breach of patient confidentiality",
      faculty_name: "Dr. Chen",
      sanction: "Disciplinary Hearing",
    },
    {
      id: "d3",
      date: "2025-10-10",
      type: "Demerit",
      description: "Unprofessional communication with staff",
      faculty_name: "Dr. Smith",
      sanction: "4 hours",
    },
  ];
}

export default async function StudentDashBoard() {
  const data = await getData();
  return (
    <div className="flex flex-col w-full p-8 gap-5">
      <div className="flex flex-col gap-2">
        <h1 className="text-[#0A58A3] text-2xl">My Conduct History</h1>
        <p className="text-[#6C757D]">
          Complete record of all merits, demerits, and serious infractions.
        </p>
      </div>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
