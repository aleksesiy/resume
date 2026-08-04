import { ChevronDown } from "lucide-react";

type Props = {
  onClick?: () => void;
};

export default function ScrollHint({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      aria-label="Scroll down"
      className="
        group
        relative
        flex
        h-14
        w-14
        items-center
        justify-center

        overflow-hidden
        rounded-full

        border
        border-white/15

        bg-white/5
        backdrop-blur-md

        text-white/80

        transition-all
        duration-300

        hover:scale-110
        hover:border-white/30
        hover:bg-white/10
      "
    >
      {/* always running shimmer */}
      <span
        className="
          pointer-events-none
          absolute
          inset-0

          -translate-x-full

          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent

          animate-[shimmer_2s_infinite]
        "
      />

      <ChevronDown size={28} strokeWidth={2} className="relative z-10" />

      <style>
        {`
          @keyframes shimmer {
            100% {
              transform: translateX(100%);
            }
          }
        `}
      </style>
    </button>
  );
}
