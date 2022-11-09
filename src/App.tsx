interface ButtonProps {
  title: String
}


function Button(props: ButtonProps) {
  return (
    <>
      <button>{props.title}</button>
    </>
  )
}


function App() {
  return (
    <>
      <Button title='Botão 1' />
      <Button title='Botão 2' />
      <Button title='Botão 3' />
      <Button title='Hello World' />
    </>
  )
}

export default App
