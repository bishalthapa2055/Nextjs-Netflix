/*
This is an example snippet - you should consider tailoring it
to your service.
*/

async function fetchGraphQL(operationsDoc, operationName, variables) {
    const result = await fetch(
      process.env.NEXT_PUBLIC_HASURA_API_URL,
      {
        method: "POST",
        headers:{
            'content-type':"application/json",
            'Authorization':"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImJpc2hhbCIsImlhdCI6MTcwNDAxNzUyOCwiZXhwIjoxNzA0NjIyMzc4LCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsiYWRtaW4iLCJ1c2VyIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS11c2VyLWlkIjoiYmlzaGFsIn19.GRMjgl2Tri-VCmR-QTzcYAokfJ-Lu13oykcBbcOw6BM",
            // 'x-hasura-admin-secret' :process.env.NEXT_PUBLIC_API_HASURA_KEY 
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
        id ,
        issuer ,
        email
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
  
