import { FaInfoCircle } from "react-icons/fa";

const tickets = [
    { id: 1, name: 'a-1, General Admission' },
    { id: 2, name: 'a-2, General Admission' },
    { id: 3, name: 'a-3, General Admission' },
];

const Ticket = ({ ticket }) => (
    <div
        key={ticket.id}
        className="flex justify-between p-2 border-b items-center border-gray-300  hover:bg-gray-100  h-[60px]">
        <span className="font-normal underline">{ticket.name}</span>
        <div className="flex flex-row text-yellow-400 cursor-pointer">
            <FaInfoCircle />
            <span className="ml-2 text-xs">Click here to add details</span>
        </div>
    </div>
);

const AttendeeDetails = () => {
    return (
        <div className="m-4 w-3/4 border-[1px] ">
            <div className=" sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {tickets.map((ticket) => (
                    <Ticket ticket={ticket} />
                ))}
            </div>
        </div>
    );
};

export default AttendeeDetails;
