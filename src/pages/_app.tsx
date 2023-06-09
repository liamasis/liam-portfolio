import Layout from '../../components/layouts/main'
import Fonts from '../../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../../components/chakra'
import { ComponentType } from 'react';
import { NextRouter } from 'next/router';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

interface Props {
  Component: ComponentType;
  pageProps: any;
  router: NextRouter;
}

const Website: React.FC<Props> = ({ Component, pageProps, router }) => {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  )
}

export default Website