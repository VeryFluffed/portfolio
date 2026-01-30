const BREAKPOINT_SIZES = {
  small: {
    planeScale: 0.5,
    planePosition: [-1.9, -2.9, 2.5],
    jukeboxScale: 5,
    cubePosition: [4, -5, 0],
    reactLogoPosition: [3, 4, 0],
    ringPosition: [-5, 7, 0],
    targetPosition: [-5, -10, -10],
  },
  mobile: {
    planeScale: 0.3,
    planePosition: [-1.9, -2.9, 2.5],
    jukeboxScale: 5,
    cubePosition: [5, -5, 0],
    reactLogoPosition: [5, 4, 0],
    ringPosition: [-10, 10, 0],
    targetPosition: [-9, -10, -10],
  },
  tablet: {
    planeScale: 0.5,
    planePosition: [0, -7, 2.5],
    jukeboxScale: 50,
    cubePosition: [5, -5, 0],
    reactLogoPosition: [5, 4, 0],
    ringPosition: [-12, 10, 0],
    targetPosition: [-11, -7, -10],
  },
  desktop: {
    planeScale: 0.5,
    planePosition: [0, -7, 2.5],
    jukeboxScale: 50,
    cubePosition: [9, -5.5, 0],
    reactLogoPosition: [12, 3, 0],
    ringPosition: [-24, 10, 0],
    targetPosition: [-13, -13, -10],
  },
};

export const calculateSizes = (
  isSmall: boolean,
  isMobile: boolean,
  isTablet: boolean,
) => {
  if (isSmall) return BREAKPOINT_SIZES.small;
  if (isMobile) return BREAKPOINT_SIZES.mobile;
  if (isTablet) return BREAKPOINT_SIZES.tablet;
  return BREAKPOINT_SIZES.desktop;
};
