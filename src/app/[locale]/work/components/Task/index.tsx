'use client'

import classNames from 'classnames'
import { motion } from 'framer-motion'
import { useState } from 'react'

import S from './Task.module.scss'

type TaskType = {
  title: string
  value: string
}

const Task = ({ task }: { task: TaskType }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={S.task}>
      <div className={S.taskLabel} onClick={() => setIsOpen(!isOpen)}>
        <span className={S.label}>{task.title}</span>
        <button className={classNames(S.btn)}>{isOpen ? '-' : '+'}</button>
      </div>
      <motion.div
        initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
        animate={{
          opacity: 1,
          height: isOpen ? 'auto' : 0,
          marginBottom: isOpen ? '24px' : 0
        }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.2 }}
        style={{ overflow: 'hidden' }}
      >
        <span
          className={S.desc}
          dangerouslySetInnerHTML={{ __html: task.value }}
        ></span>
      </motion.div>
    </div>
  )
}

export default Task
