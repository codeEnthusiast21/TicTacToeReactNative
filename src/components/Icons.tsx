import React from 'react'
import type { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'


type IconsProps = PropsWithChildren<{
    name:string,


}>
const Icons = ({name }) => {
  return (
    <div>Icons</div>
  )
}

export default Icons