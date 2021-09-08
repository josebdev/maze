import React from 'react'
import { Maze } from 'components/Maze'
import { mazeFinal } from 'utils/level'
import Footer from 'components/Footer'
import { Layout } from 'theme/common/styles'
import Header from 'components/Header'

function App() {
  return (
    <Layout>
      <Header />
      <Maze list={mazeFinal} />
      <Footer />
    </Layout>
  )
}

export default App
