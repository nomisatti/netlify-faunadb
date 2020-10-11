const faunadb = require('faunadb')
const faunadbQuery = faunadb.query;

exports.handler = async (event, context) => {
  try {

    if(event.httpMethod !== "POST") {
      return { statuscode: 405 , body:"Method Not Allowed"}
    }

    let reqObj = JSON.parse(event.body)
  
    console.log("reqObj " ,reqObj)
    var client = new faunadb.Client({secret : 'fnAD3sxQ67ACBxmxdEmCjtl68gzqV8yH7Sa-rnC2'})
    var result = await client.query(
      faunadbQuery.Create(
        faunadbQuery.Collection('posts'),
        {data : {title: reqObj}}
      )
    )


    console.log("Entry Created and Inserted in Container: " + result.ref.id);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `${result.data.title}`}),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
