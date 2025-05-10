import { useEffect, useRef } from 'react';

const ScrollButtons = ({ buttons }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      // Scroll to the center of the scrollable area
      container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
    }
  }, []);

  return (
    <div ref={scrollRef} className="overflow-x-auto w-full py-12 scrollbar-hide">
      <div className="flex gap-4 min-w-max flex-nowrap items-center justify-between">
        {buttons.map((btn, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 p-2 rounded-md border px-16"
            style={{ borderColor: 'rgba(74, 197, 223, 0.5)' }}
          >
            <img
              src={btn.icon}
              alt={`${btn.label} Icon`}
              className="w-[24px] h-[24px]"
            />
            <span>{btn.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollButtons;