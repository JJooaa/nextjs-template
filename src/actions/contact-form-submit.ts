import { z } from 'zod'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

const schema = z.object({
  id: z.string(),
})

export type State = {
  errors?: {
    id: string[]
  }
  message?: string | null
}
// Omit from schema if necessary
// const data = invoiceSchema.omit({ id: true });

export async function contactFormSubmit(prevState: State, formData: FormData) {
  const validatedFields = schema.safeParse({
    id: formData.get('id'),
  })

  // If form validation fails, return errors early.
  if (!validatedFields.success) {
    return {
      message: 'missing fields',
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // Prepare data for insertion into the database
  const { id } = validatedFields.data

  // Do something with the data
  try {
    console.log(id)
  } catch (e) {
    console.error(e)
    throw new Error('')
  }

  revalidatePath('/')
  redirect('/')
}
