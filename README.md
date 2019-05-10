# React Prevent Update

Demontrates that re-rendering can only be prevented by overriding componentShouldUpdate. I.e. returning
the previous state from getDerivedStateFromProps does not prevent re-rerending on prop change.
