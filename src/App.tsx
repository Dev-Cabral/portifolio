import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Projetos from './components/projetos'
import SideBar from './containers/Sidebar'
import Sobre from './containers/sobre'
import EstiloGlobal, { Container } from './styles'
import temaLigth from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [estarUsandoTemaDark, setEstarUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstarUsandoTemaDark(!estarUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estarUsandoTemaDark ? temaDark : temaLigth}>
      <EstiloGlobal />
      <Container>
        <SideBar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
