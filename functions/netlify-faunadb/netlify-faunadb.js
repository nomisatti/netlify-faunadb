const faunadb = require('faunadb')
const faunadbQuery = faunadb.query;
const dotenv = require('dotenv')
dotenv.config();


exports.handler = async (event, context) => {
  try {

    const client = new faunadb.Client({secret : 'fnAD3sxQ67ACBxmxdEmCjtl68gzqV8yH7Sa-rnC2'})

    var result = await client.query(
      faunadbQuery.Get(
        faunadbQuery.Ref(
          faunadbQuery.Collection('posts') ,"278940534887678471"
        )
      )
    )
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `${result.data.title}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
