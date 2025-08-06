import { Skeleton } from "@/components/ui/skeleton";

export function FeaturedPostsSkeleton() {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-6 w-80" />
        </div>
        <Skeleton className="hidden sm:block h-8 w-32" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Featured post (larger) */}
        <div className="md:col-span-2 rounded-xl overflow-hidden border border-border/50 bg-card">
          <Skeleton className="aspect-[16/9] w-full" />
          <div className="p-8 space-y-4">
            <div className="flex items-center gap-2 flex-wrap">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="w-1 h-1 rounded-full" />
              <Skeleton className="h-4 w-16" />
            </div>
            <div className="space-y-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-6 w-16 rounded" />
              ))}
            </div>
            <div className="space-y-2">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-3/4" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        </div>

        {/* Regular posts */}
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="rounded-xl overflow-hidden border border-border/50 bg-card">
            <Skeleton className="aspect-[16/9] w-full" />
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="w-1 h-1 rounded-full" />
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="flex gap-1">
                <Skeleton className="h-5 w-12 rounded" />
                <Skeleton className="h-5 w-16 rounded" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-2/3" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="sm:hidden text-center">
        <Skeleton className="h-12 w-40 mx-auto rounded-lg" />
      </div>
    </section>
  );
}