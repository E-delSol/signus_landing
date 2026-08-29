# Proposal: Reorder App Gallery & Optimize Images

## Intent
Update the "Recorrido de la App" gallery in `index.html` to show 8 app screenshots in a new
pairing order, and convert 3 newly added PNG dialog screenshots to WebP (deleting the PNG originals).

## Scope
- **In scope**
  - `index.html` gallery section (lines ~142-164): rewrite the 8 `ghost-frame` cards in new order.
  - `src/assets/images/`: convert `qr_code_dialog.png`, `timer_picker_dialog.png`,
    `unlink_confirm_dialog.png` to `.webp`; delete the PNG originals.
- **Out of scope**
  - Other landing sections (hero, "Cómo funciona", privacidad, CTA) remain unchanged.
  - `screen-*`, `hero-phone`, `gallery-settings` are reused from existing assets.

## Approach
- Convert PNG → WebP via ImageMagick: `magick in.png -quality 85 -define webp:auto-filter=true out.webp`.
- Delete the 3 PNG originals after conversion (verified smaller output).
- Rewrite the 8 gallery `ghost-frame` blocks preserving `class="w-full h-full object-cover"`
  and Spanish `alt` text, in the target order below.
- Verify with `npm run build`.

## Target order (left→right, top→bottom)
1. `hero-phone.webp` / `screen-pairing.webp`
2. `qr_code_dialog.webp` / `screen-partner.webp`
3. `screen-available.webp` / `gallery-settings.webp`
4. `timer_picker_dialog.webp` / `unlink_confirm_dialog.webp`

## Risks
- `gallery-welcome.webp`, `gallery-busy.webp`, `gallery-pairing.webp` become unreferenced
  (orphans) after the reorder — leave in place unless user asks to delete.
- New dialog PNGs are 1080×2280; existing `screen-*` are 243×512; frame is 280×580.
  All share the phone aspect ratio, so `object-cover` crops negligibly.

## Success Criteria
- `npm run build` passes and references resolve.
- Gallery renders 8 images in the specified order with no broken references.
- PNG originals removed; only `.webp` remain for the 3 new screenshots.
