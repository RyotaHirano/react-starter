import React from 'react';
// normalize
import "normalize.css/normalize.css"

export type AppProps = {
  name: string
}

export const App = (props: AppProps) => (
  <p>
    This is { props.name } Component.
  </p>
)