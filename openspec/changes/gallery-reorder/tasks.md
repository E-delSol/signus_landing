# Tasks: Reorder App Gallery & Optimize Images

## Batch 1 — Optimize images
- [x] T1.1 Convert `qr_code_dialog.png` → `qr_code_dialog.webp` (magick, q85, auto-filter) — 39.5KB
- [x] T1.2 Convert `timer_picker_dialog.png` → `timer_picker_dialog.webp` — 35.3KB
- [x] T1.3 Convert `unlink_confirm_dialog.png` → `unlink_confirm_dialog.webp` — 47.2KB
- [x] T1.4 Delete the 3 original `.png` files (verified removed)

## Batch 2 — Reorder gallery
- [x] T2.1 Rewrite gallery section in `index.html` (~lines 142-164) with 8 `ghost-frame`
      blocks in the target order from the proposal
- [x] T2.2 Preserve `class="w-full h-full object-cover"` and set Spanish `alt` text per image

## Batch 3 — Verify
- [x] T3.1 `npm run build` passes; all 8 webp bundled, no broken references

