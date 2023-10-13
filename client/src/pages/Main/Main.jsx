const Main = (props)=>{
  return(
    <button onClick={()=>{
      props.setRequirementsModal(!props.requirementsModal)
    }}>요구사항 명세서</button>
  )
}
export default Main