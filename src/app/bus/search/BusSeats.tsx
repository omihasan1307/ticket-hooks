import Image from "next/image";

const BusSeats = ({ busData }: { busData: any }) => {
  const busDetails = busData.find((bus: any) => bus.id === 1);

  const {
    service,
    route,
    details,
    departure,
    duration,
    arrival,
    price,
    seatsAvailable,
    image,
  } = busDetails || {};

  return (
    <div>
      <div className="flex items-center gap-5">
        <Image src={image} alt={service} height={80} width={120} />
        <div>
          <h1>{service}</h1>
          <p className="text-sm text-slate-500">Coach No. #647-COX</p>
        </div>
      </div>
      <div className="flex items-center gap-5 mt-5">
        <div>
          <p className="text-sm text-slate-500">Departure</p>
          <h1 className="text-slate-700">Narayanganj</h1>
          <h1 className="font-semibold">10:45 PM</h1>
        </div>
        <div className="border border-dotted w-40"></div>
        <div>
          <p className="text-sm text-slate-500">Arrival</p>
          <h1 className="text-slate-700">Coxs-Bazar</h1>
          <h1 className="font-semibold">06:45 AM</h1>
        </div>
      </div>
      <p className="text-sm text-slate-500 font-semibold">
        Trip time may delay due to traffic
      </p>
      <div className="bg-yellow-50 my-5 p-2 text-center">
        <p>Maximum 4 seats can be selected.</p>
      </div>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <h1 className="border p-2 rounded"></h1>
          <p>Available</p>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="border bg-slate-400 p-2 rounded"></h1>
          <p>Sold</p>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="border bg-green-400 p-2 rounded"></h1>
          <p>Selected</p>
        </div>
      </div>

      <div className="border">
        <h1>sss</h1>
      </div>
    </div>
  );
};

export default BusSeats;
