export type Member = {
  name: string;
  role: string;
  lead?: boolean;
  year?: string;
  bio?: string;
  img?: string;
  skills?: string[];
  links?: { label: string; href: string }[];
};


export type Project = {
  title: string;
  year: string;
  type: string;
  blurb: string;
};

export type Team = {
  slug: string;
  num: string;
  name: string;
  tagline: string;
  mission: string;
  brief: string;
  manifesto: string;
  accent: "cyan" | "violet" | "acid" | "cream";
  focusAreas: string[];
  stack: string[];
  rituals: { title: string; when: string; about: string }[];
  projects: Project[];
  members: Member[];
};

import wajidImg from "@/assets/wajid.jpg";
import AmaanImg from "@/assets/Amaan_Malik.jpg";
import FarhanImg from "@/assets/Farhan_Arshad.jpg";
import SafaImg from "@/assets/Safa_Khan.jpg";
import MariyaImg from "@/assets/Mariya.jpg";
import LaibaImg from "@/assets/Laiba.jpeg"
import AshrafImg from "@/assets/Ashraf.jpeg"
import ArunaImg from "@/assets/Aruna.jpg"
import ZishanImg from "@/assets/Zishan.png"
import ArsalanImg from "@/assets/Arsalan.png"
import ZainabImg from "@/assets/Zainab.jpg"
import AdnanImg from "@/assets/Adnan.jpg"
import WardaImg from "@/assets/Warda.jpg"
import UmarImg from "@/assets/Mohammad umar.jpg"
import AfaafImg from "@/assets/Afaaf Nayyer.jpg"
import AlinaImg from "@/assets/Alina.jpg"
import YussraImg from "@/assets/Yussra Khan.jpg"
import MyelImg from "@/assets/Myel.jpg"
import MansiImg from "@/assets/Mansi.jpg"
import AbuzarImg from "@/assets/Abuzar.jpg"
import RameeshaImg from "@/assets/Rameesha.jpg"
import ImranImg from "@/assets/Imran.jpg"
import StalinImg from "@/assets/Stalin.jpg"
import AyazImg from "@/assets/Ayaz.jpeg"
import SamiImg from "@/assets/Sami.jpeg"
import HibaImg from "@/assets/Hiba.jpeg"
import AishaImg from "@/assets/Aisha.jpg"
import AdilImg from "@/assets/Adil.jpeg"
import KulsoomImg from "@/assets/Kulsoom.jpeg"
import TakrimImg from "@/assets/Takrim.jpg"
import NamraImg from "@/assets/Namra.jpg"
import KulsumImg from "@/assets/Kulsum.jpg"
import ManshaImg from "@/assets/Mansha.jpg"
import MeharImg from "@/assets/Mehar.jpg"
import AlizaImg from "@/assets/Aliza.jpg"
import AliImg from "@/assets/Ali_Raza.jpg"
import WafaImg from "@/assets/Wafa.jpg"
import SamairaImg from "@/assets/Samaira.jpg"
import TanzeelImg from "@/assets/Tanzeel.jpg"
import IbrahimImg from "@/assets/Ibrahim.jpg"
import ShababImg from "@/assets/Shabab.png"
import UmairImg from "@/assets/Umair.jpg"
import KhateebImg from "@/assets/Khateeb.jpg"

export const TEAMS: Team[] = [

  {
    slug: "core",
    num: "01",
    name: "Core",
    tagline: "The architects of the vision.",
    mission:
      "We define the collective's operational logic — orchestrating the high-level vision, membership architecture, and the strategic path of the society.",

    brief:
      "Core is the operational heart. We define the society's seasonal goals, foster collaboration across teams, and maintain the Nexus infrastructure.",
    manifesto:
      "Leadership is about empowerment. We don't just organize meetups; we build the frameworks that allow every member to create at their highest level.",

    accent: "cream",
    focusAreas: ["Strategic Directives", "Corporate Logic", "Operations", "Partnerships", "The Society Thesis"],
    stack: ["Notion", "Linear", "Figma", "Loom", "Email"],
    rituals: [
      { title: "Club Sync", when: "Monday 18:00", about: "General meetup for all active teams." },
      { title: "Open Study", when: "Friday 16:00", about: "Co-working hours for any club member." },
      { title: "Term Review", when: "End of term", about: "Reviewing shipped work and planning the next season." },
    ],
    projects: [
      { title: "Vol. 02 — Kinetic Systems", year: "2025", type: "Season Brief", blurb: "The visual and technical guide for our current projects." },
      { title: "Club Wiki", year: "2025", type: "Internal", blurb: "A central knowledge base for onboarding new members." },
      { title: "Networking Nights", year: "2024", type: "Event", blurb: "Connecting student builders with industry mentors." },
    ],
    members: [
      { name: "Mohammad Arsalan", role: "Chair", year: "4th Year", bio: "Directing the collective's vision and seasonal strategy.", skills: ["Strategy", "Leadership"], links: [{ label: "Profile", href: "#" }], img: ArsalanImg },
      { name: "Mohammad Adnan", role: "Co-Chair", year: "4th Year", bio: "Managing collaborative operations across all society divisions.", skills: ["Management", "Operations"], img: AdnanImg },
      { name: "Zainab Manzoor", role: "Vice Chair", year: "3rd Year", bio: "Ensuring excellence in our weekly syncs and member engagement.", skills: ["Ops", "Comms"], img: ZainabImg },
      { name: "Laiba Razi", role: "Secretary", year: "2nd Year", bio: "Handling documentation and internal communications.", skills: ["Writing", "Admin"], img: LaibaImg },
      { name: "Adil Ali", role: "Treasurer", year: "2nd Year", bio: "Managing the society's financial health and resources.", skills: ["Finance", "Logistics"], img: AdilImg },
    ],
  },
  {
    slug: "tech",
    num: "02",
    name: "Tech",
    tagline: "The vanguard of engineering.",
    mission:
      "We architect the collective's digital reality — engineering the infrastructure, systems, and sensory platforms that define the society's technical frontier.",

    brief:
      "Tech builds the future. We maintain the Nexus platform, our internal dev tooling, and experiment with the latest in web and graphics technology.",
    manifesto:
      "Performance is non-negotiable. We don't just ship code; we deliver uncompromising engineering excellence that pushes the boundaries of student technical capability.",

    accent: "cyan",
    focusAreas: ["Systems Engineering", "Nexus Core", "WebGL & Shaders", "Open Source Labs", "High-Performance Compute"],
    stack: ["TypeScript", "React", "Three.js", "GLSL", "Bun", "Vite", "Supabase"],
    rituals: [
      { title: "Dev Sync", when: "Tue & Thu 17:30", about: "Quick status updates and code reviews." },
      { title: "Code Lab", when: "Saturday 11:00", about: "Informal hacking sessions on club projects." },
      { title: "Tech Talk", when: "Monthly", about: "Members present a tool or technique they've mastered." },
    ],
    projects: [
      { title: "Nexus Hub v3", year: "2025", type: "Product", blurb: "The central portal for our technical society." },
      { title: "Project Orbit", year: "2025", type: "Internal Tool", blurb: "A custom tracker for collaborative club projects." },
      { title: "GLSL Playground", year: "2024", type: "Web", blurb: "A showcase for our members' shader experiments." },
    ],
    members: [
      {
        name: "Wajid Ali",
        role: "Tech Lead",
        lead: true,
        year: "Second Year",
        bio: "Managing our stack and mentoring the next gen of builders.",
        img: wajidImg,
        skills: ["TS", "Systems", "GLSL"],
        links: [{ label: "GitHub", href: "#" }]
      },

      //{ name: "Devansh Roy", role: "Co-Lead & Fullstack Engineer", lead: true, year: "Third Year", bio: "Passionate about building robust backend systems.", skills: ["Node", "SQL", "APIs"] },
      { name: "Amaan Malik", role: "Frontend Engineer", year: "4th Year", bio: "Bringing designs to life with fluid motion and CSS.", skills: ["React", "Motion", "CSS"], img: AmaanImg },
      { name: "Safa Khan", role: "Software Engineer", year: "2nd Year", bio: "Building the core logic of our internal tools.", skills: ["JS", "Web APIs"], img: SafaImg },
      { name: "Farhan Arshad", role: "DevOps & Cloud", year: "2nd Year", bio: "Ensuring our projects are always live and performant.", skills: ["Deployment", "CI/CD"], img: FarhanImg },
      { name: "Warda Amir", role: "DevOps & Cloud", year: "4th Year", bio: "Ensuring our projects are always live and performant.", skills: ["Deployment", "CI/CD"], img: WardaImg },
      { name: "Mariya", role: "DevOps & Cloud", year: "2nd Year", bio: "Ensuring our projects are always live and performant.", skills: ["Deployment", "CI/CD"], img: MariyaImg },
    ],
  },
  {
    slug: "data-science",
    num: "03",
    name: "Data Science",
    tagline: "The intelligence layer.",
    mission:
      "We synthesize raw probability into definitive intelligence — building the generative models and analytical frameworks that power the society's collective knowledge.",

    brief:
      "Data Science is our intelligence unit. We work on machine learning experiments, data storytelling, and open-source models for the community.",
    manifesto:
      "Data is a story waiting to be told. We use rigorous analysis to find truth and build smarter tools.",

    accent: "violet",
    focusAreas: ["Neural Networks", "Generative Systems", "Data Visualization", "Open Data", "Predictive Governance"],
    stack: ["Python", "PyTorch", "Pandas", "Scikit-Learn", "D3.js", "HuggingFace"],
    rituals: [
      { title: "Paper Talk", when: "Wednesday 19:00", about: "Discussing recent breakthroughs in AI/ML." },
      { title: "DS Workshop", when: "Friday 15:00", about: "Hands-on data analysis on real datasets." },
      { title: "Public Dataset Drop", when: "Twice a term", about: "Sharing curated data for other campus developers." },
    ],
    projects: [
      { title: "Campus Map AI", year: "2025", type: "Experiment", blurb: "Using ML to optimize student navigation paths." },
      { title: "Sentiment Tracker", year: "2025", type: "Project", blurb: "Analyzing student feedback trends across campus." },
      { title: "The Viz Gallery", year: "2024", type: "Web", blurb: "An interactive gallery of club data stories." },
    ],
    members: [
      { name: "Mohammad Umar", role: "Lead", lead: true, year: "4th Year", bio: "Building the AI infrastructure for our society.", skills: ["ML", "Python", "NLP"], img: UmarImg },
      { name: "Afaaf Nayyar", role: "Co-Lead", lead: true, year: "2nd Year", bio: "Exploring the limits of generative AI models.", skills: ["Deep Learning", "Models"], img: AfaafImg },
      { name: "Yussra Khan", role: "Data Analyst", year: "2nd Year", bio: "Turning raw student data into actionable insights.", skills: ["SQL", "Stats"], img: YussraImg },
      { name: "Alina Mariyam", role: "Visualization", year: "2nd Year", bio: "Specializing in interactive data dashboards.", skills: ["D3", "Viz"], img: AlinaImg },
    ],
  },
  {
    slug: "media",
    num: "04",
    name: "Media",
    tagline: "The visual chroniclers.",
    mission:
      "We document the collective's evolution through cinema-grade visual media — creating the sensory record of our technical path.",
    brief:
      "Media is our creative bridge. We produce the visual content, films, and photography that show what the club is building to the world.",
    manifesto:
      "Visuals are the bridge to reality. We make the society's work not just visible, but visceral and undeniable.",

    accent: "acid",
    focusAreas: ["Cinematic Direction", "High-End Photography", "Digital Motion", "Acoustic Design", "Identity Systems"],
    stack: ["Adobe Suite", "DaVinci Resolve", "Sony Systems", "Ableton"],
    rituals: [
      { title: "Edit Night", when: "Tuesday 20:00", about: "Collaborative editing and color grading sessions." },
      { title: "Shooting Day", when: "Last Sunday", about: "Capturing the club's latest projects in action." },
      { title: "Media Screening", when: "Thursday 21:00", about: "Reviewing our latest films before release." },
    ],
    projects: [
      { title: "Annual Recap 2025", year: "2025", type: "Film", blurb: "Our annual showcase film of all society projects." },
      { title: "Tech Talk Series", year: "2025", type: "Content", blurb: "A series of video interviews with our lead engineers." },
      { title: "The Portfolio Book", year: "2024", type: "Print", blurb: "A physical book showcasing our members' work." },
    ],
    members: [
      { name: "Abuzar Ghaffari", role: "Lead", lead: true, year: "3rd Year", bio: "Directing the visual identity of the society.", skills: ["Direction", "Video"], img: AbuzarImg },
      { name: "Mansi", role: "Co-Lead", lead: true, year: "3rd Year", bio: "Capturing the humans behind the code.", skills: ["Portraiture", "Edit"], img: MansiImg },
      { name: "Myel Khan", role: "Video Editor", year: "2nd Year", bio: "The master of the club's highlight reels.", skills: ["Premiere", "After Effects"], img: MyelImg },
      { name: "Rameesha", role: "Creators", year: "2nd Year", bio: "Focusing on social content and club promotion.", skills: ["Mobile Content", "Graphics"], img: RameeshaImg },
    ],
  },
  {
    slug: "content",
    num: "05",
    name: "Content",
    tagline: "The keepers of the thesis.",
    mission:
      "We articulate the society's collective thought — crafting the written narratives and technical documentation that form our intellectual foundation.",
    brief:
      "Content is our editorial wing. We document our projects, interview members, and manage the society's blog and newsletter.",
    manifesto:
      "Language is the ultimate protocol. We translate complex engineering into human stories that stick.",

    accent: "cyan",
    focusAreas: ["Technical Editorial", "The Society Thesis", "Strategic Comms", "Project Narrative", "Oral Histories"],
    stack: ["iA Writer", "Notion", "Ghost", "Substack", "Markdown"],
    rituals: [
      { title: "Writer's Room", when: "Monday 20:00", about: "Peer review for blog posts and project logs." },
      { title: "Slush Desk", when: "Friday 17:00", about: "Reviewing member submissions for the newsletter." },
      { title: "Study Hall", when: "Wednesday afternoon", about: "Group research and drafting sessions." },
    ],
    projects: [
      { title: "The Nexus Dispatch", year: "2025", type: "Newsletter", blurb: "Our monthly deep-dive into society projects." },
      { title: "Member Profiles", year: "2025", type: "Editorial", blurb: "A series highlighting the builders of our club." },
      { title: "Zine: Tech & Life", year: "2024", type: "Print", blurb: "An annual collection of student tech essays." },
    ],
    members: [
      { name: "Afaaf Nayyar", role: "Lead", lead: true, year: "2nd Year", bio: "Managing the society's blog and editorial tone.", skills: ["Editing", "Strategy"], img: AfaafImg },
      //{ name: "Vikram Singh", role: "Co-Leads", lead: true, year: "3rd Year", bio: "Specializing in deep-dives on emerging tech.", skills: ["Writing", "Research"] },
      { name: "Warda Amir", role: "Editor", year: "4th Year", bio: "Keeping our project documentation sharp and clear.", skills: ["Copy", "Style"], img: WardaImg },
      { name: "Imran Ahmed", role: "Researcher", year: "4th Year", bio: "Fact-checking and gathering resources for our leads.", skills: ["Research", "Sourcing"], img: ImranImg },
    ],
  },
  {
    slug: "social-media",
    num: "06",
    name: "Social Media",
    tagline: "The pulse of the collective.",
    mission:
      "We orchestrate the society's digital presence — building the engagement frameworks that connect the collective to the wider world.",
    brief:
      "Social Media creates the engagement. We run the club's online channels and manage our Discord community of 500+ builders.",
    manifesto:
      "Connection is currency. We don't just post; we create the spaces where student builders want to exist.",

    accent: "violet",
    focusAreas: ["Engagement Engines", "Community Labs", "Short-Form Logic", "Discord Architecture", "Platform Strategy"],
    stack: ["Figma", "CapCut", "Discord", "Instagram", "Buffer"],
    rituals: [
      { title: "Content Sync", when: "Monday 19:00", about: "Planning the week's posts with Media." },
      { title: "Shorts Lab", when: "Wednesday 18:00", about: "Collaborative reel and short creation session." },
      { title: "Discord Hangout", when: "Thursday 21:00", about: "Weekly voice chat for the whole society." },
    ],
    projects: [
      { title: "Project Spotlight", year: "2025", type: "Social", blurb: "Weekly highlights of what our teams are shipping." },
      { title: "Nexus Discord v2", year: "2025", type: "Community", blurb: "A complete overhaul of our community hub." },
      { title: "Student Dev Series", year: "2024", type: "Video", blurb: "Short-form career tips for student engineers." },
    ],
    members: [
      { name: "Aruna Azam", role: "Lead", lead: true, year: "3rd Year", bio: "Managing our community growth and presence.", skills: ["Community", "Strategy"], img: ArunaImg },
      { name: "Zishan", role: "Co-Lead", lead: true, year: "3rd Year", bio: "Turning club projects into viral stories.", skills: ["Growth", "Analytics"], img: ZishanImg },
      { name: "Stalin Gupta", role: "Community Design", year: "2nd Year", bio: "Designing all graphics for our digital channels.", skills: ["Figma", "Branding"], img: StalinImg },
      { name: "Kulsoom", role: "Discord Manager", year: "2nd Year", bio: "Keeping the conversation alive in the Nexus Discord.", skills: ["Moderation", "Bot Setup"], img: KulsoomImg },
    ],
  },
  {
    slug: "management",
    num: "07",
    name: "Management",
    tagline: "The structural spine.",
    mission:
      "We maintain the society's organizational health — ensuring the logistical integrity and operational excellence of the collective.",
    brief:
      "Management takes care of the business side. We handle event coordination, membership records, and society rules.",
    manifesto:
      "Order allows for chaos. By mastering the grid of logistics, we free our members to create without friction.",

    accent: "acid",
    focusAreas: ["Event Architecture", "Logistical Systems", "Organizational Debt", "Protocol & Rules", "System Outreach"],
    stack: ["Notion", "Calendar", "Docs", "Discord"],
    rituals: [
      { title: "Rules Committee", when: "Monday 09:00", about: "Weekly review of society policies." },
      { title: "Event Planning", when: "Monthly", about: "Deep-dive planning for our flagship festivals." },
    ],
    projects: [
      { title: "Membership Portal", year: "2025", type: "Operations", blurb: "Digital management system for club members." },
      { title: "The Event Playbook", year: "2024", type: "Internal", blurb: "Standardizing how we run our society meetups." },
      { title: "Society Handbook", year: "2024", type: "Internal", blurb: "Standardizing how we run our society meetups." },
    ],
    members: [
      { name: "Shabab Ahmad", role: "Lead", lead: true, year: "4th Year", bio: "Ensuring the society runs smoothly every week.", skills: ["Mgmt", "Events"], img: ShababImg },
      { name: "Mohd Sami Waseem", role: "Lead", lead: true, year: "2nd Year", bio: "Ensuring the society runs smoothly every week.", skills: ["Mgmt", "Events"], img: SamiImg },
      { name: "Mohd Ashraf Ansari", role: "Co-Lead", lead: true, year: "2nd Year", bio: "Keeping the society's history and archives intact.", skills: ["Records", "Admin"], img: AshrafImg },
      { name: "Ayaz Afzal", role: "Coordinator", year: "2nd Year", bio: "Handling the day-to-day logistics of our meetups.", skills: ["Events", "Logistics"], img: AyazImg },
      { name: "Hiba", role: "Coordinator", year: "2nd Year", bio: "Handling the day-to-day logistics of our meetups.", skills: ["Events", "Logistics"], img: HibaImg },
      { name: "Aisha Khan", role: "Coordinator", year: "2nd Year", bio: "Handling the day-to-day logistics of our meetups.", skills: ["Events", "Logistics"], img: AishaImg },
      { name: "Takrim", role: "Coordinator", year: "2nd Year", bio: "Handling the day-to-day logistics of our meetups.", skills: ["Events", "Logistics"], img: TakrimImg },
      { name: "Umair Mallick", role: "Coordinator", year: "2nd Year", bio: "Handling the day-to-day logistics of our meetups.", skills: ["Events", "Logistics"], img: UmairImg },
      { name: "Baber Khateeb", role: "Coordinator", year: "2nd Year", bio: "Handling the day-to-day logistics of our meetups.", skills: ["Events", "Logistics"], img: KhateebImg },
      { name: "Imran Ahmed", role: "Coordinator", year: "2nd Year", bio: "Handling the day-to-day logistics of our meetups.", skills: ["Events", "Logistics"], img: ImranImg },
      ],
  },
  {
    slug: "creative",
    num: "08",
    name: "Creative",
    tagline: "The aesthetic vanguard.",
    mission:
      "We define the society's visual soul — exploring the experimental horizons of design and aesthetic identity.",
    brief:
      "Creative is our identity house. We design the visuals, posters, and physical spaces that make the society unique.",
    manifesto:
      "Design is an experiment with no end. We ship identity systems that challenge the status quo for student technical spaces.",

    accent: "cyan",
    focusAreas: ["Art Direction", "Dynamic Identity", "Physical Media", "Interface Theory", "Visual Systems"],
    stack: ["Figma", "Illustrator", "Photoshop", "After Effects", "Blender"],
    rituals: [
      { title: "Design Crit", when: "Wednesday 18:00", about: "Members review and help each other's graphics." },
      { title: "Poster Lab", when: "Friday 14:00", about: "Physical design hacking with Risograph." },
    ],
    projects: [
      { title: "Nexus Brand v2", year: "2025", type: "Branding", blurb: "The new visual language for our club's next season." },
      { title: "Digital Fest '24", year: "2024", type: "Event Design", blurb: "Full visual system for our flagship society event." },
      { title: "Society Handbook", year: "2024", type: "Internal", blurb: "Standardizing how we run our society meetups." },
    ],
    members: [
      { name: "Namra Nida", role: "Lead", lead: true, year: "3rd Year", bio: "Leading the aesthetic direction of our society.", skills: ["AD", "Typography"], links: [{ label: "Portfolio", href: "#" }], img: NamraImg },
      { name: "Mehar Qausain", role: "Co-Lead", lead: true, year: "2nd Year", bio: "Specializing in spatial design and print systems.", skills: ["Design", "Print"], img: MeharImg },
      { name: "Kulsum Fatma", role: "UX Designer", year: "2nd Year", bio: "Building accessible and beautiful user experiences.", skills: ["UX", "Layout"], img: KulsumImg },
      { name: "Mansha", role: "UX Designer", year: "2nd Year", bio: "Building accessible and beautiful user experiences.", skills: ["UX", "Layout"], img: ManshaImg },
      { name: "Samaira", role: "UX Designer", year: "2nd Year", bio: "Building accessible and beautiful user experiences.", skills: ["UX", "Layout"], img: SamairaImg },
      { name: "Aliza", role: "UX Designer", year: "2nd Year", bio: "Building accessible and beautiful user experiences.", skills: ["UX", "Layout"], img: AlizaImg },
      { name: "Wafa Fatima", role: "UX Designer", year: "2nd Year", bio: "Building accessible and beautiful user experiences.", skills: ["UX", "Layout"], img: WafaImg },
      { name: "Ali Raza", role: "UX Designer", year: "2nd Year", bio: "Building accessible and beautiful user experiences.", skills: ["UX", "Layout"], img: AliImg },
    ],
  },
  {
    slug: "corporate",
    num: "09",
    name: "Partnerships",
    tagline: "The external interface.",
    mission:
      "We architect the society's industrial bridges — connecting our collective of student builders to the global tech ecosystem.",
    brief:
      "Partnerships is our external face. We work with tech companies to bring opportunities and sponsorships to the society.",
    manifesto:
      "Opportunities are built, not found. We create the pipelines that take our members from the club to the frontier of their careers.",

    accent: "violet",
    focusAreas: ["Industry Pipeline", "Sponsorship Logic", "Strategic Alliances", "Career Systems", "External PR"],
    stack: ["CRM", "LinkedIn", "Keynote", "Mailchimp"],
    rituals: [
      { title: "Partner Sync", when: "Tuesday 11:00", about: "Reviewing outreach to potential tech sponsors." },
      { title: "Career Workshop", when: "Quarterly", about: "Connecting members with technical recruiters." },
    ],
    projects: [
      { title: "Innovate Program '25", year: "2025", type: "Initiative", blurb: "Our program for student startup mentorship." },
      { title: "Sponsor Hub", year: "2024", type: "Platform", blurb: "Connecting club members with local tech companies." },
      { title: "Sponsor Hub", year: "2024", type: "Platform", blurb: "Connecting club members with local tech companies." },

    ],
    members: [
      { name: "Tanzeel Nasim", role: "Lead", lead: true, year: "2nd Year", bio: "Connecting our club with the global tech scene.", skills: ["Relations", "Sales"], links: [{ label: "LinkedIn", href: "#" }], img: TanzeelImg },
      //{ name: "Neil Sethi", role: "Co-Lead", lead: true, year: "Third Year", bio: "Driving the society's public image and reach.", skills: ["PR", "Strategy"] },
      { name: "Ibrahim Khan", role: "Sponsor Manager", year: "2nd Year", bio: "Managing our network of technical partners.", skills: ["Networking", "Sales"], img: IbrahimImg },
      { name: "Aisha Khan", role: "Sponsor Manager", year: "2nd Year", bio: "Managing our network of technical partners.", skills: ["Networking", "Sales"], img: AishaImg },
    ],
  },
];

export const getTeam = (slug: string) => TEAMS.find((t) => t.slug === slug);
