import type { ThemeConfig } from "antd";

// ─── Brand Palette (monochrome dark for young audience) ───────────────────────
export const COLORS = {
  black:      "#050505",
  blackSoft:  "#0c0c0c",
  blackCard:  "#111111",
  blackElev:  "#161616",
  white:      "#ffffff",
  white90:    "rgba(255,255,255,0.9)",
  white70:    "rgba(255,255,255,0.7)",
  white50:    "rgba(255,255,255,0.5)",
  white30:    "rgba(255,255,255,0.3)",
  white15:    "rgba(255,255,255,0.15)",
  white08:    "rgba(255,255,255,0.08)",
  white04:    "rgba(255,255,255,0.04)",
  accent:     "#e0e0e0",
  border:     "rgba(255,255,255,0.08)",
  borderHover:"rgba(255,255,255,0.2)",
} as const;

// ─── Ant Design Theme Override ────────────────────────────────────────────────
export const ANT_THEME: ThemeConfig = {
  token: {
    colorPrimary:         COLORS.white,
    colorBgBase:          COLORS.black,
    colorTextBase:        COLORS.white,
    colorBorder:          COLORS.border,
    colorBorderSecondary: COLORS.border,
    borderRadius:         14,
    borderRadiusLG:       20,
    borderRadiusSM:       8,
    fontFamily:           "'Space Grotesk', 'Inter', sans-serif",
    fontSize:             15,
  },
  components: {
    Button: {
      defaultBg:           "transparent",
      defaultColor:        COLORS.white,
      defaultBorderColor:  COLORS.white15,
      primaryColor:        COLORS.black,
      colorPrimary:        COLORS.white,
    },
    Drawer: {
      colorBgElevated: COLORS.blackSoft,
    },
    Form: {
      labelColor:       COLORS.white50,
      colorBgContainer: "transparent",
    },
    Input: {
      colorBgContainer:  COLORS.blackCard,
      colorBorder:       COLORS.border,
      colorText:         COLORS.white,
      activeBorderColor: COLORS.white,
      hoverBorderColor:  COLORS.white30,
    },
    Select: {
      colorBgContainer: COLORS.blackCard,
      colorBorder:      COLORS.border,
      colorText:        COLORS.white,
    },
  },
};
