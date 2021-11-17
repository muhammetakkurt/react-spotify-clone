const HomeIcon = ({ size = 24 }) => (
  <svg role="img" height={size} width={size} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M9 14h6v7h5V7.8l-8-4.6-8 4.6V21h5v-7zm1 8H3V7.2L12 2l9 5.2V22h-7v-7h-4v7z"
    ></path>
  </svg>
);

const SearchIcon = ({ size = 24 }) => (
  <svg role="img" height={size} width={size} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M16.387 16.623A8.47 8.47 0 0019 10.5a8.5 8.5 0 10-8.5 8.5 8.454 8.454 0 005.125-1.73l4.401 5.153.76-.649-4.399-5.151zM10.5 18C6.364 18 3 14.636 3 10.5S6.364 3 10.5 3 18 6.364 18 10.5 14.636 18 10.5 18z"
    ></path>
  </svg>
);

const LibraryIcon = ({ size = 24 }) => (
  <svg role="img" height={size} width={size} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M13.66 4.097l-.913.406 7.797 17.513.914-.406L13.66 4.097zM3 22h1V4H3v18zm6 0h1V4H9v18z"
    ></path>
  </svg>
);

const PlusIcon = ({ size = 24 }) => (
  <svg
    role="img"
    height="12"
    width="12"
    aria-hidden="true"
    viewBox="0 0 16 16"
    class="Svg-sc-1bi12j5-0 gSLhUO"
  >
    <path fill="currentColor" d="M14 7H9V2H7v5H2v2h5v5h2V9h5z"></path>
  </svg>
);

const HeartIcon = ({ size = 24 }) => (
  <svg
    role="img"
    height={size}
    width={size}
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path
      fill="currentColor"
      d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"
    ></path>
  </svg>
);

const PodcastIcon = ({ size = 24 }) => (
  <svg
    role="img"
    height={size}
    width={size}
    viewBox="0 0 527 483"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.5 264.208C1.5 119.17 118.974 1.5 264 1.5C409.026 1.5 526.5 119.17 526.5 264.208C526.5 351.905 483.535 429.569 417.628 477.247C406.996 484.938 392.595 481.729 385.684 471.362L376.758 457.971C369.699 447.382 372.818 433.617 382.485 426.529C432.426 389.914 464.783 330.851 464.783 264.208C464.783 153.128 374.839 63.1707 264 63.1707C153.161 63.1707 63.2173 153.128 63.2173 264.208C63.2173 330.851 95.5742 389.914 145.515 426.529C155.182 433.617 158.301 447.382 151.242 457.971L142.316 471.362C135.405 481.729 121.004 484.938 110.372 477.247C44.4653 429.569 1.5 351.905 1.5 264.208Z"
      fill="#1ED760"
    ></path>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M104.5 263.216C104.5 174.586 175.78 102.5 264 102.5C352.22 102.5 423.5 174.586 423.5 263.216C423.5 315.346 398.84 361.707 360.685 391.048C350.27 399.057 336.041 395.66 329.404 385.602L323.251 376.279C316.458 365.986 319.652 353.018 328.353 346.12C352.699 326.817 368.307 296.878 368.307 263.216C368.307 204.912 321.476 157.884 264 157.884C206.524 157.884 159.693 204.912 159.693 263.216C159.693 296.878 175.301 326.817 199.647 346.12C208.348 353.018 211.542 365.986 204.749 376.279L198.596 385.602C191.959 395.66 177.73 399.057 167.315 391.048C129.16 361.707 104.5 315.346 104.5 263.216Z"
      fill="#1ED760"
    ></path>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M200.5 261C200.5 226.296 229.118 198.5 264 198.5C298.882 198.5 327.5 226.296 327.5 261C327.5 295.704 298.882 323.5 264 323.5C229.118 323.5 200.5 295.704 200.5 261Z"
      fill="#1ED760"
    ></path>
  </svg>
);

const DownloadIcon = ({ size = 24 }) => (
  <svg
    role="img"
    height={size}
    width={size}
    viewBox="0 0 24 24"
    class="Svg-sc-1bi12j5-0 gSLhUO"
  >
    <path
      fill="currentColor"
      d="M11.5 0C5.149 0 0 5.148 0 11.5 0 17.851 5.149 23 11.5 23S23 17.851 23 11.5C23 5.148 17.851 0 11.5 0zm0 22C5.71 22 1 17.29 1 11.5S5.71 1 11.5 1 22 5.71 22 11.5 17.29 22 11.5 22zm.499-6.842V5h-1v10.149l-3.418-3.975-.758.652 4.678 5.44 4.694-5.439-.757-.653-3.439 3.984z"
    ></path>
  </svg>
);

const BackIcon = ({ size = 24 }) => (
  <svg
    role="img"
    focusable="false"
    height={size}
    width={size}
    viewBox="0 0 24 24"
  >
    <polyline points="16 4 7 12 16 20" stroke="currentColor"></polyline>
  </svg>
);

const NextIcon = ({ size = 24 }) => (
  <svg
    role="img"
    focusable="false"
    height={size}
    width={size}
    viewBox="0 0 24 24"
    class="Svg-ytk21e-0 bevrDs b_XV78m0oH1cQkBxrHza"
  >
    <polyline points="8 4 17 12 8 20" stroke="currentColor"></polyline>
  </svg>
);

const ArrowIcon = ({ size = 24 }) => (
  <svg
    role="img"
    height={size}
    width={size}
    class="Svg-sc-1bi12j5-0 gSLhUO _kBqVtNa6io1mPbycO8V"
    viewBox="0 0 16 16"
  >
    <path fill="currentColor" d="M3 6l5 5.794L13 6z"></path>
  </svg>
);

const Icon = ({ name, size }) => {
  const icons = {
    home: HomeIcon,
    search: SearchIcon,
    library: LibraryIcon,
    plus: PlusIcon,
    heart: HeartIcon,
    podcast: PodcastIcon,
    download: DownloadIcon,
    back: BackIcon,
    next: NextIcon,
    arrow: ArrowIcon,
  };

  const Component = icons[name];
  return <Component size={size} />;
};

export { Icon };
