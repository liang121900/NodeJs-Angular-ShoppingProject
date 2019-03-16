//var salt ='IhateCat&Olive';
var jwt  = require('jsonwebtoken'); // used to create, sign, and verify tokens
var RESTAPI=require('../config/rest-api-constant');
let authPath=require('./auth-path');
const {OAuth2Client} = require('google-auth-library');
//client_id is got by creating a google api console project, it is the same as the audience in the payload
//https://developers.google.com/identity/sign-in/web/sign-in#before_you_begin
//https://developers.google.com/identity/sign-in/android/backend-auth
let CLIENT_ID="1071341576975-ujfbf1r6oibn6v2c58falqgh1ic0fejl.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);


module.exports = function(endPoint) {
	//use - means it is working as filter
	endPoint.use(function(req, res, next) {
		   ////[{"key":"user-access-token","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hZ2VuZHJhLnN5bmVnaXN0aWNpdEBnbWFpbC5jb20iLCJwYXNzd29yZCI6ImppbGwiLCJpYXQiOjE1MjY2ODUyNjcsImV4cCI6MTUyNjc3MTY2N30.bTAs6s5J3opxnLw5r5NK_Af_FcKcKav_Cm3yvqZ709I","description":""}]
					//Reading token from incoming request header!

			//only path in white list, do not check authentication
			if(!authPath.paths.includes(req.path)){
				next();
				return;
				}
			var token = req.headers['user-access-token'];
		  // decode token
		  if (token) {
				    // verifies secret and checks exp
				      jwt.verify(token, RESTAPI.TOKEN_SALT, function(err, decoded) {

								//if fail, check if token can be verified by the google authenticator
						      if (err) {
										console.log('cannot verify the token in JWT');
										googleVerify(req,res,next);

						         
						      } else {
										console.log('token is validated');
						        // if everything is good, save to request for use in other routes
						        req.decoded = decoded;  
						        //chain.doFilter();
						        next();  //go ahead and access your resource 
				   			}
		    		});
		  } else {
			  return res.json({ status: 'failed', message: 'No token Found in the header!' });
		  }
		});
};




async function googleVerify(req,res,next) {
	var token = req.headers['user-access-token'];
	console.log('trying to verify the token through google authenticator');
	//The verifyIdToken function verifies the JWT signature, the aud claim, the exp claim, and the iss claim.
  const ticket = await client.verifyIdToken({
      idToken: token,
			audience: CLIENT_ID
  }).then(ticket=>{
		console.log(ticket.getPayload());
		next();
	}).catch(err=>{
		console.log('fail to authenticate google token')
		return res.json({ status: 'false', message: 'Failed to authenticate token.'});
	})
}