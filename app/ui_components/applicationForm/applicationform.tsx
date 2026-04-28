"use client";

import FormGroup from "../formGroup/FormGroup";
import RadioGroup from "../radioGroup/RadioGroup";

const ApplicationForm = () => {
  return (
    <div className="w-full text-sm text-black">
      <form className="flex flex-col gap-6">
        {/* SECTION 1 */}
        <section className="border border-black p-4">
          <h2 className="font-bold uppercase mb-3">1. Applicant Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormGroup label="Applicant Name" name="applicantName" />
            <FormGroup label="E-mail Address" name="email" type="email" />
            <FormGroup label="Postal Address" name="postalAddress" />
            <FormGroup label="Phone Number" name="phone" />
          </div>

          {/* 1.2 Status */}
          <div className="mt-4">
            <p className="font-semibold mb-2">1.2 Status of Applicant</p>

            <div className="flex flex-wrap gap-6">
              <RadioGroup label="Owner" name="status" value="owner" />
              <RadioGroup label="Contractor" name="status" value="contractor" />

              <div className="flex items-center gap-2">
                <input type="radio" name="status" value="other" id="other" />
                <label htmlFor="other">Other:</label>
                <input
                  type="text"
                  className="border-b border-black outline-none px-1 w-32"
                />
              </div>
            </div>
          </div>

          {/* 1.3 Owner */}
          <div className="mt-4 border border-black p-3">
            <p className="font-semibold mb-2">
              1.3 If not owner, provide owner details
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormGroup label="Name of Owner" name="ownerName" />
              <FormGroup label="Owner Phone" name="ownerPhone" />
              <FormGroup label="Owner Address" name="ownerAddress" />
              <FormGroup label="Owner E-mail" name="ownerEmail" />
            </div>
          </div>
        </section>

        {/* SECTION 2 : Property and details */}
        <section className="border border-black p-4">
          <h2 className="font-bold uppercase mb-3">
            2. Property / Site Details
          </h2>

          <div className="flex flex-col gap-4">
            <FormGroup label="2.1 House No/GPS Address" name="houseNumber" />
            <FormGroup
              label="2.2 Location of property to be served (e.g. near XYZ landmark)"
              name="propertyLocation"
            />
          </div>
          <div className="flex flex-wrap gap-6">
            <p className="font-semibold mb-2 mt-4">2.3 Type of Property</p>
            <RadioGroup label="New" name="status" value="owner" />
            <RadioGroup label="Existing" name="status" value="contractor" />
          </div>
          <div className="mt-2">
            <FormGroup
              label="2.4 If existing, please specify existing use of property?"
              name="exitingConnectionDetails"
            />
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="border border-black p-4">
          <h2 className="font-bold uppercase mb-3">3. Connection Details</h2>
          <p className="font-semibold mb-2">
            3.1 Are you connected to Ghana Water Company Limited (GWCL)
          </p>
          <div className="flex flex-wrap gap-6 mb-2">
            <RadioGroup label="Owner" name="status" value="owner" />
            <RadioGroup label="Contractor" name="status" value="contractor" />
          </div>
          <div className="flex flex-wrap gap-6">
            <FormGroup
              label="3.2 If yes, please provide your GWCL account number"
              name="gwclAccountNumber"
            />
          </div>
        </section>

        {/* SECTION 4 */}
        <section className="border border-black p-4">
          <h2 className="font-bold uppercase mb-3">4. Declaration</h2>

          <p className="mb-6">
            An application is hereby made for sewer connection at the above
            address indicated. I/We hereby certify that the information given
            hereon is correct and that if the service is provided I/We agree to
            the following: 1. No illegal connection to the sewer line/chamber
            will be permitted without the Unit’s notice. 2. No connection will
            be made until all documents have been inspected and approved by the
            unit. 3. To pay all sewer charges if applicable to applicant 4. To
            abide by rules (in force or may be enacted in future) governing
            usage of the sewer line.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <p>Applicant Signature:</p>
              <div className="border-b border-black mt-6" />
            </div>

            <div className="flex flex-col gap-1.5 w-full max-w-[200px]">
              <label
                htmlFor="applicationDate"
                className="text-sm font-semibold text-slate-700"
              >
                Date:
              </label>
              <input
                type="date"
                id="applicationDate"
                name="applicationDate"
                className="
                    border-b-2 border-slate-300 
                    bg-transparent 
                    py-1 px-2 
                    text-sm 
                    outline-none 
                    transition-all 
                    focus:border-blue-600 
                    focus:bg-blue-50/50
                    cursor-pointer
                  "
                defaultValue={new Date().toISOString().split("T")[0]} // Sets today as default
              />
            </div>
          </div>
        </section>

        {/* SUBMIT (optional for web only) */}
        <button
          type="submit"
          className="mt-4 border border-black py-2 font-semibold hover:bg-gray-100"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
