import "../src/styles/tailwind.css";
import "../src/styles/fonts.css";
import "../src/styles/forms.css";
import "../src/styles/menu.css";
import "../src/styles/globals.css";
import "../src/icomoon/style.css";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
