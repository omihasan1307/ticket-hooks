import { Metadata } from "next";

import Breadcrumbs from "@/shared/components/Breadcrumbs";
import Image from "next/image";
import { img } from "@/shared/constant/img.export.constant";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Ticket Hooks",
  description: "Contact Us | Ticket Hooks",
};

const ContactPage = () => {
  return (
    <div>
      <Breadcrumbs basePageName="Home" pageName="Contact Us" />
      <div className="max-w-screen-xl mx-auto py-16 px-2">
        <div className="grid lg:grid-cols-2 gap-20">
          <Image src={img.Contact} alt={"Contact"} className="rounded-lg" />

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
