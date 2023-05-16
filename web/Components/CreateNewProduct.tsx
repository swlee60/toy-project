import { useAirport } from '@airport/react'
import { createLS } from '../utils/airport'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { categoriesAtom } from '../recoil'

const LLS = createLS({
  createNewProduct: {
    en: 'Create New Product',
    ko: '새로운 상품 등록하기',
    ja: '新しい予約商品を登録する',
  },
  name: {
    en: 'Name',
    ko: '이름',
    ja: '名前',
  },
  selectCategory: {
    en: 'Select Category',
    ko: '카테고리 선택',
    ja: 'カテゴリーを選択してください',
  },
  pleaseInsertKoreanName: {
    en: 'Please insert Korean name',
    ko: '한글 이름을 입력해주세요',
    ja: '韓国語の名前を入力してください',
  },
})

export default function CreateNewProduct({}) {
  const { t } = useAirport()
  const [categoryId, setCategoryId] = useState(0)
  const categories = useRecoilValue(categoriesAtom)

  const checkIsValidKoreanName = (name: string) => {
    const regex = /^[가-힣]+$/
    return regex.test(name)
  }

  const checkIsValidJapaneseMobilePhoneNumber = (mobileNumber: string) => {
    const regex = /^0[789]0-?\d{4}-?\d{4}$/
    return regex.test(mobileNumber)
  }

  const checkIsValidJapaneseMobilePhoneNumberWithoutDash = (mobileNumber: string) => {
    const regex = /^0[789]0\d{4}\d{4}$/
    return regex.test(mobileNumber)
  }

  const [isValidKoreanName, setIsValidKoreanName] = useState(false)
  const [name, setName] = useState('')

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>{t(LLS.createNewProduct)}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form>
              <div className="form-group">
                <label htmlFor="category">{t(LLS.selectCategory)}</label>
                <select
                  className="form-control"
                  id="category"
                  value={categoryId}
                  onChange={e => {
                    console.log(e.target.value)
                    setCategoryId(parseInt(e.target.value))
                  }}>
                  {categories.map(category => {
                    return <option key={category.id}>{category.name}</option>
                  })}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="name">{t(LLS.name)}</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder={t(LLS.pleaseInsertKoreanName)}
                  onChange={e => {
                    setName(e.target.value)
                  }}
                />
              </div>
              {!isValidKoreanName && (
                <div className="alert alert-danger" role="alert">
                  {t(LLS.pleaseInsertKoreanName)}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
