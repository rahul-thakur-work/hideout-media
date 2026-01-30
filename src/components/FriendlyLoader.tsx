const friendlyMessages = [
  "🎭 Finding the perfect artists for you...",
  "✨ Hang tight, magic is happening...",
  "🎵 Tuning into our artist network...",
  "🎪 Setting up the stage...",
  "💫 Almost there, we promise!",
  "🎨 Adding a touch of magic...",
  "🌟 Great things take a moment...",
];

export default function FriendlyLoader({ message }: { message?: string }) {
  const randomMessage =
    friendlyMessages[Math.floor(Math.random() * friendlyMessages.length)];

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 py-12">
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-[#2f0003]/10"></div>
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-t-[#ee0202]"></div>
      </div>
      <p className="animate-pulse text-sm font-medium text-[#2f0003]">
        {message || randomMessage}
      </p>
    </div>
  );
}

