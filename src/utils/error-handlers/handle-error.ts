/**
 * handles errors thrown from functions
 * @param execute function that should get executed
 * @returns 
 */
const handleError = <A>(execute: () => A) => 
  () => {
    try {
      return execute()
    } catch(error) {
      console.error(error)
    }
  }

export default handleError