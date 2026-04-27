"use client";

import { ScrollArea, Heading, Text, Separator } from "@radix-ui/themes";
import FormGroup from "../formGroup/FormGroup";
import RadioGroup from "../radioGroup/RadioGroup";
const ApplicationForm = () => {
  return (
    <div className="w-full bg-white rounded-lg">
      <div className="p-4 border-b">
        <Heading size="5" color="blue">
          Sewerage Connection Application
        </Heading>
        <Text size="2" color="gray">
          Please fill all sections accurately to avoid delays.
        </Text>
      </div>

      <ScrollArea
        type="auto"
        scrollbars="vertical"
        style={{ height: "70vh" }}
        className="p-6"
      >
        <form className="flex flex-col gap-8 pb-10">
          {/* Section 1: Applicant Details */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="bg-blue-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">
                1.1
              </span>
              <Heading size="3">Applicant Details</Heading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormGroup
                label="Applicant Name"
                name="applicantName"
                placeholder="Full legal name"
              />
              <FormGroup
                label="E-mail Address"
                name="email"
                type="email"
                placeholder="email@example.com"
              />
              <FormGroup
                label="Postal Address"
                name="postalAddress"
                placeholder="P.O. Box..."
              />
              <FormGroup
                label="Phone Number"
                name="phone"
                placeholder="+233..."
              />
            </div>

            {/* 1.2 Status of Applicant */}
            <div className="mt-6 space-y-3">
              <Text as="label" size="2" weight="bold" className="block">
                1.2 Status of Applicant
              </Text>
              <div className="flex flex-wrap gap-4 items-center">
                <RadioGroup label="Owner" name="status" value="owner" />
                <RadioGroup
                  label="Contractor"
                  name="status"
                  value="contractor"
                />
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="status"
                    value="other"
                    id="status-other"
                    className="w-4 h-4"
                  />
                  <label htmlFor="status-other" className="text-sm">
                    Other:
                  </label>
                  <input
                    type="text"
                    name="statusOther"
                    className="border-b border-gray-300 outline-none text-sm px-2 w-32 focus:border-blue-500"
                    placeholder="specify..."
                  />
                </div>
              </div>
            </div>

            {/* 1.3 Owner Details (Conditional UI) */}
            <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-4">
              <Text size="2" weight="bold" color="blue">
                1.3 If not Owner, provide Owner details
              </Text>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormGroup label="Name of Owner" name="ownerName" />
                <FormGroup label="Owner Phone" name="ownerPhone" />
                <FormGroup label="Owner Postal Address" name="ownerAddress" />
                <FormGroup label="Owner E-mail" name="ownerEmail" />
              </div>
            </div>
          </section>

          <Separator size="4" />

          {/* Section 2: Property / Site Details */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="bg-blue-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">
                2
              </span>
              <Heading size="3">Property / Site Details</Heading>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <FormGroup
                label="Property Address / Location"
                name="propertyAddress"
                placeholder="Physical location or Digital Address"
              />
              <div className="grid grid-cols-2 gap-4">
                <FormGroup label="Plot Number" name="plotNumber" />
                <FormGroup label="Block/Sector" name="blockSector" />
              </div>
            </div>
          </section>

          <Separator size="4" />

          {/* Section 3: Connection Details */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="bg-blue-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">
                3
              </span>
              <Heading size="3">Connection Details</Heading>
            </div>
            <div className="p-8 border-2 border-dashed border-gray-200 rounded-lg text-center text-gray-400">
              [Dropdowns for pipe size, fixtures, and connection types here]
            </div>
          </section>

          {/* Section 4 & 5: Submission */}
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <Text size="2" className="block mb-4">
              By submitting, I declare that all information provided is true and
              I agree to the AMSU terms of service.
            </Text>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors shadow-lg"
            >
              Submit Formal Application
            </button>
          </div>
        </form>
      </ScrollArea>
    </div>
  );
};

export default ApplicationForm;
