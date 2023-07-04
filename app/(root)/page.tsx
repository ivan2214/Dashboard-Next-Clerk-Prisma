'use client'

import { useStoreModal } from '@/hooks/use-store-modal'
import { useEffect } from 'react'

const SetupPage = () => {
  const { isOpen, onClose, onOpen } = useStoreModal()

  useEffect(() => {
    if (!isOpen) onOpen()
  }, [isOpen, onOpen])

  return <div className='p-4'>root page</div>
}

export default SetupPage
