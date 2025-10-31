# Profile Page Versions

## Version 2 (profile-v2.html) - Current Testing Version
**Status**: Testing
**Date**: 2025-10-31

### Changes:
- Uses redirect flow instead of popup for consent (fixes GitHub Pages COOP issue)
- Extracts accessToken from redirectResponse after consent
- Handles consent redirect properly
- Should fix "Access token is empty" error

### Test URL:
https://sajeerassiz.github.io/TSC_ExpenseSheet/profile-v2.html

### How to Test:
1. Go to main directory: https://sajeerassiz.github.io/TSC_ExpenseSheet/
2. Sign in
3. Navigate directly to: https://sajeerassiz.github.io/TSC_ExpenseSheet/profile-v2.html
4. Accept consent when prompted
5. Profile should load!

---

## Version 1 (profile.html) - Stable/Fallback
**Status**: Has issues with consent popup
**Date**: 2025-10-31

### Known Issues:
- Popup consent blocked by GitHub Pages COOP policy
- Gets stuck on loading forever

---

## Promotion Process:
Once v2 is confirmed working:
```bash
cp profile-v2.html profile.html
git add profile.html
git commit -m "Promote profile-v2 to production"
git push
```
