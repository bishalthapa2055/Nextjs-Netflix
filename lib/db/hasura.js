/*
This is an example snippet - you should consider tailoring it
to your service.
*/

async function fetchGraphQL(operationsDoc, operationName, variables) {
    const result = await fetch(
      "https://native-glowworm-25.hasura.app/v1/graphql",
      {
        method: "POST",
        headers:{
            'content-type':"application/json",
            'x-hasura-admin-secret' :"Ncn6NN5NUeDV7mpTH0jUDDLPtgX5JyAVWKrP1epnbF3Tt7KiH6RhVVTtvgyYCw6r"
        },
        body: JSON.stringify({
          query: operationsDoc,
          variables: variables,
          operationName: operationName
        })
      }
    );
  
    return await result.json();
  }
  
  const operationsDoc = `
    query MyQueryCopy {
      users(limit: 10) {
        id
      }
    }
  `;
  
  function fetchMyQueryCopy() {
    return fetchGraphQL(
      operationsDoc,
      "MyQueryCopy",
      {}
    );
  }
  
 export  async function startFetchMyQueryCopy() {
    const { errors, data } = await fetchMyQueryCopy();
  
    if (errors) {
      // handle those errors like a pro
      console.error(errors);
    }
  
    // do something great with this precious data
    console.log(data);
  }
  
