import Link from "next/link";

export default function AnimatedLogo() {
  return (
    <Link href="/" className="group relative inline-block font-mono">
      <span className="font-clash text-2xl font-semibold tracking-wide transition-all duration-300 hover:opacity-0">
        <span className="text-muted-foreground">&gt;</span>{" "}
        S<span className="tracking-normal">.A<span className="tracking-widest">I</span></span>
        <span className="animate-blink ml-[2px] inline-block h-5 w-[8px] translate-y-[2px] bg-foreground"></span>
      </span>
      <span className="absolute left-0 top-0 font-clash text-2xl font-semibold tracking-wide opacity-0 transition-all duration-300 group-hover:opacity-100">
        <span className="text-muted-foreground">&gt;</span>{" "}
        <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
          S<span className="tracking-normal">.A<span className="tracking-widest">I</span></span>
        </span>
        <span className="animate-blink ml-[2px] inline-block h-5 w-[8px] translate-y-[2px] bg-blue-400"></span>
      </span>
    </Link>
  );
}
