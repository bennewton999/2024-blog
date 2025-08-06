import { Skeleton } from "@/components/ui/skeleton";

export function ProjectsSkeleton() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <Skeleton className="h-10 w-48 mx-auto" />
        <Skeleton className="h-6 w-80 mx-auto" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="relative rounded-xl border border-border/50 bg-card p-6 space-y-4"
          >
            {/* Status badge */}
            <div className="absolute top-4 right-4">
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>

            {/* Icon and title */}
            <div className="flex items-start gap-3">
              <Skeleton className="w-12 h-12 rounded-lg" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-40" />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-6 w-16 rounded" />
              ))}
            </div>

            {/* Link */}
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}