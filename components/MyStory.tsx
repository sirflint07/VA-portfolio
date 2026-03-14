// import Image from 'next/image';
// import { CalendarDays, CheckCircle, Zap, Mail, Workflow } from 'lucide-react';

// const MyStory = () => {
//   return (
//     <section id="story" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
//       <div className="max-w-6xl mx-auto">
        
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             MY STORY
//           </h2>
//           <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
          
//           <div className="space-y-8">
            
//             <div className="space-y-4">
//               <div className="flex items-center gap-4">
//                 <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  
//                   <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
//                     <span className="text-white text-2xl font-bold">
//                         <Image src='/img/studio-2.png' alt='profile' width={300} height={300} className='w-full h-full object-cover'/>
//                     </span>
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold text-gray-900">Fajobi Abiodun</h3>
//                   <p className="text-lg text-gray-600">Business Analyst and Web Designer</p>
//                 </div>
//               </div>
              
//               <p className="text-gray-700 text-lg leading-relaxed">
//                 With a strong background in system organization and task automation, I bring structure, clarity, and productivity to every workspace.
//               </p>
//             </div>

            
//             <div className="space-y-4">
//               <div className="flex items-center gap-2">
//                 <Zap className="w-5 h-5 text-blue-600" />
//                 <h4 className="font-semibold text-gray-900">Specialization</h4>
//               </div>
//               <p className="text-gray-700">
//                 I specialize in building smart workflows using tools like 
//                 <span className="font-medium text-blue-700"> Zapier, HubSpot, Trello, and Google Forms</span> 
//                 — ensuring that repetitive tasks are automated, follow-ups never slip through the cracks, and operations run smoothly behind the scenes.
//               </p>
//             </div>
//           </div>

          
//           <div className="space-y-8">
           
//             <div className="space-y-4">
//               <div className="flex items-center gap-2">
//                 <Workflow className="w-5 h-5 text-blue-600" />
//                 <h4 className="font-semibold text-gray-900">Experience</h4>
//               </div>
//               <ul className="space-y-3">
//                 {[
//                   'Email Management',
//                   'Form Creation & Automation',
//                   'Team Coordination',
//                   'Scheduling & Calendar Management',
//                   'Client Onboarding',
//                   'Process Optimization'
//                 ].map((item, index) => (
//                   <li key={index} className="flex items-start gap-3">
//                     <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                     <span className="text-gray-700">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//               <p className="text-gray-700 italic">
//                 All with a focus on improving speed, accuracy, and engagement.
//               </p>
//             </div>

           
//             <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
//               <div className="flex items-center gap-3 mb-4">
//                 <Mail className="w-6 h-6 text-blue-600" />
//                 <h4 className="font-bold text-gray-900 text-xl">Let{"'"}s Work Together</h4>
//               </div>
//               <p className="text-gray-700 mb-6">
//                 Whether you need support with day-to-day admin or a complete process overhaul, I&apos;m here to help you stay focused on what matters most.
//               </p>
//               <p className="text-lg font-semibold text-gray-900">
//                 Let&apos;s bring efficiency, organization, and calm into your business.
//               </p>
//             </div>
//           </div>
//         </div>

        
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
//           <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
//             <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
//             <div className="text-gray-600">Workflows Built</div>
//           </div>
//           <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
//             <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
//             <div className="text-gray-600">Projects Completed</div>
//           </div>
//           <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
//             <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
//             <div className="text-gray-600">Automation Support</div>
//           </div>
//           <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
//             <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
//             <div className="text-gray-600">Client Satisfaction</div>
//           </div>
//         </div>

        
//         <div className="mt-12 pt-8 border-t border-gray-200">
//           <h4 className="text-center text-gray-600 mb-8">Trusted Tools & Platforms</h4>
//           <div className="flex flex-wrap justify-center gap-8 md:gap-12">
//             {['Zapier', 'HubSpot', 'Trello', 'Google Forms', 'Slack', 'Notion', 'Airtable', 'Asana'].map((tool) => (
//               <div 
//                 key={tool} 
//                 className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors"
//               >
//                 {tool}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MyStory;