'use client'

import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState
} from 'react'

import BitDropModal from '@/app/[locale]/components/8BitDropModal'
import EgeModal from '@/app/[locale]/components/EgeModal'
import EveryPetModal from '@/app/[locale]/components/EveryPetModal'
import MerlinesModal from '@/app/[locale]/components/MerlinesModal'
import RuKingModal from '@/app/[locale]/components/RuKingModal'
import SimplanumModal from '@/app/[locale]/components/SimplanumModal'

type ProjectProviderContextType = {
  setIs8BitDropOpen: (value: boolean) => void
  setIsMerlinesOpen: (value: boolean) => void
  setIsEverypetOpen: (value: boolean) => void
  setIsRuKingOpen: (value: boolean) => void
  setIsEgeOpen: (value: boolean) => void
  setIsSimplaniumOpen: (value: boolean) => void
}

export const ProjectContext = createContext<
  ProjectProviderContextType | undefined
>(undefined)

export const ProjectsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [is8BitOpen, setIs8BitDropOpen] = useState(false)
  const [isMerlinesOpen, setIsMerlinesOpen] = useState(false)
  const [isEverypetInOpen, setIsEverypetOpen] = useState(false)
  const [isRuKingOpen, setIsRuKingOpen] = useState(false)
  const [isEgeOpen, setIsEgeOpen] = useState(false)
  const [isSimplaniumOpen, setIsSimplaniumOpen] = useState(false)

  return (
    <ProjectContext.Provider
      value={{
        setIs8BitDropOpen,
        setIsMerlinesOpen,
        setIsEverypetOpen,
        setIsRuKingOpen,
        setIsEgeOpen,
        setIsSimplaniumOpen
      }}
    >
      <BitDropModal
        isOpen={is8BitOpen}
        onOpen={() => setIs8BitDropOpen(false)}
      />
      <MerlinesModal
        isOpen={isMerlinesOpen}
        onOpen={() => setIsMerlinesOpen(false)}
      />
      <EveryPetModal
        isOpen={isEverypetInOpen}
        onOpen={() => setIsEverypetOpen(false)}
      />
      <RuKingModal
        isOpen={isRuKingOpen}
        onOpen={() => setIsRuKingOpen(false)}
      />
      <EgeModal isOpen={isEgeOpen} onOpen={() => setIsEgeOpen(false)} />
      <SimplanumModal
        isOpen={isSimplaniumOpen}
        onOpen={() => setIsSimplaniumOpen(false)}
      />

      {children}
    </ProjectContext.Provider>
  )
}

export const useProject = () => {
  const context = useContext(ProjectContext)
  if (!context) {
    throw new Error('auth not found')
  }
  return context
}
