# Proposal: Annotate "Cómo funciona" screenshots

## Intent
Clarify what each element means on the partner-status screenshots in the "Cómo funciona" section:
the traffic-light **disc** shows your PARTNER's status, the **button** shows YOUR status, and the
displayed **name** is the linked person.

## Background
The two cards in the "Cómo funciona" section show screenshots (`screen-available.webp`,
`screen-partner.webp`) with captions about states (Ocupado / Disponible). The user found it
potentially confusing that it is unclear which element is whose. The foot captions are considered
correct and must stay unchanged.

## Approaches considered
- **A — Hand-drawn SVG arrow annotations**: overlay SVG with a `feTurbulence` filter for a pencil
  look; arrows point from outside-text labels to disc/button/name on the photo. Requires exact
  element coordinates.
- **B — Color-dot legend**: a position-independent legend (colored dots matching the UI) explaining
  disc/button/name. Robust, no pixel accuracy needed.

## What happened (lesson)
Approach A was attempted inline. Coordinates were GUESSED because the orchestrator could not view the
screenshot. The result was rejected by the user as broken ("chapuza") and reverted (working tree
clean). **Rule learned: never code pixel-positioned overlay annotations without knowing element
positions — obtain the layout first or use a position-independent approach.**

## Open decision (pending user, next session)
- **A**: user provides the real screenshot layout (where name / disc / button sit) → arrows placed precisely.
- **B**: switch to position-independent color-dot legend.
- Drop the idea entirely.

## Scope
- **In**: "Cómo funciona" section cards (index.html, ~lines 111-126).
- **Out**: gallery, hero, other sections. Images themselves untouched — they are reused in the
  gallery ("Recorrido de la App"), so annotations MUST be HTML/SVG overlay only, never baked into the `.webp`.

## Risks
- Approach A is fragile without layout knowledge.
- Shared screenshots with the gallery; annotations must remain overlay-only.

## Success Criteria
- Visitors clearly understand disc = partner / button = you / name = linked person.
- No guessed positioning; verified visually with the user before commit.
