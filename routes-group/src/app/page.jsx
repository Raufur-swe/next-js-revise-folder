import { resolve } from "styled-jsx/css";

export default async function page() {
  await new Promise(( resolve)=>setTimeout(resolve,3000))
  return(
    <>
    <h1>Home-page</h1>
    </>
  )
}
