import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BusDetails = () => {
  return (
    <div>
      <h1 className="font-semibold">Trip Details</h1>

      <Tabs defaultValue="boarding" className=" my-5">
        <TabsList className="w-full">
          <TabsTrigger value="boarding" className="w-full">
            Boarding
          </TabsTrigger>
          <TabsTrigger value="dropping" className="w-full">
            Dropping
          </TabsTrigger>
        </TabsList>
        <TabsContent value="boarding" className="my-5">
          <div className="grid grid-cols-3 gap-5 place-items-center">
            <div className="col-span-1 space-y-3 ">
              <div>
                <h6 className="text-sm text-yellow-500">Starts at</h6>
                <h2 className="text-green-600 font-semibold">10:45 PM</h2>
              </div>
              <div>
                <h6 className="text-sm text-yellow-500">Starts at</h6>
                <h2 className="text-green-600 font-semibold">11:15 PM</h2>
              </div>
            </div>
            <div className="col-span-2  ">
              <div className="space-y-4 mt-4 border-l-2  pl-4 relative">
                <span className="absolute -left-1.5 -top-1 w-2 h-2 bg-baseColor rounded-full"></span>
                <span className="absolute -left-1.5 top-10 w-2 h-2 bg-baseColor rounded-full"></span>
                {/* <span className="absolute left-1/2 -translate-x-1/2 -top-3 text-baseColor bg-white p-1 rounded-full"></span> */}
                <h1>Chashara (Army Market)</h1>
                <h1>Chittagong Road.</h1>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="dropping" className="my-5">
          <div className="grid grid-cols-3 gap-5 place-items-center">
            <div className="col-span-1">
              <h6 className="text-sm text-yellow-500">Starts at</h6>
              <h2 className="text-green-600 font-semibold">07:30 AM</h2>
            </div>
            <div className="col-span-2">
              <h1>Kolatoli Bus Point</h1>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BusDetails;
