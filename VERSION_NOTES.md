# Profile Page Versions

## Version 5 (profile-v5.html) - Current Testing Version 🔥
**Status**: Testing - Enhanced Error Logging
**Date**: 2025-10-31

### NEW Features:
- ✅ Page loads successfully (v4 bug is fixed!)
- ✅ Enhanced error logging for photo upload
- ✅ Enhanced error logging for profile updates
- ✅ Shows EXACT error messages from Microsoft Graph API
- ✅ Logs request data being sent
- ✅ Logs response status and details
- ✅ Parses and displays error code and message

### Test URL:
https://sajeerassiz.github.io/TSC_ExpenseSheet/profile-v5.html

---

## Version 4 (profile-v4.html) - Previous Version
**Status**: Testing - Bug Fixed!
**Date**: 2025-10-31

### BUG FIX:
- ✅ **FIXED**: TypeError: console.log is not a function
- Problem: Variable name `console` shadowed global `console` object
- Solution: Renamed to `debugDiv` and use `window.console` explicitly
- Debug console now works properly!

### Features:
- VERSION 4 badge in navbar center
- Working debug console at bottom
- Extensive logging of authentication flow
- First message: "Profile page v4 loaded - Bug fixed!"

### Test URL:
https://sajeerassiz.github.io/TSC_ExpenseSheet/profile-v4.html

### How to Test:
1. Clear browser cache (Ctrl+Shift+Delete)
2. Go to: https://sajeerassiz.github.io/TSC_ExpenseSheet/
3. Sign in
4. Click "My Profile" → Goes to v4 automatically
5. Look for "VERSION 4" badge in navbar center
6. Check debug console at bottom - should show messages!

---

## Version 3 (profile-v3.html) - Previous Version
**Status**: Testing with Debug Console
**Date**: 2025-10-31

### NEW Features:
- **Visible VERSION 3 badge** in top-right corner (red badge)
- **Live debug console** at bottom of page showing real-time authentication flow
- **Extensive logging**: Every step of token acquisition and API calls
- **Color-coded messages**:
  - 🟢 Green = Success
  - 🔴 Red = Error
  - 🔵 Blue = Info
- Shows token presence, length, and first 20 characters
- Shows exact Graph API response status
- Shows all error messages clearly

### How to Test:
1. Go to: https://sajeerassiz.github.io/TSC_ExpenseSheet/profile-v3.html
2. **Look for "VERSION 3" badge** in top-right (confirms you're on v3!)
3. **Check debug console** at bottom of page
4. Watch the debug messages as you go through auth flow
5. **Take screenshot** of debug console if issues occur

### Debug Console Will Show:
- "Profile page v3 loaded" when page starts
- "Redirect response: YES/NO" after consent
- "Token present: YES/NO" and token length
- "Access token: SET" or "NULL/UNDEFINED"
- Graph API response status
- Any error messages with details

---

## Version 2 (profile-v2.html) - Previous Version
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
