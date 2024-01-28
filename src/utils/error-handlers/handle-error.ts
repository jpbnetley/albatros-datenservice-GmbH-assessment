/**
 * handles errors thrown from functions
 * @param execute function that should get executed
 * @returns 
 */
const handleError = <Response>(execute: () => Response) => 
  () => {
    try {
      return execute()
    } catch(error) {
      console.error(error)
    }
  }

export default handleError