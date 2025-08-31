## ⚡ Performance Profiling

We used the **React DevTools Profiler** to measure app performance.

### Interactions Tested

- Searching for a country
- Changing the year
- Changing sort order
- Adding/removing columns

### Results

- **Commit Duration:** ~8–15ms on average for most interactions
- **Render Duration:**
  - `CountryList` and children: ~5–10ms per commit
  - UI controls (`YearSelector`, `SearchInput`): negligible (<1ms)
- **Interactions:** Correctly tracked in Profiler (typing, select changes, etc.)
- **Flame Graph:** Showed re-renders mostly confined to updated components.
- **Ranked Chart:** `CountryCard` list took the most render time, but React.memo significantly reduced re-renders.

### Screenshots

![Profiler Flame Graph](assets/1.png)
![Profiler Ranked Chart](assets/2.png)

### Conclusion

The app performs efficiently even when searching, sorting, or changing years.  
React optimizations (`useMemo`, `useCallback`, `React.memo`) successfully reduced unnecessary re-renders.
