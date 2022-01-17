import {useState} from 'react'
import Head from 'next/head'

export default function Home() {
  const [values, setValues] = useState({
    name: '',
    email: ''
  })

  const [loading, setLoading] = useState(false)

  function onChange(e) {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }

  async function onSubmit() {
    setLoading(true)
    const response = await fetch('api-url', {
      method: "POST",
      boody: JOSN.stringify(values)
    })
    setLoading(false)
  }

  console.log(values)

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading === true ? <div>
Loading....
      </div> : ""}

      <form onSubmit={onSubmit}>
        <input type="text" name="name" onChange={onChange}  />
        <input type="email" name="email" onChange={onChange}  />
        <button type='submit'>Submit</button>
      </form>
 

    </div>
  )
}
