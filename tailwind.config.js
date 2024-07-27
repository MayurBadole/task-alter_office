/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      ringColor: {
        custom: "#E5E5E5",
      },
      ringOffsetWidth: {
        custom: "0px",
      },
      ringWidth: {
        custom: "4px",
      },
      ringOpacity: {
        custom: "0.12",
      },
      ringOffsetColor: {
        custom: "#E5E5E5",
      },
      colors: {
        "background-primary": "#fff",
        "background-primary-inverted": "#0a0a0a",
        "background-brand-primary": "#4338ca",
        "border-primary": "#e6e6e6",
        "text-secondary": "#525252",
        "text-disabled": "#a3a3a3",
        "text-primary": "#171717",
        gray: "rgba(10, 10, 10, 0.9)",
        "background-tertiary": "#fafafa",

        "background-primary-inverted": "#0a0a0a",
        "text-primary": "#171717",
        "text-error": "#dc2626",
        "text-success": "#15803d",

        "background-disabled": "#f5f5f5",
        "background-hover": "#3730A3",

        darkslategray: "#404040",

        "background-secondary": "#e5e7eb",

        "border-brand-solid": "#4f46e5",

        blueviolet: "#9747ff",
        "background-success-subtle": "#f0fdf4",
        "background-brand-primary-emphasize": "#3730a3",

        lightgray: "#d4d4d4",

        black: "#000",

        slategray: "#6b7280",

        dimgray: {
          100: "#737373",

          200: "#71717a",
        },

        gainsboro: "#e5e5e5",
      },
      spacing: {
        "gap-3-12px": "12px",
        "padding-0-5-2px": "2px",
        "gap-2-8px": "8px",
        "gap-1-5-6px": "6px",
        "gap-8-32px": "32px",
        "padding-6-24px": "24px",
        "max-width-xl-576px": "576px",
        "padding-4-16px": "16px",
        "padding-2-5-10px": "10px",
        "gap-5-20px": "20px",
        "max-width-3xl-768px": "768px",
        "gap-6-24px": "24px",
        "padding-8-32px": "32px",
        "gap-3-12px": "12px",
        "gap-2-8px": "8px",
        "gap-1-5-6px": "6px",
        "padding-0-5-2px": "2px",
        "height-44-176px": "176px",
        "gap-4-16px": "16px",

        "gap-1-4px": "4px",

        "width-20-80px": "80px",

        "gap-5-20px": "20px",

        "min-width-80-320px": "320px",

        "max-width-80-320px": "320px",

        "padding-6-24px1": "24px",

        "gap-0-5-2px": "2px",

        "padding-6-24px2": "24px",
      },
      fontFamily: {
        "text-base-16-medium": "'Noto Sans'",
        "text-xl-20-normal": "'Noto Sans'",
      },
      borderRadius: {
        "6xs-8": "6.8px",
        "1981xl": "2000px",
        "8xs": "5px",
        "border-radius-rounded-4px": "4px",
        "9980xl": "9999px",
        "border-radius-rounded-lg-8px": "8px",
        rounded: "4px",
        "border-radius-full": "9999px",
        rounded1: "4px",
        "border-radius-rounded-4px": "4px",
        "radius-full": "9999px",

        "border-radius-rounded-md-6px": "6px",

        rounded2: "4px",

        "border-radius-rounded-lg-8px1": "8px",

        "border-radius-rounded-lg-8px2": "8px",

        rounded3: "4px",

        rounded4: "4px",
      },
    },
    fontSize: {
      sm: "14px",
      lg: "18px",
      xl: "20px",
      base: "16px",
      "11xl": "30px",
      lg: "18px",
      "5xl": "24px",
      inherit: "inherit",
      xs: "12px",

      sm: "14px",

      "17xl": "36px",

      lgi: "19px",

      "3xl": "22px",

      "10xl": "29px",

      "53xl": "72px",
    },
    screens: {
      mq1575: {
        raw: "screen and (max-width: 1575px)",
      },

      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
