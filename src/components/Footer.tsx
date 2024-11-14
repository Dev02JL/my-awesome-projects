import React from 'react'
import { HomeIcon } from '@heroicons/react/16/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { UserIcon } from '@heroicons/react/16/solid'

function Footer() {
  return (
    <div className="flex justify-center gap-40 p-4 pb-8 fixed z-30 bottom-0 left-0 w-full">
      <HomeIcon className="foot-button"/>
      <MagnifyingGlassIcon className="foot-button"/>
      <UserIcon className="foot-button"/>
    </div>
  )
}

export default Footer
