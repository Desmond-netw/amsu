import Image from "next/image";
import React from "react";
import ApplicationForm from "../ui_components/applicationForm/applicationform";

function ApplicationFormPage() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center py-4 md:py-8 px-4 gap-8 md:gap-12">
      {/* Main content */}
      <div className="w-full max-w-[600px] px-4 py-8 bg-gray-100 rounded-lg flex flex-col gap-8">
        {/* Header */}
        <div className="w-full max-h-[300px] flex flex-col justify-center items-center bg-blue-800 mb-4">
          <h1 className="text-lg md:text-3xl text-white font-bold capitalize">
            Sewer Connection
          </h1>
          <h2 className="text-xl md:text-3xl text-white font-semibold capitalize">
            Application Form
          </h2>
        </div>

        {/* Logo section */}
        <div className="w-full h-[300px] flex flex-col items-center justify-center gap-4 bg-gray-200">
          <div className="w-[120px] h-[120px]">
            <Image
              src="/assets/logo/coatOfArms.png"
              width={120}
              height={120}
              alt="Coat of Arms"
              className="w-full h-full object-contain"
            />
          </div>

          <p className="uppercase text-gray-600 text-sm">Republic of Ghana</p>
          <h1 className="uppercase font-semibold text-center">
            Accra Metro Sewerage Unit
          </h1>
        </div>

        {/* Form section */}
        <div className="w-full flex flex-col items-center gap-4 bg-gray-200 p-4">
          <p className="text-sm text-center">
            This form is for domestic, commercial, industrial, and institutional
            connections only.
          </p>

          <ApplicationForm />
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-blue-900 text-white p-4 rounded-lg">
        address info here
      </div>
    </div>
  );
}

export default ApplicationFormPage;
