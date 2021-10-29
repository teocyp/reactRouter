import { useLocation } from 'react-router'

export default function Contact() {
  const queryString = useLocation().search

  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get('name')

  return (
    <div>
      <h2>Hey {name}, Contact us here...</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste deserunt
        harum illo beatae officia necessitatibus eum! Dignissimos id repellat
        exercitationem beatae perferendis iste expedita labore pariatur? Cumque
        rerum excepturi reprehenderit.
      </p>
    </div>
  )
}
