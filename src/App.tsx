import React from 'react'

import Footer from 'components/Footer'
import { Layout } from 'theme/common/styles'
import Header from 'components/Header'
import Main from 'components/Main'

function App() {
  return (
    <Layout>
      <Header />
      <Main />
      <Footer />
    </Layout>
  )
}

export default App
