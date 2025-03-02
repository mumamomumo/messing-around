import { createSignal, onCleanup } from "solid-js";

const marquee_items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

const Marquee = () => {
  const [scroll, setScroll] = createSignal(0);
  const interval = setInterval(() => {
    setScroll((scroll() + 1) % 1000);
  }, 16);

  onCleanup(() => {
    clearInterval(interval);
  });

  return (
    <div class="marquee flex gap-4">
      {[...marquee_items, ...marquee_items].map((item, index) => (
        <p
          style={{
            transform: `translateX(${-scroll() + index * 50}px)`,
            "white-space": "nowrap",
          }}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default Marquee;
