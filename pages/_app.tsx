import 'styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'
import { AirportProvider } from '@airport/react'
import { RecoilRoot } from 'recoil'
import BaseLayout from '@/web/Components/BaseLayout'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://toyproject.booking.naver.com:5001/api/graphql',
  cache: new InMemoryCache(),
})

const supportedLocales = ['en', 'ko', 'ja']

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AirportProvider supportedLocales={supportedLocales} locale="ko" fallbackLocale="ko">
        <RecoilRoot>
          <BaseLayout>
            <Component {...pageProps} />
          </BaseLayout>
        </RecoilRoot>
      </AirportProvider>
    </ApolloProvider>
  )
}
