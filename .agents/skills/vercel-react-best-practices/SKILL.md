---
name: vercel-react-best-practices
description: Core React performance rules and rendering best practices.
---

# Vercel React Best Practices

You must write highly optimized, production-ready React code.

1. **rendering-conditional-render:** Always use strict ternaries (`condition ? <True /> : <False />` or `null`) instead of the logical AND `&&` operator to prevent layout thrash and accidental `0` renders.
2. **rendering-hoist-jsx:** Hoist static JSX and pure components outside of the main render loop to prevent unnecessary inline-component recreation during parent re-renders.
3. **rerender-memo:** Wrap heavy data filtering, mapping, or complex derivations inside `useMemo` hooks so they don't block the main thread on every state update.
4. **Performance:** Avoid async waterfalls where possible. Keep the component tree shallow.
