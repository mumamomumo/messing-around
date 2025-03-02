import { onMount, Show } from "solid-js";
import "./app.css";
import RightSVG from "./components/rightsvg";
import TipTapBar from "./components/tip-tap-bar";
import { createSignal } from "solid-js";
import { Marquee } from "./components/marqueeComponent";

const marquee_items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

const App = () => {
  const [showDown, setShowDown] = createSignal(false);
  onMount(() => {
    setTimeout(() => {
      if (window.scrollY > window.innerHeight * 0.6) return;
      setShowDown(true);
    }, 3000);
  });

  document.onscroll = () => {
    if (window.scrollY > window.innerHeight * 0.6) {
      setShowDown(false);
    }
  };

  return (
    <div class="pb-10">
      <Show when={showDown()}>
        <div class="scroll-down-indicator"></div>
      </Show>
      <TipTapBar />
      <img
        class="bg-gradient absolute"
        src="https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/6580b17f35510ffc21541053_gradient-noise-green-red.png"
      />
      <section class="hero pt-52">
        <h1 class="mx-[25%] line-clamp-3 text-center text-8xl font-[600]">
          The newest framework that defines
        </h1>
        <p class="font-brand text-center text-8xl">fine-grained reactivity</p>
        <p class="hero-content mx-[25vw] my-15 text-center text-3xl font-light">
          SolidJS is a new framework that boasts about its fine-grained
          reactivity, with principles similar yet so different to React.
        </p>
        <div class="hero-buttons place-content-center *:px-5 *:py-3 *:font-light">
          <a
            class="fancy-button sign-in flex min-w-max cursor-pointer items-center rounded-2xl bg-black text-white duration-400 hover:rounded-3xl"
            href="https://docs.solidjs.com/"
            target="_blank"
          >
            <p>Docs</p>
            <RightSVG className="rightsvg" />
          </a>
          <a
            class="fancy-button rounded-2xl text-xl duration-200 hover:rounded-3xl"
            href="https://www.solidjs.com/tutorial/introduction_basics"
            target="_blank"
          >
            <p>Learn</p>
          </a>
        </div>
      </section>
      <section class="company-scroll my-30 h-[50px] overflow-hidden">
        {/* Auto scrolling list */}
        <Marquee speed={1000}>
          {marquee_items.map((_) => (
            <p class="mx-5">{"Random marquee"}</p>
          ))}
        </Marquee>
      </section>
      <section class="features w-full md:flex-row">
        <div>
          <div class="feature editor">
            <div class="feature-icon framework">
              <img src="/images/gemini.svg" />
            </div>
            <h1>SolidJS</h1>
            <ul class="feature-tags">
              <li>Amazing</li>
              <li>Reactive</li>
              <li>Easy-to-use</li>
            </ul>
            <div class="feature-text">
              SolidJS is fucking amazing. I find it fun to use, and I really
              enjoy its reactivity. It's really new so there aren't many
              tutorials on SolidJS, but I find that its really similar to React,
              so I was able to get used to it quickly.
            </div>
            <div class="feature-button mt-20">
              <p>Learn more</p>
            </div>
          </div>
        </div>
        <div>
          <div class="feature start">
            <div class="feature-icon start">
              <img src="/images/clove.svg" />
            </div>
            <h1>Solid Start</h1>
            <ul class="feature-tags">
              <li>Familiar</li>
              <li>API Routes</li>
            </ul>
            <div class="feature-text">
              SolidStart. Not much to say yet. I can't compare it to anything
              because I don't know any other meta-frameworks. I haven't done
              much, but I'm biased towards SolidJS. I like that it's really easy
              to get started with.
            </div>
            <div class="feature-button mt-20">
              <p>Learn more</p>
            </div>
          </div>
        </div>
        <div>
          <div class="feature content-ai">
            <div class="feature-icon">
              <img src="/images/switch.svg" />
            </div>
            <h1>Solid Router</h1>
            <ul class="feature-tags">
              <li>Fast</li>
              <li>Easy-to-use</li>
            </ul>
            <div class="feature-text">
              Solid Router makes it so easy to add multiple pages to your app,
              without making a new site. Unlike React, Solid Router is made by
              Solid. All you have to do is install it
            </div>
            <div class="feature-button mt-20">
              <p>Learn more</p>
            </div>
          </div>
        </div>
        <div class="flex w-full justify-center gap-5 justify-self-center p-5">
          <a
            class="fancy-button max-w-min min-w-[20vw] cursor-pointer place-items-center rounded-2xl py-2 hover:rounded-3xl"
            href="https://solidjs.com"
            target="_blank"
          >
            <p>Official site</p>
          </a>
          <a
            class="fancy-button max-w-min min-w-[20vw] cursor-pointer place-items-center rounded-2xl py-2 hover:rounded-3xl"
            href="https://docs.solidjs.com"
            target="_blank"
          >
            <p>Docs</p>
          </a>
        </div>
      </section>
      <section class="marquees">
        <Marquee speed={150}>
          <h1 class="marquees-text">Solid TipTap</h1>
          <h1 class="marquees-text outline">Solid TipTap</h1>
        </Marquee>
        <Marquee speed={100} direction="reverse">
          <h1 class="marquees-text">Solid Start</h1>
          <h1 class="marquees-text outline">Solid Start</h1>
        </Marquee>
        <Marquee speed={150}>
          <h1 class="marquees-text">Solid Router</h1>
          <h1 class="marquees-text outline">Solid Router</h1>
        </Marquee>
        <Marquee speed={150} direction="reverse">
          <h1 class="marquees-text">Reactivity</h1>
          <h1 class="marquees-text outline">Reactivity</h1>
        </Marquee>
        <Marquee speed={150}>
          <h1 class="marquees-text">Solid Router</h1>
          <h1 class="marquees-text outline">Solid Router</h1>
        </Marquee>
      </section>
    </div>
  );
};

export default App;
