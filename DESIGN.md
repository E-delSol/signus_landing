---
name: Signus Core
colors:
  surface: '#f8fafa'
  surface-dim: '#d8dada'
  surface-bright: '#f8fafa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f4'
  surface-container: '#eceeee'
  surface-container-high: '#e6e8e9'
  surface-container-highest: '#e1e3e3'
  on-surface: '#191c1d'
  on-surface-variant: '#3d4a3e'
  inverse-surface: '#2e3131'
  inverse-on-surface: '#eff1f1'
  outline: '#6c7b6d'
  outline-variant: '#bbcbbb'
  surface-tint: '#006d37'
  primary: '#006d37'
  on-primary: '#ffffff'
  primary-container: '#2ecc71'
  on-primary-container: '#005027'
  inverse-primary: '#4ae183'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed023'
  on-secondary-container: '#6f5900'
  tertiary: '#b4271d'
  on-tertiary: '#ffffff'
  tertiary-container: '#ff9687'
  on-tertiary-container: '#8e0505'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#6bfe9c'
  primary-fixed-dim: '#4ae183'
  on-primary-fixed: '#00210c'
  on-primary-fixed-variant: '#005228'
  secondary-fixed: '#ffe084'
  secondary-fixed-dim: '#eec209'
  on-secondary-fixed: '#231b00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#ffdad5'
  tertiary-fixed-dim: '#ffb4a9'
  on-tertiary-fixed: '#410000'
  on-tertiary-fixed-variant: '#910807'
  background: '#f8fafa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e3'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system is built to foster intimacy, emotional intelligence, and clarity between partners. The brand personality is **human, editorial, and respectful**, acting as a calm mediator in a couple's daily life. 

The visual style follows a **Modern Editorial** approach:
- **Calm Minimalism:** Excessive whitespace is used to reduce cognitive load and emotional tension.
- **Human Touch:** Soft transitions and organic color shifts represent the fluidity of human moods.
- **Structural Clarity:** While the content is emotional, the container is disciplined—utilizing high-quality typography and precise alignment to provide a sense of stability and security.
- **Intentionality:** Every element on the screen serves to clarify the "traffic light" status without distracting the user with unnecessary decorative flourishes.

## Colors

The palette is derived directly from the semantic meaning of a traffic light, optimized for a soft, digital interface that feels approachable rather than clinical.

- **Verde (Estado Disponible):** `#2ECC71`. Used for "Open" states and positive reinforcement.
- **Amarillo (Estado Sensible):** `#F1C40F`. Used for "Careful" or "Neutral" states, signaling a need for soft communication.
- **Rojo (Estado No Disponible):** `#E74C3C`. Used for "Closed" or "Rest" states, signaling a need for space.
- **Brand Accent:** A deep slate-charcoal `#2C3E50` is used for primary typography to ensure high legibility and a premium feel.
- **Surface:** The background uses a soft, off-white porcelain `#F9FBFB` to reduce eye strain and differentiate from the pure white cards used for interface elements.

## Typography

This design system utilizes a dual-font strategy to balance character with function.

- **Manrope (Headlines & Labels):** Provides a modern, geometric structure. Its wide apertures and balanced proportions feel contemporary and stable. Use Bold/ExtraBold for headers to create an editorial impact.
- **Be Vietnam Pro (Body & Interface):** Chosen for its exceptional legibility and warm, slightly casual terminals. It feels more "human" for the messages shared between partners.
- **Scale:** Maintain a strict hierarchy. Large headers should use tight letter spacing to feel like a cohesive unit, while labels should be slightly tracked out for immediate recognition in small sizes.

## Layout & Spacing

The layout philosophy is based on a **Fluid Container** model with generous vertical breathing room to reflect the "Calm" brand pillar.

- **Grid:** A 12-column grid for desktop with 24px gutters. Elements should gravitate toward the center to maintain a focused, intimate feel.
- **Rhythm:** Use an 8px base unit. Vertical stack spacing should be aggressive (48px or 64px between sections) to ensure the user does not feel rushed.
- **Mobile:** Transition to a single-column layout with 20px side margins. Use full-width cards with subtle padding to maximize touch targets for emotional inputs.

## Elevation & Depth

To maintain a "Human & Respectful" tone, avoid heavy, dark shadows.

- **Tonal Layering:** Depth is primarily achieved through subtle color shifts between the `#F9FBFB` background and `#FFFFFF` cards.
- **Soft Shadows:** When elevation is required (e.g., the active traffic light state), use a "Long Soft" shadow: `0px 10px 30px rgba(44, 62, 80, 0.04)`.
- **Glassmorphism:** Use light backdrop blurs (10px) on fixed navigation bars to maintain context of the content underneath, suggesting transparency and honesty in the relationship.

## Shapes

The shape language is consistently **Rounded (Level 2)** to avoid the "sharpness" or "aggression" of square corners.

- **Primary Elements:** Buttons and Input fields use a 0.5rem (8px) radius.
- **Containers:** Large cards and phone frames use a 1.5rem (24px) radius to feel like a physical, handheld object.
- **The Signal:** The "Traffic Light" itself should always be a perfect circle to maintain its iconic, universal status.

## Components

### Buttons
- **Primary:** Solid color fill (Green/Red/Yellow) with white text. High-contrast, bold weight.
- **Secondary:** Outlined with a 1.5px stroke of the Brand Accent color. Use for less urgent actions like "Ver historial."

### Phone Frames
- Screenshots must be encased in a minimalist "ghost" frame (light gray outline, no physical buttons) with high rounded corners to match the app's internal UI.

### Status Indicators
- Use a "Glowing" effect for the active state of the traffic light. This is achieved by a double-layer shadow using the color of the light itself at 20% opacity.

### Lists
- Lists of status updates should be separated by thin, low-contrast lines (`#EEEEEE`) with generous 16px padding on top and bottom to make every entry feel significant.

### Input Fields
- Use large, clear labels in **Manrope**. The focus state should change the border color to the Brand Accent, never a default blue.