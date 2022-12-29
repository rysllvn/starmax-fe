import { AddressType } from '../../utilities/types'

type Props = {
  addresses: AddressType[]
}
export default function Addresses({ addresses }: Props) {
  return (
    <h2>Saved Shipping Addresses</h2>
  )
}
