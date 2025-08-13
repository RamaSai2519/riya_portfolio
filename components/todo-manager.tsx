"use client"

import { useState } from "react"

export default function TodoManager() {
  const [tasks] = useState([
    { task: "Build Homepage with Hero", status: "done" },
    { task: "Create About & Services Page", status: "done" },
    { task: "Build Portfolio Gallery", status: "done" },
    { task: "Add Contact Page", status: "done" },
    { task: "Implement Scroll Animations", status: "done" },
  ])

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm z-50">
      <h3 className="font-heading font-bold text-lg mb-3 text-slate-900">Project Progress</h3>
      <div className="space-y-2">
        {tasks.map((task, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${task.status === "done" ? "bg-green-500" : "bg-slate-300"}`} />
            <span className={`text-sm ${task.status === "done" ? "text-green-700 line-through" : "text-slate-600"}`}>
              {task.task}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 text-xs text-slate-500">All tasks completed! 🎉</div>
    </div>
  )
}
