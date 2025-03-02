import RightSVG from "./rightsvg";

const TipTapBar = () => {
  return (
    <>
      <header class="fixed top-5 left-[50%] z-50 flex h-[50px] -translate-x-[50%] items-center gap-5 rounded-2xl border-black bg-white/50 px-2 shadow backdrop-blur-lg *:cursor-pointer">
        <h1 class="font-brand text-xl font-extrabold">Solid TipTap</h1>
        <p class="nav-features hover-effect flex items-center p-2">Features</p>
        <div class="sign-in flex min-w-max items-center rounded-md bg-black px-3 py-1 text-white transition-[border-radius] duration-200 hover:rounded-xl">
          <p class="flex">Sign in</p>
          <RightSVG className="rightsvg" />
        </div>
      </header>
    </>
  );
};

export default TipTapBar;
