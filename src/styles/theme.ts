//     - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)

export default {
  colors: {
    lightTheme: {
      background: "hsl(0, 0%, 98%)",
      elements: "hsl(0, 0%, 100%)",
      input: "hsl(0, 0%, 52%)",
      text: "hsl(200, 15%, 8%)",
    },
    darkTheme: {
      background: "hsl(207, 26%, 17%)",
      elements: "hsl(209, 23%, 22%)",
      text: "hsl(0, 0%, 100%)",
    },
  },
  fonts: {
    regular: "NunitoSans_300Light",
    medium: "NunitoSans_600SemiBold",
    bold: "NunitoSans_800ExtraBold",
  },
};
