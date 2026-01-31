'use client'

import { useTranslations } from 'next-intl'
import Trash from 'public/icons/trash.svg'
import { useRef } from 'react'

import S from './Upload.module.scss'

const Upload = ({
  onChange,
  value,
  title
}: {
  onChange: (v: File | null) => void
  value: File | null
  title?: string
}) => {
  const t = useTranslations('Form')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const uploadInputOpen = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleUpload = async () => {
    if (fileInputRef.current?.files === null || fileInputRef.current === null) {
      return
    } else {
      const file = fileInputRef.current.files[0]
      try {
        onChange(file)
      } catch (error) {
        console.error(error)
      }
    }
  }

  const deleteFile = () => {
    onChange(null)
  }

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleUpload}
      />
      <button
        className={S.wrap}
        onClick={e => {
          e.stopPropagation()
          e.preventDefault()
          uploadInputOpen()
        }}
      >
        <span>{value ? t('fileReady') : (title ?? t('file'))}</span>
        {value && (
          <button
            onClick={e => {
              e.stopPropagation()
              deleteFile()
            }}
          >
            <Trash width={24} height={24} />
          </button>
        )}
      </button>
    </>
  )
}

export default Upload
