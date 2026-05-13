import { v4 as uuidv4 } from "uuid";
import Appointment from "@/components/ui/appointment-form";
import GTM from "@/utils/GTM";

export const dynamic = "force-dynamic";

const BillboardPage = async () => {
  const userId = uuidv4();
  return (
    <>
      <head>
        <GTM gtmId="GTM-MDF4W4JT" />
        <title>Book Appointment | Dr. Dubay</title>
        <meta
          name="description"
          content="Book an appointment with Dr. Dheeraj Dubay, Joint Replacement Surgeon in Jaipur."
        />
        <link rel="icon" href="/assets/images/logonew.png" />
      </head>
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <Appointment name="" email="" userId={userId} />
        </div>
      </div>
    </>
  );
};

export default BillboardPage;
