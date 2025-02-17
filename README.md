# React UseEffect and setInterval Memory Leak

This repository demonstrates a common mistake when using the `useEffect` hook in React with `setInterval`.  Improper cleanup within the `useEffect` hook can lead to memory leaks by creating multiple intervals that are not properly cleared.

The `bug.js` file contains the flawed implementation, while `bugSolution.js` provides the corrected version.