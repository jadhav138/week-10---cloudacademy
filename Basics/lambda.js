exports.handler = async (event) => {
    console.log('received event:', JSON.stringify(event,null, 2));

    const response = {
        statusCode:200,
        body:JSON.stringify('hello from lambda!'),
    };
    return response;
};