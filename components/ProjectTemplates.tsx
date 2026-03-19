// import Image from "next/image";
// import { X, ExternalLink, Github } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Project } from "@/constants";

// export default function ProjectTempalte ({project: Project, openLightbox: Function}) {
    
//     return (
//         <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4 }}
//               whileHover={{ y: -8, transition: { duration: 0.2 } }}
//               className="group cursor-pointer"
//               onClick={() => openLightbox(project)}
//               role="button"
//               tabIndex={0}
//               aria-label={`View ${project.title} project details`}
//               onKeyDown={(e) => e.key === 'Enter' && openLightbox(project)}
//             >
//               <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 h-full flex flex-col">
                
//                 <div className="relative h-64 overflow-hidden">
//                   <Image
//                     src={project.imageUrl}
//                     alt={project.title}
//                     fill
//                     sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                     className="object-cover group-hover:scale-110 transition-transform duration-500"
//                     placeholder="blur"
//                     blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2YzZjRmNSIvPjwvc3ZnPg=="
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
//                 </div>
                
//                 <div className="p-4 flex-1 flex flex-col">
//                   <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm mb-2 flex-1">
//                     {project.description}
//                   </p>
                  
//                   <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                     <span className="text-sm text-blue-600 font-medium">
//                       Click to view details →
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//     )
// }