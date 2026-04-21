'use client';

import { 
  FileText, 
  Image as ImageIcon, 
  Video, 
  Link as LinkIcon, 
  Send,
  MoreHorizontal,
  ChevronDown,
  Paperclip,
  CheckCircle2,
  Clock,
  Unlock
} from 'lucide-react';
import { cn } from '@/lib/utils';


const assets = [
  { name: 'Initial Script v1.docx', type: 'doc', size: '2.4 MB' },
  { name: 'Thumbnail Mockup.png', type: 'image', size: '12 MB' },
  { name: 'Reference Video.mp4', type: 'video', size: '450 MB' },
  { name: 'Brand Guidelines.pdf', type: 'doc', size: '1.2 MB' },
];

const tasks = [
  { id: 1, title: 'Finalize script hook', completed: true },
  { id: 2, title: 'Record A-roll', completed: false, assignee: 'Alex' },
  { id: 3, title: 'Color grading', completed: false, assignee: 'Editor' },
];

export default function Workspace() {
  return (
    <div className="h-[calc(100vh-120px)] flex gap-6 overflow-hidden -mt-2">
      {/* Left Column: Context & Assets */}
      <aside className="w-[300px] flex flex-col gap-6 overflow-y-auto no-scrollbar pb-6">
        <div className="bg-white rounded-3xl border border-border p-6 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Unlock className="w-4 h-4 text-primary" />
            Project Details
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase">Status</p>
              <p className="text-sm font-semibold text-emerald-600">In Production</p>
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase">Deadline</p>
              <p className="text-sm font-semibold text-slate-700">Oct 24, 2024</p>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-3xl border border-border p-6 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-900">Assets</h3>
            <button className="text-primary p-1 hover:bg-primary/5 rounded-lg transition-colors">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-3 overflow-y-auto pr-1">
            {assets.map((asset) => (
              <div key={asset.name} className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer group">
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors">
                  {asset.type === 'doc' && <FileText className="w-5 h-5 text-blue-500" />}
                  {asset.type === 'image' && <ImageIcon className="w-5 h-5 text-purple-500" />}
                  {asset.type === 'video' && <Video className="w-5 h-5 text-orange-500" />}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900 truncate">{asset.name}</p>
                  <p className="text-[11px] font-medium text-slate-400">{asset.size}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full py-3 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-bold text-sm hover:border-primary/30 hover:text-primary transition-all">
            + Upload Asset
          </button>
        </div>
      </aside>

      {/* Center Column: Workspace Canvas */}
      <main className="flex-1 bg-white rounded-[40px] border border-border shadow-sm flex flex-col min-w-0">
        <div className="px-8 py-6 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-vibrant rounded-2xl">
              <Video className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Modern Tech Setup Unboxing</h1>
              <p className="text-sm text-slate-500 font-medium">Collaboration with Linus Media Tech</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2 mr-4">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Linus" className="w-8 h-8 rounded-full border-2 border-white" />
              <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">+2</div>
            </div>
            <button className="px-5 py-2.5 bg-slate-900 text-white rounded-xl font-bold text-sm hover:scale-105 transition-all">
              Save Project
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-10 space-y-10">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              Milestones & Tasks
            </h2>
            <div className="space-y-3">
              {tasks.map((task) => (
                <div key={task.id} className="flex items-center gap-4 p-4 bg-slate-50/50 border border-slate-100 rounded-2xl group hover:border-primary/20 transition-all">
                  <div className={cn(
                    "w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all",
                    task.completed ? "bg-primary border-primary" : "border-slate-300 group-hover:border-primary"
                  )}>
                    {task.completed && <CheckCircle2 className="w-4 h-4 text-white" />}
                  </div>
                  <span className={cn(
                    "flex-1 font-semibold transition-all",
                    task.completed ? "text-slate-400 line-through" : "text-slate-700"
                  )}>
                    {task.title}
                  </span>
                  {task.assignee && (
                    <span className="text-[11px] font-bold text-slate-400 bg-white px-2 py-1 rounded-lg border border-slate-100">
                      {task.assignee}
                    </span>
                  )}
                </div>
              ))}
              <button className="w-full py-4 border-2 border-dashed border-slate-100 rounded-2xl text-slate-300 font-bold text-sm hover:border-primary/20 hover:text-primary transition-all">
                + Add Milestone
              </button>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <LinkIcon className="w-5 h-5 text-primary" />
              Production Links
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-border rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Google Doc</p>
                  <p className="text-[11px] text-slate-500 font-medium">Live Collaboration Script</p>
                </div>
              </div>
              <div className="p-4 bg-white border border-border rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Video className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Frame.io</p>
                  <p className="text-[11px] text-slate-500 font-medium">Video Review Link</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Right Column: Chat & Activity */}
      <section className="w-[340px] bg-white rounded-3xl border border-border shadow-sm flex flex-col overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3 className="font-bold text-slate-900">Discussion</h3>
          <p className="text-[11px] text-slate-400 font-medium mt-1">4 people active now</p>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 flex flex-col justify-end no-scrollbar">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Linus" className="w-6 h-6 rounded-full" />
              <span className="text-xs font-bold text-slate-900">Linus</span>
              <span className="text-[10px] text-slate-400">12:30 PM</span>
            </div>
            <div className="bg-slate-100 p-4 rounded-2xl rounded-tl-none text-sm text-slate-700 leading-relaxed max-w-[90%]">
              Hey Alex! I just uploaded the raw unboxing footage. Can you check the lighting at 04:30?
            </div>
          </div>

          <div className="flex flex-col gap-2 self-end items-end">
            <div className="flex items-center gap-2 flex-row-reverse">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" className="w-6 h-6 rounded-full" />
              <span className="text-xs font-bold text-slate-900">You</span>
              <span className="text-[10px] text-slate-400">12:34 PM</span>
            </div>
            <div className="bg-primary p-4 rounded-2xl rounded-tr-none text-sm text-white leading-relaxed max-w-[90%] font-medium">
              Checking it now! The thumbnail mockup also looks great, I added one small comment.
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-300 justify-center">
            <Clock className="w-3 h-3" />
            ALEX IS TYPING...
          </div>
        </div>

        <div className="p-6 pt-2">
          <div className="relative group">
            <textarea 
              placeholder="Message your team..." 
              rows={1}
              className="w-full bg-slate-50 border border-border rounded-2xl px-4 py-3 pr-12 text-sm focus:ring-2 focus:ring-primary/20 outline-none resize-none transition-all group-focus-within:bg-white"
            />
            <div className="absolute right-3 bottom-3 flex items-center gap-2">
              <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                <Paperclip className="w-4 h-4" />
              </button>
              <button className="p-1.5 bg-primary rounded-xl text-white shadow-lg shadow-blue-100 hover:scale-110 active:scale-95 transition-all">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
