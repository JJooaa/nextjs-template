'use client'

import { contactFormSubmit } from '@/actions/contact-form-submit'
import { useFormState } from 'react-dom'

export function ContactForm() {
  const initialState = {
    message: null,
    errors: {},
  }

  // Ts-ignore here, because I am pretty sure it's bugged atm.
  // @ts-ignore
  const [state, dispatch] = useFormState(contactFormSubmit, initialState)

  return <form action={dispatch}></form>
}
