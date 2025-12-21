'use client';

import React from 'react';
import { 
  Zap, 
  Workflow, 
  Database, 
  FileText, 
  Chrome, 
  MessageSquare, 
  Calendar,
  CheckSquare,
  Table,
  Users,
  Briefcase,
  BarChart,
  Layers
} from 'lucide-react';

const SimpleInfiniteToolScroll = () => {
  const tools = [
    { name: 'Zapier', icon: Zap, color: 'text-blue-500' },
    { name: 'Make', icon: Workflow, color: 'text-purple-500' },
    { name: 'n8n', icon: Workflow, color: 'text-green-500' },
    { name: 'Airtable', icon: Database, color: 'text-orange-500' },
    { name: 'Notion', icon: FileText, color: 'text-gray-800' },
    { name: 'Google Workspace', icon: Chrome, color: 'text-blue-600' },
    { name: 'Microsoft 365', icon: Chrome, color: 'text-red-600' },
    { name: 'Slack', icon: MessageSquare, color: 'text-purple-600' },
    { name: 'Asana', icon: Calendar, color: 'text-red-500' },
    { name: 'Trello', icon: CheckSquare, color: 'text-blue-400' },
    { name: 'CRM Management', icon: Users, color: 'text-teal-500' },
    { name: 'Data Entry', icon: Table, color: 'text-yellow-600' },
    { name: 'Project Coordination', icon: Briefcase, color: 'text-indigo-500' },
  ];

  // Create seamless loop by duplicating
  const loopedTools = [...tools, ...tools];

  return (
    <div className="relative overflow-hidden py-12 bg-white">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
      
      <div className="flex animate-infinite-scroll">
        {loopedTools.map((tool, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-6 group"
          >
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-200 min-w-[120px]">
              <div className={`p-3 rounded-lg bg-white mb-3 ${tool.color}`}>
                <tool.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-medium text-gray-700 text-center">
                {tool.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 25s linear infinite;
          display: flex;
          width: max-content;
        }

        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default SimpleInfiniteToolScroll;