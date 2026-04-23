import "../App.css";
import { Chatbot } from "@/components/chatbot-ui";
import { IslandNavigation } from "../components/island-navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

type WorkExperience = {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
};

type Education = {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  thesis: {
    title: string;
    note: string;
  };
};

const workExperience: WorkExperience[] = [
  {
    role: "Software Engineer Intern",
    company: "Associated Labors Union",
    startDate: "May 2025",
    endDate: "June 2025",
    responsibilities: [
      "Built a Payroll Emailing System integrated into an existing enterprise application using VB.Net, reducing manual payslip distribution effort.",
      "Designed an intuitive payslip email UI informed by internal employee feedback, improving end-user satisfaction.",
      "Aggregated and normalized cross-departmental employee data to populate the payroll database, ensuring data accuracy across teams.",
    ],
  },
  {
    role: "Customer-Facing Graphic Designer",
    company: "AnimatePH",
    startDate: "June 2020",
    endDate: "June 2023",
    responsibilities: [
      "Delivered 50+ graphic design projects using Adobe After Effects and Photoshop, meeting client briefs consistently on time.",
      "Served as the primary client liaison, translating technical requirements and creative direction into polished visual output.",
    ],
  },
];

const education: Education[] = [
  {
    degree: "BS Computer Science",
    institution: "University of the East",
    startDate: "June 2022",
    endDate: "April 2026",
    thesis: {
      title:
        "NutriXtract — Intelligent Nutrition Label and Fruit Image Analysis using Computer Vision, OCR, and NLP",
      note: "Accepted for international presentation at AAIML Conference, Chuo University, Tokyo",
    },
  },
];

function InformationClientPage() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 px-4 py-6">
      <div className="flex w-full max-w-6xl flex-col items-stretch gap-4 md:flex-row">
        <div className="flex w-full flex-col items-start gap-4 md:flex-1 md:flex-row">
          <IslandNavigation />
        </div>
        <div className="flex w-full flex-col gap-4">
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl">Work Experience</CardTitle>
              <CardDescription>
                My professional journey and key contributions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {workExperience.map((experience, index) => (
                  <div key={`${experience.company}-${experience.role}`}>
                    <div className="relative flex gap-4">
                      <div className="flex w-6 flex-col items-center">
                        <span className="mt-1 h-3 w-3 rounded-full bg-primary" />
                        
                      </div>
                      <div className="flex-1 pb-2">
                        <p className="text-sm text-muted-foreground">
                          {experience.startDate} — {experience.endDate}
                        </p>
                        <h3 className="text-base font-semibold">
                          {experience.role}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {experience.company}
                        </p>
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                          {experience.responsibilities.map((responsibility) => (
                            <li key={responsibility}>{responsibility}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {index < workExperience.length - 1 ? (
                      <Separator className="mt-4" />
                    ) : null}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in [animation-delay:120ms]">
            <CardHeader>
              <CardTitle className="text-xl">Education</CardTitle>
              <CardDescription>
                Academic background and notable thesis milestone.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              {education.map((item) => (
                <div
                  key={`${item.institution}-${item.degree}`}
                  className="rounded-lg border border-border/80 p-4"
                >
                  <p className="text-sm text-muted-foreground">
                    {item.startDate} — {item.endDate}
                  </p>
                  <h3 className="text-base font-semibold">{item.degree}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.institution}
                  </p>

                  <div className="mt-3 rounded-md bg-muted/40 p-3">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm leading-relaxed">
                      {item.thesis.title}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.thesis.note}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="animate-fade-in [animation-delay:180ms]">
            <CardHeader>
              <CardTitle className="text-xl">Contact Me</CardTitle>
              <CardDescription>
                Send me a message. Submission logic can be connected later.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                className="grid grid-cols-1 gap-4 md:grid-cols-2"
                onSubmit={(event) => event.preventDefault()}
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What do you want to discuss?"
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Write your message here..."
                    className="flex min-h-28 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-colors outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  />
                </div>

                <div className="md:col-span-2">
                  <Button type="submit" className="w-full md:w-auto">
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="fixed bottom-4 right-4">
          <Chatbot />
        </div>
      </div>
    </main>
  );
}

export default InformationClientPage;
