import { ScrollArea } from "@radix-ui/themes";

const ApplicationForm = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <h1>Application Form</h1>
      <ScrollArea>
        {/* Form fields would go here */}
        <form action="" className="flex felx-col">
          {/* Section 1: Personal Information (Application Details) */}
          <div>personal info</div>

          {/* Section 2: Property /site Details */}
          <div>property details</div>

          {/* Section 3: Connection Details */}
          <div>connection details</div>

          {/* Section 4: Delaration */}
          <div>declaration</div>
          {/* section 5: Review and Submit signing */}
          <div>review and submit</div>
        </form>
      </ScrollArea>
    </div>
  );
};

export default ApplicationForm;
