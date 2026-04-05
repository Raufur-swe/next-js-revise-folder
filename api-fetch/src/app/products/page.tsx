type Props = {
  searchParams: {
    category?: string
    price?: string
  }
}

export default  function Page({ searchParams }: Props) {
   
   return (
    <div>
      Category: {searchParams.category}
      Price: {searchParams.price}
    </div>
  )
}