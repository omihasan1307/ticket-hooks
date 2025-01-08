"use client";
import Image from "next/image";
import { toast } from "sonner";

const BusSeats = ({
  busData,
  setSelectedSeats,
  selectedSeats,
  setShowBoardingPoint,
}: {
  busData: any;
  setSelectedSeats: any;
  selectedSeats: any;
  setShowBoardingPoint: any;
}) => {
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

  const labels: any = [];
  for (let charCode = 65; charCode <= 73; charCode++) {
    // A (65) to L (76)
    for (let num = 1; num <= 4; num++) {
      // 1 to 4
      labels.push(`${String.fromCharCode(charCode)}${num}`);
    }
  }

  const rows = Array.from({ length: labels.length / 4 }, (_, i) =>
    labels.slice(i * 4, (i + 1) * 4)
  );

  const handleSeatClick = (seat: string) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else if (selectedSeats.length < 4) {
      setSelectedSeats([...selectedSeats, seat]);
    } else {
      toast("Max 4 seats can be selected. Not more then 4.");
    }
  };
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
      <div className="px-6 py-8 my-2 rounded shadow space-y-3">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {row.slice(0, 2).map((label: string) => (
                <h1
                  key={label}
                  onClick={() => handleSeatClick(label)}
                  className={`border px-3 py-3 rounded-md duration-300 cursor-pointer ${
                    selectedSeats.includes(label)
                      ? "bg-green-600 text-white"
                      : "hover:bg-green-600 hover:text-white"
                  }`}
                >
                  {label}
                </h1>
              ))}
            </div>
            <div className="flex items-center gap-2">
              {row.slice(2, 4).map((label: string) => (
                <h1
                  key={label}
                  onClick={() => handleSeatClick(label)}
                  className={`border px-3 py-3 rounded-md duration-300 cursor-pointer ${
                    selectedSeats.includes(label)
                      ? "bg-green-600 text-white"
                      : "hover:bg-green-600 hover:text-white"
                  }`}
                >
                  {label}
                </h1>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="flex items-center justify-between my-2">
          <h1 className="font-sans">{selectedSeats.length} Tickets selected</h1>
          <h1 className="text-xl text-green-600 font-semibold">
            ৳ {selectedSeats.length * 1000}{" "}
          </h1>
        </div>
        <button
          onClick={() => setShowBoardingPoint(true)}
          className={`w-full py-2 rounded-md ${
            selectedSeats.length > 0
              ? "bg-green-600 text-white cursor-pointer"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          }`}
          disabled={selectedSeats.length === 0}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default BusSeats;
