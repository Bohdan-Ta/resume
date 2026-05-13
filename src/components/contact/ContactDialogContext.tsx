import type { ReactNode } from 'react'
import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { ContactDialog } from './ContactDialog'

type ContactDialogContextValue = {
  openContact: () => void
}

const ContactDialogContext = createContext<ContactDialogContextValue | null>(null)

export const ContactDialogProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false)

  const openContact = useCallback(() => setOpen(true), [])
  const closeContact = useCallback(() => setOpen(false), [])

  const value = useMemo(() => ({ openContact }), [openContact])

  return (
    <ContactDialogContext.Provider value={value}>
      {children}
      <ContactDialog open={open} onClose={closeContact} />
    </ContactDialogContext.Provider>
  )
}

export const useContactDialog = () => {
  const ctx = useContext(ContactDialogContext)
  if (!ctx) throw new Error('useContactDialog must be used inside ContactDialogProvider')
  return ctx
}
