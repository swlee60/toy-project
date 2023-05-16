import { useRecoilValue } from 'recoil'
import { categoriesAtom } from '../recoil'
import SortableCategories from './SortableCategories'
import { useQuery, gql } from '@apollo/client'

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
    }
  }
`

const GET_VEHICLE = gql`
  query GetVehicle($input: VehicleInput) {
    getVehicle(input: $input) {
      id
      name
      description
    }
  }
`

const GET_BOOKING_OPTION = gql`
  query GetBookingOption($input: BookingOptionInput) {
    getBookingOption(input: $input) {
      id
      name
      description
    }
  }
`

export default function ProductList({}) {
  const { data } = useQuery(GET_BOOKING_OPTION, { variables: { input: { optionId: '1' } } })
  const { getBookingOption } = data || {}
  const { id, name, description } = getBookingOption || {}

  console.info('id', id)
  console.info('name', name)
  console.info('description', description)
  const categories = useRecoilValue(categoriesAtom)
  const sortableCategories = categories.map(category => {
    return {
      categoryId: category.id,
      name: category.name,
      childs: category.products.map(product => {
        return {
          childId: product.id,
          name: product.name,
        }
      }),
    }
  })

  return (
    <>
      <SortableCategories sortableCategories={sortableCategories} />
    </>
  )
}
