# Logo Setup Instructions

## Light Logo for Dark Backgrounds

The Header component now supports adaptive logos:
- **Light logo** (`campana-logo-light.png`) - displays over dark backgrounds (hero sections)
- **Regular logo** (`campana-logo.png`) - displays over light backgrounds (scrolled header)

### To Complete Setup:

1. Save the light/white version of the Campana Ranch logo as:
   ```
   public/campana-logo-light.png
   ```

2. The logo should be:
   - White or light-colored version of the vine/tree logo
   - Same dimensions as the regular logo (approximately 280x130px)
   - PNG format with transparent background
   - High resolution for retina displays

### How It Works:

The Header component automatically switches between logos based on:
- **Dark background** (hero section, not scrolled): Shows light logo
- **Light background** (scrolled, or non-hero pages): Shows regular dark logo
- Smooth opacity transitions between the two versions

### Current Behavior:

- On homepage hero: Light logo visible
- After scrolling: Regular dark logo visible
- On other pages: Regular dark logo visible
- Smooth fade transition when switching
