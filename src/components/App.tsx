import React from 'react';
// normalize
import "normalize.css/normalize.css"
import styled from 'styled-components'

export type AppProps = {
  name: string
}

export const App = (props: AppProps) => (
  <Container>
    <Heading>
      React Starter Dev Env
    </Heading>
    <P>
      This is { props.name } Component.
    </P>
  </Container>
)

const Container = styled.div`
  padding: 20px;
`

const Heading = styled.h1`
  margin: 0;
`

const P = styled.p`
  font-size: 1.0rem;
`