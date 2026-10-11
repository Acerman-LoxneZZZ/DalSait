---
name: ДАЛЬ
description: A photographic travel field journal on warm paper.
colors:
  paper: "#f4f1e8"
  pine: "#183d35"
  ink: "#203c34"
  muted: "#526359"
  orange: "#b65131"
  line: "#d7d9cd"
  wheel-paper: "#e8edde"
  journal-paper: "#e9e8dd"
  print-paper: "#faf9f3"
  polaroid-paper: "#fcfaf3"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(76px, 8.6vw, 132px)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(50px, 5.7vw, 86px)"
    fontWeight: 500
    lineHeight: 0.99
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "37px"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "11px"
    fontWeight: 400
  caption:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: 1.3
rounded:
  image: "4px"
  print: "8px"
  dialog: "12px"
  hero: "15px"
  pill: "40px"
  circle: "50%"
spacing:
  detail: "10px"
  inset: "20px"
  copy: "24px"
  control-gap: "32px"
  desktop-gutter: "56px"
components:
  button-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.pine}"
    rounded: "{rounded.pill}"
    padding: "9px 10px 9px 25px"
  round-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    size: "43px"
  round-button-hover:
    backgroundColor: "{colors.pine}"
    textColor: "{colors.paper}"
  destination-print:
    backgroundColor: "{colors.print-paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.print}"
    padding: "9px 9px 13px"
    width: "254px"
    height: "330px"
  polaroid:
    backgroundColor: "{colors.polaroid-paper}"
    textColor: "{colors.ink}"
    padding: "12px 12px 19px"
    width: "270px"
---

# Design System: ДАЛЬ

## Overview

**Creative North Star: "The Independent Travel Field Journal"**

Photographic landscapes lead; warm paper gives each pause the feel of a personal travel journal. Pine grounds the immersive scenes and closing surface, while orange marks routes and expressive italic phrases. The density alternates between expansive imagery and compact, carefully spaced editorial details.

Motion follows exploration: prints rotate along a shared arc, an itinerary fills as it is read, and photographs lift when touched. Cyrillic serif headlines carry emotion; sans-serif copy keeps destinations and controls legible. These rules describe the shipped HTML, stylesheet and interactions rather than a prospective component library.

**Key Characteristics:**
- Scenic photography with restrained dark shading.
- Expressive serif titles and precise sans-serif details.
- Warm paper, pine anchors and orange route marks.
- Physical photographic prints with gentle rotation and diffuse depth.
- Scroll-linked exploration with reduced-motion alternatives.

## Colors

Forest greens and warm off-whites make the photographs feel native to the page; burnt orange gives the itinerary and editorial emphasis a clear voice.

### Primary
- **Pine:** immersive backgrounds, primary icon discs and filled control states.
- **Burnt Orange:** route progress, selected timeline dots, italic emphasis, selection and focus outlines.

### Neutral
- **Warm Paper:** the page canvas, light buttons and story-dialog surface.
- **Forest Ink:** reading text on paper.
- **Muted Foliage:** supporting copy and place metadata.
- **Paper Seam:** quiet itinerary and dialog dividers.
- **Wheel Paper / Journal Paper:** subtly distinct chapter backgrounds.
- **Print Paper / Polaroid Paper:** the margins around photographs.

**The Route Mark Rule.** Use orange for reading progress, itinerary states, focus and editorial emphasis; preserve pine and paper as the broad surfaces.

## Typography

**Display Font:** Cormorant Garamond, with Georgia and serif fallbacks.
**Body Font:** Manrope, with sans-serif fallback.

The serif is open and expressive, often italic within a headline or handwritten-style caption. The sans-serif is compact and steady. Locally supplied font stylesheets provide both families.

### Hierarchy
- **Display:** airy hero titles; the mobile hero uses a smaller clamp with a slightly looser line height.
- **Headline:** chapter titles, with section-specific size adjustments and orange italic emphasis on paper.
- **Title:** itinerary stops; destination selections use a smaller serif title (32px).
- **Body:** reading text; editorial paragraphs generally use a relaxed line height (1.9), and become smaller on mobile (13px).
- **Label:** navigation, location metadata, dates and image annotations; labels describe actual content rather than serving as invented section kickers.
- **Caption:** italic photographic captions; personal notes may tilt gently.

**The Two Voices Rule.** Use the serif for expressive titles and personal captions; use Manrope for prose, controls and factual metadata.

## Layout

The shared desktop shell is capped at 1280px with 56px side gutters. At 1050px and below the gutters become 36px; at 700px and below they become 22px. The hero is an inset photographic frame, with a viewport-relative height and enough minimum height to keep its copy and film preview apart.

Desktop editorial sections use asymmetric or paired columns: the intro has a narrow symbol column, the itinerary pairs a sticky introduction with a vertical timeline, and the closing section pairs text with a mounted photo. On mobile these become a single reading column. The journal stays horizontally scrollable, with snap alignment and working previous/next controls.

The destination wheel is a shared circular composition, not independent tiles. Its track and rotor share a center at `calc(55% + var(--radius))`; radius responds to viewport size (610px default, 560px tablet, 455px mobile, 720px tall desktop, 730px wide desktop). Its sticky chapter lasts 190svh desktop and 165svh mobile. Reduced motion makes it a single-viewport chapter.

## Elevation & Depth

Broad chapter surfaces stay flat. Photography earns depth through tonal shading, paper margins, gentle rotation and diffuse shadows. Destination prints, polaroids and the story dialog use distinct shadows; hover strengthens print depth while nearby text remains still.

### Shadow Vocabulary
- **Destination print:** `0 14px 24px -14px #25382c55`; hover `0 24px 40px -15px #25382c75`.
- **Polaroid:** `3px 12px 22px -12px #2b3a2855`; hover/focus `5px 21px 35px -15px #2b3a2866`.
- **Story dialog:** `0 30px 80px -20px #061c18bb`, against a dark blurred backdrop.

**The Photographic Depth Rule.** Attach diffuse elevation to mounted photographs and dialogs; leave ordinary reading surfaces flat.

## Shapes

Photographs use modest soft corners; polaroid paper keeps square corners. The hero is a softly rounded frame, and the story dialog is a slightly tighter sheet. Action buttons are pills with circular arrow discs; carousel and close controls are circular outlines. The timeline uses fine vertical rules and circular dots. Icons are stroked inline SVGs, with filled play triangles only where appropriate.

## Components

### Buttons

The light pill is confident without competing with photography. It combines paper fill, pine text and a pine arrow disc. Hover lifts the pill (3px) and rotates its disc (45deg). Circular controls fill pine and scale slightly on hover; mobile wheel and journal controls use a 44px target. Text actions use a quiet underline and widen their arrow gap on hover.

All keyboard-focusable elements use an orange outline (3px) offset from the edge (6px).

### Cards / Containers

Destination prints have a thin paper margin and soft corners. A shared wheel transformation supplies their position; the active print gains a stronger shadow. Polaroids use wider lower margins, italic captions and subtle individual tilts. Hover and keyboard focus straighten and lift them; their images enlarge slightly. Both open editorial stories.

### Navigation

Navigation sits directly over the hero photograph, using compact Manrope text and generous horizontal gaps. Hover increases opacity. The outlined header action reverses to paper on hover and is hidden at the mobile breakpoint; the main section links remain available. A skip link appears on keyboard focus.

### Timeline

A thin vertical seam fills orange with reading progress. Passed stops receive orange dots and a diffuse small halo. Stop titles are serif; day/distance details and supporting text remain sans-serif. On phones the timeline follows the route introduction.

### Story and Film Dialogs

The story sheet pairs a photo with paper copy, then stacks on phones. The location follows the title. Native dialogs preserve modal focus behavior and return focus to the opener when closed. The film is a full-screen photographic sequence with explicit pause, previous and next controls. Reduced-motion users start with playback paused.

## Do's and Don'ts

### Do:
- **Do** let photographic landscapes set the atmosphere, with shading where text overlays them.
- **Do** use the serif for expressive titles and the sans-serif for prose and controls.
- **Do** keep orange connected to emphasis, route progress and visible focus.
- **Do** preserve the shared arc geometry, paper print margins and mobile reading order.
- **Do** provide pause controls and honor reduced-motion preferences.

### Don't:
- **Don't** turn the warm reading surfaces into a grid of raised containers.
- **Don't** replace SVG controls with text glyph icons.
- **Don't** add invented kickers above section headings.
- **Don't** introduce hard offset shadows into this diffuse photographic world.

Not canonized: no remaining craft-floor defect was reported after the final heading/metadata placement correction. No UI was repaired during this documentation pass.
