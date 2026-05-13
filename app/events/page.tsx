import { generatePageMetadata } from "@/lib/seo.config";

export const revalidate = 3600;
import EventsClient from "./EventsClient";

export const metadata = generatePageMetadata({
  title: "Events & Activities | Dr. Dheeraj Dubay",
  description: "Latest events, health camps and activities by Dr. Dheeraj Dubay including Golden Warriors Walkathon and orthopedic awareness programs.",
  slug: "events",
});

export default function EventsPage() {
  return <EventsClient />;
}
