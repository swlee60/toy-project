import { useRecoilValue } from 'recoil'
import { categoriesAtom } from '../recoil'

export interface GeneralCategory {
  categoryId: number
  name: string
  childs: GeneralChild[]
}

export interface GeneralChild {
  childId: number
  name: string
}

interface Props {
  sortableCategories: GeneralCategory[]
}

export default function SortableCategories({ sortableCategories }: Props) {
  if (!sortableCategories) return null

  return (
    <div className="row">
      {sortableCategories.map(category => {
        return (
          <>
            <div className="col-md-12">
              <h2>{category.name}</h2>
              {category.childs.map((child, index) => (
                <div key={index} className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                      <p className="card-text">{child.name}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">
                            View
                          </button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">
                            Edit
                          </button>
                        </div>
                        <small className="text-muted">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )
      })}
    </div>
  )
}
