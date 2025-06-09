'use client';

export function VitalWallEmbed() {
  return (
    <div className="mt-8 w-full">
      <h2 className="text-2xl font-bold mb-4">What are people reading</h2>
      <div
        data-vital-wall="65c1116c-640a-4588-9d40-d05b558679e4"
        className="w-full min-h-[400px] relative border border-gray-200 rounded-lg overflow-hidden bg-white dark:bg-gray-900 dark:border-gray-700"
        style={{
          width: '100%',
          minHeight: '400px',
          display: 'block',
          position: 'relative'
        }}
      >
        {/* Loading placeholder */}
        <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white mx-auto mb-2"></div>
            <p>Loading reading activity...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
