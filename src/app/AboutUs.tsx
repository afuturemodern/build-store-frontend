import { cn } from "@/utils/cn";
import React from "react";
import CompetencyList from "./CompetencyList";

function AboutUs() {
  return <CompetencyList/>
  // return (
  //   <section
  //     className={cn(
  //       "bg-black text-white px-8"
  //       // "text-center"
  //     )}
  //   >
  //     <h1 className={cn("text-2xl text-center")}>Our Story</h1>
  //     <p className="text-center">
  //       future modern is a talent agency at the union of art and science. We
  //       leverage our one-of-a-kind interdisciplinary network to provide
  //       best-in-class services to select clients.
  //     </p>

  //     <h2 className={cn("text-xl text-center")}>Core Competencies</h2>
  //     <div className={cn("flex flex-col")}>
  //       <div className={cn("flex flex-wrap")}>
  //         <div className={cn("basis-0 grow")}>
  //           <h3>Technical:</h3>
  //           <ul className={cn("list-disc marker:text-white text-xs")}>
  //             <li>Software Engineering</li>
  //             <li>Software Development</li>
  //             <li>Web Development</li>
  //             <li>Blockchain development</li>
  //             <li>Data Science & Data Analytics</li>
  //             <li>Machine Learning</li>
  //             <li>Artificial Intelligence (AI)</li>
  //             <li>Robotics</li>
  //             <li>Embedded Engineering</li>
  //             <li>
  //               Information Systems, Network Administration & Cyber Security
  //             </li>
  //             <li>Technical Writing</li>
  //           </ul>
  //         </div>
  //         <div className={cn("basis-0 grow")}>
  //           <h3>Creative:</h3>
  //           <ul className={cn("list-disc marker:text-white text-xs")}>
  //             <li>Web Design</li>
  //             <li>Graphic Design</li>
  //             <li>Fashion Design</li>
  //             <li>Game Design</li>
  //             <li>Product Design</li>
  //             <li>
  //               Branding
  //               <ul>
  //                 <li>Brand Development</li>
  //                 <li>Brand Kits</li>
  //                 <li>Logos</li>
  //               </ul>
  //             </li>
  //             <li>
  //               Marketing
  //               <ul>
  //                 <li>Social Media Marketing</li>
  //                 <li>Organic Social Marketing</li>
  //                 <li>Guerrilla Marketing</li>
  //                 <li>Influencer Marketing</li>
  //                 <li>
  //                   Digital Marketing
  //                   <ul>
  //                     <li>Search Engine Optimization (SEO)</li>
  //                     <li>Pay-per-click</li>
  //                     <li>Paid Ads</li>
  //                   </ul>
  //                 </li>
  //                 <li>Content Marketing</li>
  //               </ul>
  //             </li>
  //             <li>Content Creation</li>
  //             <li>Advertising</li>
  //             <li>Copywriting</li>
  //             <li>
  //               Film & Video
  //               <ul>
  //                 <li>Video Production</li>
  //                 <li>Film Direction</li>
  //                 <li>Commercials</li>
  //               </ul>
  //             </li>
  //             <li>
  //               Music
  //               <ul>
  //                 <li>Songwriting</li>
  //                 <li>Music Production</li>
  //                 <li>Recording Arts</li>
  //                 <li>Record/Audio Engineering</li>
  //               </ul>
  //             </li>
  //             <li>Event Planning & Event Management</li>
  //           </ul>
  //         </div>
  //         <div className={cn("basis-0 grow")}>
  //           <h3>Business Management & Professional:</h3>
  //           <ul className={cn("list-disc marker:text-white text-xs")}>
  //             <li>Go-to-market (GTM)</li>
  //             <li>Sales, Closing, and Negotiation</li>
  //             <li>Revenue Operations</li>
  //             <li>Management Consulting</li>
  //             <li>
  //               Managed Services
  //               <ul>
  //                 <li>Social Media Management</li>
  //               </ul>
  //             </li>
  //             <li>Staffing</li>
  //             <li>Blockchain Law</li>
  //             <li>Product Management</li>
  //             <li>Strategy</li>
  //             <li>Psychiatry & Psychology</li>
  //             <li>Family Medicine</li>
  //             <li>Health and Biotechnology Law</li>
  //             <li>
  //               Pharmaceuticals, Pharmaceutical Marketing, and Medical Writing
  //             </li>
  //             <li></li>
  //             <li></li>
  //           </ul>
  //         </div>
  //         <div className={cn("basis-0 grow")}>
  //           <h3>Instruction, Coaching, Teaching, and Tutoring:</h3>
  //           <ul className={cn("list-disc marker:text-white text-xs")}>
  //             <li>All of the above subjects</li>
  //             <li>Grade 5-12 Math</li>
  //             <li>
  //               Computer Science & Programming (All Ages)
  //               <ul>
  //                 <li>Python</li>
  //                 <li>SQL</li>
  //                 <li>Java</li>
  //               </ul>
  //             </li>
  //             <li>Competition Math (K-8)</li>
  //             <li>
  //               College Prep, AP, and IB
  //               <ul>
  //                 <li>SAT</li>
  //                 <li>SAT Subject Tests</li>
  //                 <ul>
  //                   <li>Math IIC</li>
  //                   <li>Chemistry</li>
  //                   <li>US History</li>
  //                   <li>English</li>
  //                 </ul>
  //                 <li>ACT</li>
  //                 <li>Math</li>
  //                 <ul>
  //                   <li>AP Calculus</li>
  //                   <li>AP Statistics</li>
  //                   <li>IB SL/HL Differential Equations</li>
  //                   <li>IB SL/HL Linear Algebra</li>
  //                 </ul>
  //                 <li>Science</li>
  //                 <ul>
  //                   <li>Physics - Honors, AP, 1/2/C Mech</li>
  //                   <li>AP/Honors Chemistry</li>
  //                   <li>Honors Biology</li>
  //                 </ul>
  //                 <li>
  //                   Social Science
  //                   <ul>
  //                     <li>AP Economics</li>
  //                     <li>AP Government & Politics</li>
  //                   </ul>
  //                 </li>
  //                 <li>
  //                   Humanities
  //                   <ul>
  //                     <li>AP US History</li>
  //                     <li>AP European History</li>
  //                     <li>AP World History</li>
  //                     <li>AP English Language</li>
  //                     <li>AP English Literature</li>
  //                     <li>Japanese - AP, IB SL/HL</li>
  //                   </ul>
  //                 </li>
  //               </ul>
  //             </li>
  //             <li>
  //               College-level Courses
  //               <ul>
  //                 <li>
  //                   Math
  //                   <ul>
  //                     <li>Linear Algebra</li>
  //                     <li>Multivariable Calculus</li>
  //                     <li>Differential Equations</li>
  //                   </ul>
  //                 </li>
  //                 <li>
  //                   Physics
  //                   <ul>
  //                     <li>Newtonian Mechanics</li>
  //                     <li>Electromagnetism</li>
  //                     <li>Quantum Mechanics</li>
  //                     <li>Thermodynamics</li>
  //                   </ul>
  //                 </li>
  //                 <li>
  //                   Engineering
  //                   <ul>
  //                     <li>Mechanical Engineering</li>
  //                   </ul>
  //                 </li>
  //                 <li>GRE</li>
  //               </ul>
  //             </li>
  //             <li>Lesson Planning</li>
  //             <li>Curriculum Development</li>
  //           </ul>
  //         </div>
  //       </div>

  //       <hr />
  //       <p>
  //         We $BUILD a world where community integrates with life, art,
  //         appreciation, and passion. Our interdisciplinary community originally
  //         came together around the cutting edge of music and online culture.
  //         $BUILDing from there on the open internet, we now operate across
  //         multiple industries.
  //       </p>
  //       <p>
  //         Our partners cut their teeth at organizations and institutions like
  //         Caltech, UChicago, Duke, Berkeley, USC, UCLA, Microsoft, Amazon, Meta,
  //         Lenovo, Align Technology, Ericsson, WebMD, The Los Angeles Department
  //         of Water and Power, Vattenfall, Bird Rides, Ontraport, The
  //         Smithsonian, Columbia Records, Bad Boy Records, Mad Decent Records,
  //         Complex Magazine and Lee Men&apos;s Denim.
  //       </p>
  //     </div>
  //   </section>
  // );
}

export default AboutUs;
