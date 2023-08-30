function ListRendering() {
  const names = ["a", "b"]
  return (
    <div>
      <h1>List Rendering</h1>
      {names.map((eachName, i) => {
        return <h1 key={i}>{eachName}</h1>
      })}
    </div>
  )
}

export default ListRendering
