import { About, Blog, Gallery, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Thaqif",
  lastName: "Saharuddin",
  name: `Thaqif Saharuddin`,
  role: "Software Engineer",
  avatar: "/images/thaqif.png",
  email: "thaqif237@gmail.com",
  location: "Asia/Kuala_Lumpur", // IANA time zone — used for the live clock
  locationLabel: "Selangor, Malaysia", // human-readable location shown in the UI
  languages: ["Malay (native)", "English"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false, // disabled: no Aveiro audience set up
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/thaqifsaha",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/thaqif-saharuddin",
    essential: true,
  },
  {
    name: "Credly",
    icon: "credly",
    link: "https://www.credly.com/users/thaqif-saharuddin",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const about: About = {
  path: "/",
  label: "About",
  title: `${person.name}'s Portfolio`,
  description: `Meet ${person.name}, ${person.role} from ${person.locationLabel ?? person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false, // TODO: add a real scheduling link (e.g. Cal.com) if you want this section
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} is a software engineer who likes building where software meets
        hardware — IoT, embedded systems and networking — always keen to learn new technologies,
        and happiest with hands-on, physical work.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "TUSAS Malaysia Sdn Bhd",
        logo: "/images/experience/tusas/tusas-logo.jpg",
        timeframe: "Jul 2026 – Present",
        role: "Software Design Trainee & Full-Stack Developer (Intern)",
        achievements: [
          <>
            Currently contributing as a Software Design Trainee and Full-Stack Developer intern,
            working across the design and development lifecycle.
          </>,
        ],
        images: [],
      },
      {
        company: "DMG MORI Malaysia Sdn Bhd",
        logo: "/images/experience/DMG/dmg-logo.png",
        timeframe: "Aug 2024 – Sep 2024",
        role: "Assistant Engineer (Part-time)",
        achievements: [
          <>
            Assisted service engineers in the maintenance, repair, and installation of CNC
            machines, including DMC 95 monoBLOCK, DMU 125 and DMU 210 models, during assignments
            at Ultimate Manufacturing Solutions Malaysia (UMS) in Penang and Jabil Kulim in Kedah.
          </>,
          <>
            Participated in on-site servicing activities, assisting with machine setup,
            inspection, and preventive maintenance work.
          </>,
          <>
            Helped with machine relocation, assembly, and installation, ensuring machines were
            properly set up and ready for operation.
          </>,
          <>
            Supported engineers in installation and commissioning activities, working together
            with the project engineer during system setup.
          </>,
        ],
        images: [],
      },
      {
        company: "Sigma Rectrix Systems (M) Sdn Bhd",
        logo: "/images/experience/sigma/sigma-logo.png",
        timeframe: "Mar 2022 – Jul 2022",
        role: "IT Technician (Intern)",
        achievements: [
          <>
            Performed preventive maintenance on PCs, laptops and peripherals across multiple
            sites, including hospitals and government offices, and installed, configured and
            deployed PCs, laptops, printers and related hardware for new and existing
            departments.
          </>,
          <>
            Installed and configured IT equipment across MKN and RELA Malaysia offices in Perak,
            Penang, Kedah and Perlis, as part of large-scale outstation IT deployment projects
            across multiple states.
          </>,
          <>
            Served as team leader for a preventive maintenance project at Hospital Kuala Lumpur
            (HKL), completing an inspection of 100+ PCs in 4 days against an initial 2-week
            estimate, with a team of five.
          </>,
          <>
            Carried out preventive maintenance across multiple offices of Jabatan Perkhidmatan
            Veterinar Negeri Selangor (JPVM), including several in rural and farmland areas.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Universiti Tun Hussein Onn Malaysia",
        logo: "/images/education/uthm-logo.png",
        description: <>Bachelor of Computer Science (Software Engineering) with Honours — CGPA 3.64.</>,
      },
      {
        name: "Politeknik Muadzam Shah",
        logo: "/images/education/pms-logo.png",
        description: <>Diploma in Information Technology (Digital Technology) — CGPA 3.69.</>,
      },
    ],
  },
  specialties: {
    display: true,
    title: "Specialties",
    items: [
      { name: "Python", image: "/images/skills/language/python/python.svg" },
      { name: "Java", image: "/images/skills/language/java/java.svg" },
      { name: "PHP", image: "/images/skills/language/php/php.svg" },
      { name: "C++", image: "/images/skills/language/cpp/cpp.svg" },
      { name: "C", image: "/images/skills/language/c/c.svg" },
      { name: "JavaScript", image: "/images/skills/language/javascript/javascript.svg" },
      { name: "HTML", image: "/images/skills/language/html/html.svg" },
      { name: "CSS", image: "/images/skills/language/css/css.svg" },
      { name: "Laravel", image: "/images/skills/laravel.png", scale: 1.3 },
      { name: "Django", image: "/images/skills/django.png" },
      { name: "Node-RED", image: "/images/skills/node-red.png" },
      { name: "Arduino IDE", image: "/images/skills/arduino-ide.png" },
      { name: "Linux (Ubuntu)", image: "/images/skills/linux.png" },
      { name: "Docker", image: "/images/skills/docker.png" },
      { name: "Cloudflare", image: "/images/skills/cloudflare.png" },
      { name: "Wireshark", image: "/images/skills/wireshark.jpg" },
      { name: "Packet Tracer", image: "/images/skills/packet-tracer.png" },
      { name: "MySQL", image: "/images/skills/mysql.png", scale: 1.3 },
      { name: "PostgreSQL", image: "/images/skills/postgresql.png", scale: 1.3 },
      { name: "Figma", image: "/images/skills/figma.png", scale: 1.3 },
      { name: "Selenium IDE", image: "/images/skills/selenium.png" },
    ],
  },
  certifications: {
    display: true,
    title: "Certifications",
    description: <>Verified credentials on Credly.</>,
    link: "https://www.credly.com/users/thaqif-saharuddin",
    linkLabel: "View on Credly",
    items: [
      "CCNA: Introduction to Networks",
      "Machine Learning using SAS Viya",
      "Data Literacy in Practice",
      "Data Literacy Essentials",
    ],
  },
  outside: {
    display: true,
    title: "Outside work",
    description: (
      <>
        When I'm not building software, I'm probably under a car fixing them, learning how
        they work, or just photographing them. Sometimes I rather do some hands on work, so i can stress both ways; hardware and software.
      </>
    ),
    images: [
      { src: "/images/hobby/IMG_0320.jpeg", alt: "Car photo" },
      { src: "/images/hobby/IMG_0349.jpeg", alt: "Car photo" },
      { src: "/images/hobby/IMG_0371.jpeg", alt: "Car photo" },
      { src: "/images/hobby/IMG_0435.jpeg", alt: "Car photo" },
      { src: "/images/hobby/IMG_0452.jpeg", alt: "Car photo" },
      { src: "/images/hobby/IMG_0470.jpeg", alt: "Car photo" },
      { src: "/images/hobby/IMG_4453.JPG", alt: "Car photo" },
      { src: "/images/hobby/IMG_5337.JPG", alt: "Car photo" },
      { src: "/images/hobby/IMG_5561.JPG", alt: "Car photo" },
      { src: "/images/hobby/IMG_6986.JPG", alt: "Car photo" },
      { src: "/images/hobby/IMG_8552.JPG", alt: "Car photo" },
      { src: "/images/hobby/IMG_5550.JPG", alt: "Car photo" },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Software, IoT and infrastructure projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // TODO: add car photos here when you're ready to enable this page, e.g.:
  // { src: "/images/gallery/your-photo.jpg", alt: "description", orientation: "horizontal" }
  images: [],
};

export { person, social, newsletter, about, blog, work, gallery };
