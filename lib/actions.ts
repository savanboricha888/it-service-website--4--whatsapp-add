"use server"

// React 19 Server Action for contact form
export async function submitContactForm(formData: FormData) {
  // Simulate form processing delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const company = formData.get("company") as string
  const message = formData.get("message") as string

  // Here you would typically save to database or send email
  console.log("Contact form submission:", {
    firstName,
    lastName,
    email,
    company,
    message,
  })

  // Return success response
  return {
    success: true,
    message: `Thank you ${firstName}! We'll get back to you within 24 hours.`,
  }
}

// React 19 Server Action for newsletter signup
export async function subscribeNewsletter(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 500))

  const email = formData.get("email") as string

  console.log("Newsletter subscription:", { email })

  return {
    success: true,
    message: "Successfully subscribed to our newsletter!",
  }
}
