import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: import.meta.env.VITE_PROJECT_ID,
  dataset: import.meta.env.VITE_DATASET_NAME,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-11-04', // use current date (YYYY-MM-DD) to target the latest API version
  token: import.meta.env.VITE_SANITY_TOKEN, // Only if you want to update content with the client
  ignoreBrowserTokenWarning: true,
})

// console.log(import.meta.env.VITE_SANITY_TOKEN);