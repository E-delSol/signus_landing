# Proposal: Fix redundant hero CTA

## Intent
Resolve the redundancy where both hero CTAs — "Conocer Signus" and "Cómo funciona" — pointed
to the same anchor (`#como-funciona`). Repoint "Conocer Signus" to the "Qué es" overview
section (`#que-es`) so each CTA has a distinct, semantically correct destination.

## Scope
- **In scope**
  - `index.html` hero section (line 64): change the `href` of the "Conocer Signus" anchor.
- **Out of scope**
  - "Cómo funciona" button, nav links, gallery, and other sections remain unchanged.
  - No asset or image changes.

## Approach
Single attribute change: `href="#como-funciona"` → `href="#que-es"` on the "Conocer Signus" anchor.
The "Cómo funciona" anchor keeps `#como-funciona`.

## Target destinations
- `Conocer Signus` → `#que-es` (section "Qué es Signus", line 76)
- `Cómo funciona` → `#como-funciona` (unchanged)

## Risks
- **Low.** Anchor `#que-es` already exists and is the intended overview. No asset changes, no
  layout impact.

## Success Criteria
- Both hero CTAs resolve to distinct sections.
- `npm run build` passes with no broken anchors.
