import ContactMap from "../ui_components/contactMap/ContactMap";
import Pretitle from "../ui_components/pretitle/Pretitile";

const contactPage = () => {
  return (
    <section>
      {/* Banner - Using inline style to avoid Tailwind JIT issues with dynamic URLs */}
      <div
        className="relative h-[300px] bg-cover bg-center bg-no-repeat mb-12"
        style={{ backgroundImage: "url('/assets/banner/banner2.webp')" }}
      >
        <div className="absolute inset-0 bg-slate-900 bg-opacity-50"></div>
      </div>

      {/* Content Section */}
      <Pretitle text="Get in Touch" center={true} />

      {/* Fixed class name from 'text-semi-bold' to 'font-semibold' */}
      <h2 className="mt-4 text-brand_1-800 font-semibold text-xl lg:text-3xl text-center">
        Contact Us
      </h2>

      <p className="max-w-2xl mx-auto text-center text-gray-600 mt-2 mb-8 px-4">
        We would love to hear from you! Whether you have questions about our
        services, want to discuss a project, or just need an invoice or
        estimate.
      </p>

      <div className="w-full mx-auto py-12 px-6 xl:px-24 bg-gradient-to-b from-blue-200 to-blue-100 rounded-xl shadow-lg">
        <ContactMap />
      </div>
    </section>
  );
};

export default contactPage;
