import { db } from "@/lib/db";
import React from "react";
import { Booking } from "@/components/ui/booking";
import GTM from "@/utils/GTM";

const AppointmentPage = async ({ params }: { params: { city: string } }) => {
  let city = null;
  try {
    city = await db.cities.findUnique({
      where: {
        name: params.city,
      },
      include: {
        closeddays: true,
        days: true,
      },
    });
  } catch (error) {
    console.error("[BOOKING_CITY_GET]", error);
  }

  if (!city) {
    return <div>City not Availiable we will be coming soon to ur city</div>;
  }

  return (
    <>
      <head>
        <GTM gtmId="GTM-MDF4W4JT" />
        <title>Dr. Dubay</title>
        <meta
          name="description"
          content="Dr. Dheeraj Dubay, Joint and Hip Replacement Surgeon in Rajasthan"
        />
        <link rel="icon" href="/assets/images/logonew.png" />
      </head>
      <Booking
        closedDays={city.closeddays}
        days={city.days}
        city={params.city}
      />
    </>
  );
};

export default AppointmentPage;
