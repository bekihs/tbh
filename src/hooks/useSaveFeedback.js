import { useState } from "react";

export function useSaveFeedback() {
  const [isLoading, setIsLoading] = useState(false)
  const [returnData, setReturnData] = useState(null)
  const [error, setError] = useState(null)
  const saveFeedback =(data) => {
    setIsLoading(true)
    fetch(process.env.REACT_APP_API_URL + "/sessions/save", {
      method: "post",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( data )
    }).then(async (response) => {
      let result = await response.json();
      // console.log(data);
      setIsLoading(false)
      setReturnData(result)
      console.log(result);
    }).catch(err=>{
      setIsLoading(false)
      setError(err)
    });
  };

  return [isLoading, returnData, saveFeedback];
}