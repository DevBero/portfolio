const Meteors = ({ count = 12 }: { count?: number }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: count }).map((_, i) => (
      <span
        key={i}
        className="absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-full bg-primary/60 shadow-[0_0_0_1px_hsl(var(--primary)/0.1)] rotate-[215deg] animate-meteor before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-primary/40 before:to-transparent"
        style={{
          top: `${Math.random() * 50}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 4}s`,
          animationDuration: `${3 + Math.random() * 4}s`,
        }}
      />
    ))}
  </div>
);

export default Meteors;
