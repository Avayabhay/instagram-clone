import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

export default function Modal() {
  const [open, setOpen] = useRecoilState(modalState)

  return <div>{open && <p>The Modal is open</p>}</div>
}
