🧪 Test Plan 

Project Overview:
A comprehensive quality assurance cycle was performed to ensure the reliability, security, and responsiveness of the "Stocksy" business card website.

1. Test Environments:
Desktop: ASUS TUF Gaming F15
OS: Windows 10 Pro (22H2)
Browsers: Google Chrome, Microsoft Edge
Monitor: 144Hz Refresh Rate (Performance check)
Mobile: Samsung Galaxy M34
OS: Android 16 (One UI 8.0)
Browser: Chrome Mobile

2. Testing Scope:
Functional Testing: Validation of name input (2-25 chars) and contact selection logic.
UI/UX Testing: Adaptive layout verification for mobile and smoothness on high-refresh-rate displays.
Security Testing: Input sanitization to prevent XSS (Cross-Site Scripting).
Regression Testing: Verification of the fixed duplicate ID (#user-name) bug.

✅ Checklists

1. UI & Layout
[x] Visuals: Avatar image loads and has a smooth hover effect.
[x] Responsiveness: No horizontal scroll on Samsung M34 (380px viewport).
[x] Typography: All fonts and FontAwesome icons are rendered correctly.
[x] Alignment: Cards and forms are centered and visually balanced.

2. Functional & Logic
[x] Validation: Input field blocks more than 25 characters.
[x] Alerts: Warning message appears if name is less than 2 characters.
[x] Dropdown: Contact menu opens only after "Contact" button is clicked with a valid name.
[x] Navigation: All external links (Instagram, Telegram, etc.) work correctly.

3. Security & Quality
[x] XSS Protection: HTML tags in name input are sanitized (rendered as text).
[x] Code Integrity: No duplicate IDs (#user-name) in the DOM.
[x] Console: No JavaScript errors in the browser console during interaction.

### 🏃 Test Execution Results (Test Run)
Execution Summary:
During the initial testing phase, one UI/Logic issue was identified regarding DOM integrity. After the fix was implemented, a full Regression Suite was executed. All 11 tests have now passed.

| ID | Title | Test Environment | Steps | Expected Result | Status |
|:---|:---|:---|:---|:---|:---:|
| **01** | **Avatar & Hover** | Desktop / Mobile | Hover over avatar image | Image loads; smooth glow effect appears | ✅ Pass |
| **02** | **Responsiveness** | Samsung M34 | Open in Chrome Mobile | No horizontal scroll (380px viewport) | ✅ Pass |
| **03** | **Typography & Icons** | Desktop / Mobile | Inspect fonts & icons | Inter fonts and FontAwesome render correctly | ✅ Pass |
| **04** | **Alignment** | Desktop / Mobile | Check layout centering | Cards and forms are visually balanced | ✅ Pass |
| **05** | **Input Validation** | Desktop / Mobile | Input > 25 characters | Input field blocks extra characters | ✅ Pass |
| **06** | **Alerts Logic** | Desktop / Mobile | Input "A" (1 char) | Warning "min 2 characters" appears | ✅ Pass |
| **07** | **Dropdown Logic** | Desktop / Mobile | Click "Contact" button | Menu opens ONLY after valid name input | ✅ Pass |
| **08** | **Navigation Links** | Desktop / Mobile | Click all external links | Instagram, Telegram, etc. work correctly | ✅ Pass |
| **09** | **XSS Protection** | Desktop / Mobile | Input `<script>` tags | HTML is sanitized and rendered as text | ✅ Pass |
| **10** | **Code Integrity** | Desktop (DevTools) | Search for ID duplicates | No duplicate `#user-name` IDs in DOM | ✅ Pass |
| **11** | **Console Check** | Desktop (F12) | Interact with all forms | No JavaScript errors in the browser console | ✅ Pass |

**Final Summary:**
* **Total Tests:** 11
* **Passed:** 11 
* **Retested:** 1 ([BUG-01])
* **Execution Date:** March 17, 2026

**QA Note:** During the initial execution, a UI/Logic issue was identified (redundant input field). After the fix was implemented, a verification run was performed for Test Case ID-10. All 11 test cases have now successfully passed.
