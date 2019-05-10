# React Prevent Update

Demontrates that re-rendering can only be prevented by overriding componentShouldUpdate. I.e. returning
the previous state from getDerivedStateFromProps does not prevent re-rerending on prop change.

Case 1:
- enter 'foo' in the input
- update is prevented, resulting in neither new prop value of derived value from being re-rendered.

Case 2:
- enter 'bar' in the input
- derive state is prevented, resulting in new prop value being rendered but new state not  being calculated and re-rendered.

Conclusion: prop updates always result in re-rendering independent of state derivation. This is consistent with the
React documentation and what I would have expected.