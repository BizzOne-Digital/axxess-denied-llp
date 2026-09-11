export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div
        className="h-10 w-10 rounded-full border-2 border-[var(--border-cyan)] border-t-cyan animate-spin"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}
