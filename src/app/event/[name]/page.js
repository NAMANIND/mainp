import Head from "@/components/head/Head";
import MultiPageForm from "@/components/mutliregister/MultiPageForm";
import NominateForm from "@/components/nominateform/NominateForm";
import React from "react";
import { notFound } from "next/navigation";
import NewMultiPageForm from "@/components/prform/NewMultiPageForm";

function page({ params }) {
  const { name } = params;

  const data = ["megha", "megha2"];

  if (data.includes(name)) {
    return (
      <div>
        <Head head="Event" />
        <NewMultiPageForm />
      </div>
    );
  } else {
    return notFound();
  }
}

export default page;