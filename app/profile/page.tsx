import { redirect } from "next/navigation";

// Patient profile requires authentication which has been removed.
// Redirect to booking page instead.
const Page = async () => {
  redirect("/booking/jaipur");
};

export default Page;
