const markers = Array.from({ length: 83 }, (_, i) => i);

export const Ruler = () => {
  console.log("markers", markers);
  return (
    <div className="h-6 border-b flex items-end relative select-none print:hidden">
      <div
        className="max-w-204 mx-auto w-full h-full relative"
        id="ruler-container"
      >
        <div className="absolute inset-x-0 bottom-0 h-full">
          <div className="relative h-full w-204">
            {markers.map((marker) => {
              const position = (marker * 816) / 82; //The width of the sheet is 816px == w-204
              return (
                <div
                  key={marker}
                  className="absolute bottom-0"
                  style={{
                    left: `${position}px`,
                  }}
                >
                  {marker % 10 === 0 && (
                    <>
                      <div className="absolute bottom-0 w-px h-2 bg-neutral-500" />
                      <span className="absolute bottom-2 text-[10px] text-neutral-500 transform -translate-x-1/2">
                        {marker / 10 + 1}
                      </span>
                    </>
                  )}
                  {marker % 5 === 0 && marker % 10 !== 0 && (
                    <>
                      <div className="absolute bottom-0 w-px h-1.5 bg-neutral-500" />
                    </>
                  )}
                  {marker % 5 !== 0 && (
                    <div className="absolute bottom-0 w-px h-1 bg-neutral-500" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
