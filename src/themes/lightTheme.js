const defaultTheme = {
  colors: {
    primary: "purple",
    background: "white",
  },
  images: {
    background: require("../assets/background.png"),
  },
};

export const lightTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
  },
  images: {
    ...defaultTheme.images,
  },
};

export const darkTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: "gold",
    background: "black",
  },
  images: {
    ...defaultTheme.images,
    background: require("../assets/background-dark.png"),
  },
};
