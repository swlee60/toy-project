import { createLS } from '../utils/airport'
import Notice from './Notice'
import Header from './Header'

const LLS = createLS({
  title: {
    en: '',
    ko: '네이버 예약',
    ja: '',
  },
})

interface Props {
  children: React.ReactNode
}

export default function BaseLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main role="main">
        <Notice />
        <div className="album py-5 bg-light">
          <div className="container">{children}</div>
        </div>
      </main>
    </>
  )
}
