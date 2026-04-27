import Image from "next/image";
import React from "react";
import ApplicationForm from "../ui_components/applicationForm/applicationform";

function ApplicationFormPage() {
  return (
    <div className=" flex justify-center items-center sm:flex-col md:flex-row sm:py-4 md:py8 sm:px-4 sm:gap-8 md:gap-12">
      {/*////////// Main contents */}
      <div className=" w-[600px] px-4 py-8 bg-gray-100 gap-12 rounded-lg">
        {/* Header box  */}
        <div className=" w-full mx-h-[300px] flex flex-col justify-center items-center bg-blue-800 mb-8 mx-auto">
          <h1 className="sm:text-md md:text-3xl text-white font-bold capitalize">
            Sewer Connection
          </h1>
          <h1 className="text-3xl text-white font-semibold capitalize">
            Application form
          </h1>
        </div>
        {/* coat of arms logo box */}
        <div className="w-full h-[400px] flex flex-col  items-center justify-center gap-4 bg-gray-200 mb-8 mx-auto">
          {/* img div */}
          <div className="w-[150px] h-[150px]">
            <Image
              src="/assets/logo/coatOfArms.png"
              width={60}
              height={60}
              alt="Coat of Arms"
              className="w-full h-full object-contain"
            />
          </div>

          <p className="uppercase text-light ">Republic of Ghana</p>
          <h1 className="uppercase ">Accra Metro Sewerage Unit</h1>
        </div>
        {/* form box */}
        <div className="w-full  flex flex-col  items-center justify-center gap-4 bg-gray-200 mb-8 mx-auto">
          This Form is for domestic, commercial and industrial users, commecial
          and Institution connections only.
          <ApplicationForm />
        </div>
      </div>
      {/*//// sidebar address info */}
      <div className="w-1/4 bg-blue-900">address info here</div>
    </div>
  );
}

export default ApplicationFormPage;
