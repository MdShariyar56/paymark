import React from "react";

const AttractsIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="3" fill="currentColor" />
  </svg>
);

const ExonIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 17L4 6h16L12 17z" />
  </svg>
);

const ElioIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M15 5l-7 7 7 7"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RelaxIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const OlabIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M6 4v16M6 4l12 6-12 6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const logos = [
  {
    name: "attracts",
    Icon: AttractsIcon,
    color: "text-orange-400",
    trademark: true,
  },
  { name: "exon", Icon: ExonIcon, color: "text-sky-400" },
  { name: "elio", Icon: ElioIcon, color: "text-emerald-400" },
  {
    name: "attracts",
    Icon: AttractsIcon,
    color: "text-fuchsia-400",
    trademark: true,
  },
  { name: "relax.", Icon: RelaxIcon, color: "text-amber-400" },
  { name: "olab", Icon: OlabIcon, color: "text-violet-400" },
];

function LogoItem({ name, Icon, color, trademark }) {
  return (
    <div className="flex items-center gap-2 px-10 shrink-0 select-none">
      <Icon className={`w-5 h-5 ${color}`} />
      <span className="text-2xl font-bold text-neutral-300 tracking-tight">
        {name}
      </span>
      {trademark && (
        <span className="text-xs text-neutral-500 -translate-y-2">®</span>
      )}
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <div className="w-full bg-[#070707] py-10 overflow-hidden">
      <div className="relative flex">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent z-10" />

        <div className="flex animate-marquee">
          {logos.map((logo, i) => (
            <LogoItem key={`a-${i}`} {...logo} />
          ))}
          {logos.map((logo, i) => (
            <LogoItem key={`b-${i}`} {...logo} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 22s linear infinite;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
