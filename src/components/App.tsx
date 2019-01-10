import React from 'react';
// normalize
import "normalize.css/normalize.css"
import styled from 'styled-components'

export type AppProps = {
  name: string
}

export const App = (props: AppProps) => (
  <P>
    This is { props.name } Component.
  </P>
)

const P = styled.p`
  font-size: 1.0rem;
  padding: 20px;
`