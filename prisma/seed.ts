import { PrismaClient, UserSex } from "@prisma/client";

// Define it manually if the import doesn't work due to the way enums are generated
type UserSex = "MALE" | "FEMALE";

const prisma = new PrismaClient();

async function main() {
  console.log("Cleaning database...");
  // Clear existing data to prevent unique constraint errors during re-seeding
  await prisma.customer.deleteMany();
  await prisma.user.deleteMany();
  await prisma.request.deleteMany();
  await prisma.admin.deleteMany();
  await prisma.projectsReg.deleteMany();
  await prisma.projectsPortfolio.deleteMany();
  await prisma.contacts.deleteMany();

  console.log("Seeding started...");

  // 1. Admin Seeding
  await prisma.admin.createMany({
    data: [
      { id: "admin-1", username: "desmond" },
      { id: "admin-2", username: "lary" },
    ],
  });

  // 2. Request Seeding (Create these first as they are parents to User/Customer)
  const req1 = await prisma.request.create({
    data: {
      id: "req-north-01",
      fullName: "Joshua Tetteh",
      reqPhone: "+233244111222",
      reqTypeOfFacilities: "Residential Apartment",
      typeOfService: "New Main-Line Connection",
      reqDescription:
        "Connecting a 10-unit townhouse to the Roman Ridge central line.",
      reqFullAddress: "Roman Ridge, Accra, GA-012-3456",
      reqStatus: "PENDING",
    },
  });

  const req2 = await prisma.request.create({
    data: {
      id: "req-south-02",
      fullName: "Linda Mensah",
      reqPhone: "+233200333444",
      reqTypeOfFacilities: "Commercial Factory",
      typeOfService: "Maintenance",
      reqDescription: "Routine maintenance and inspection of grease traps.",
      reqFullAddress: "North Industrial Area, Accra, GA-099-1122",
      reqStatus: "APPROVED",
    },
  });

  // 3. User Seeding (Linked to Requests)
  await prisma.user.createMany({
    data: [
      {
        id: "user-jtetteh",
        username: "jtetteh",
        firstName: "Joshua",
        lastName: "Tetteh",
        email: "joshua@example.com",
        phone: "+233244111222",
        address: "Roman Ridge",
        sex: UserSex.MALE,
        requestId: req1.id,
      },
      {
        id: "user-lmensah",
        username: "lmensah",
        firstName: "Linda",
        lastName: "Mensah",
        email: "linda@example.com",
        phone: "+233200333444",
        address: "Dzorwulu",
        sex: UserSex.FEMALE,
        requestId: req2.id,
      },
    ],
  });

  // 4. Customer Seeding (Linked to Requests)
  await prisma.customer.createMany({
    data: [
      {
        id: "cust-01",
        name: "El Premier Construction Ltd",
        email: "contact@elpremier.com",
        phone: "0302111222",
        address: "Airport Residential",
        requestId: req1.id,
      },
      {
        id: "cust-02",
        name: "Vaal Real Estate",
        email: "info@vaal.com.gh",
        phone: "0302555666",
        address: "North Ridge",
        requestId: req2.id,
      },
    ],
  });

  // 5. Projects Registry Seeding
  await prisma.projectsReg.createMany({
    data: [
      {
        id: "proj-reg-1",
        sn: "AMSU-PR-2026-001",
        description: "Rehabilitation of the Achimota Transfer Station pipeline",
        projectlocation: "Achimota",
        clientName: "Ministry of Works and Housing",
      },
      {
        id: "proj-reg-2",
        sn: "AMSU-PR-2026-002",
        description: "Expansion of the North Ridge Tertiary Sewer Network",
        projectlocation: "North Ridge",
        clientName: "Private Developer Consortium",
      },
    ],
  });

  // 6. Projects Portfolio Seeding
  await prisma.projectsPortfolio.createMany({
    data: [
      {
        id: "port-1",
        title: "Mudor Treatment Plant Upgrade",
        description: "Installed high-efficiency biological filters.",
        img: "/assets/projects/treatment.webp",
      },
      {
        id: "port-2",
        title: "Legon Pumping Hub",
        description: "Full mechanical overhaul of primary submersible pumps.",
        img: "/assets/projects/pumping.webp",
      },
    ],
  });

  // 7. Contacts Seeding
  await prisma.contacts.createMany({
    data: [
      {
        id: "contact-1",
        fullName: "Samuel Dogbe",
        phone: "0277888999",
        email: "sdogbe@gmail.com",
        Subject: "Billing Inquiry",
        message:
          "I would like to clarify the cost for industrial connection fees.",
      },
      {
        id: "contact-2",
        fullName: "Abigail Boateng",
        phone: "0555111222",
        email: "aboateng@outlook.com",
        Subject: "Emergency Leak",
        message: "Visible leak reported near the Labone junction station.",
      },
    ],
  });

  console.log("Seeding finished successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
