1) They’re simple ways to store data for individual users against a unique session ID. This can be used to persist state information between page requests.
 
2) It uses a modified key setup algorithm which is usually time sensitive and makes a password more secure against brute force attacks, since the attacker now needs a lot more time to test each possible key
 
3) You cannot decrypt a hash stored by bcrypt because of the secret only known by the owner of the server.
 
4) Header, payload, and signature
