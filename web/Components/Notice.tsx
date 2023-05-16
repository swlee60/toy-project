import { useAirport } from '@airport/react'
import { createLS } from '../utils/airport'
import { useState } from 'react'
import { useRouter } from 'next/router'

const LLS = createLS({
  notice: {
    ko: '네이버 예약 서비스안내입니다.',
    en: '',
    ja: '',
  },
  close: {
    ko: '닫기',
    en: '',
    ja: '',
  },
  closeOneDay: {
    ko: '하루동안 열지 않음',
    en: '',
    ja: '',
  },
  registerNewBooking: {
    ko: '새로운 예약 등록하기',
    en: '',
    ja: '',
  },
  sortingProducts: {
    ko: '상품 정렬하기',
    en: '',
    ja: '',
  },
  title: {
    ko: '네이버 예약',
    en: '',
    ja: '',
  },
})

export default function Notice() {
  const { t } = useAirport()
  const [isNoticeShown, setIsNoticeShown] = useState(true)
  const router = useRouter()

  if (!isNoticeShown) return null

  return (
    isNoticeShown && (
      <div>
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">{t(LLS.title)}</h1>
            <p className="lead text-muted">{t(LLS.notice)}</p>
            <p>
              <a href="#" className="btn btn-primary my-2">
                {t(LLS.closeOneDay)}
              </a>
              &nbsp;
              <a
                href="#"
                className="btn btn-secondary my-2"
                onClick={() => {
                  setIsNoticeShown(false)
                }}>
                {t(LLS.close)}
              </a>
              &nbsp;
              <a
                href="#"
                className="btn btn-primary my-2"
                onClick={() => {
                  router.push('/create')
                }}>
                {t(LLS.registerNewBooking)}
              </a>
              &nbsp;
              <a
                href="#"
                className="btn btn-secondary my-2"
                onClick={() => {
                  router.push('/sort')
                }}>
                {t(LLS.sortingProducts)}
              </a>
            </p>
          </div>
        </section>
      </div>
    )
  )
}
