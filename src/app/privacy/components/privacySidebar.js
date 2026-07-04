"use client";

import { privacySections } from "./privacy-data";

export default function PrivacySidebar() {
  return (
    <aside className="sticky top-28 hidden h-fit lg:block">
      <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
        <h3 className="mb-6 text-xl font-bold text-[#071B45]">
          Quick Navigation
        </h3>

        <div className="space-y-3">
          {privacySections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="block rounded-xl px-4 py-3 text-slate-600 transition-all duration-300 hover:bg-slate-100 hover:text-[#071B45]"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
