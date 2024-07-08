export const ApiBase = "https://arabhardware.com/api/v1"
export const callBack = ["https://arabhardware.net/auth/arabhardware/callback", "https://arabhardware.com/auth/arabhardware/callback"]
export const SetOpenCart = "https://stg.ahw.store/index.php?route=account/callback&token="

export const cookieDommains = [
	{title: "token", domain: "localhost", bearer: true},
	{title: "token", domain: "user-profile-lyart.vercel.app", bearer: true},
	{title: "jwt_token", domain: ".arabhardware.net", bearer: false}, 
	{title: "jwt_token", domain: ".arabhardware.com", bearer: false}, 
	{title: "jwt_token", domain: ".stg.ahw.store", bearer: false},
]

// export const thisDomain = "localhost"
export const thisDomain = "user-profile-lyart.vercel.app"

let res={
	"status": "success",
	"user": {
		"id": 28610,
		"fname": "Aimee",
		"lname": "Noble",
		"display_name": "aimee_noble",
		"slug": "aimee_noble",
		"email": "xihup@mailinator.com",
		"avatar": null,
		"email_verified_at": null,
		"active": true,
		"created_at": "2024-06-27T07:21:02.000000Z",
		"updated_at": "2024-06-27T07:21:02.000000Z",
		"deleted_at": null,
		"facebook_id": null,
		"google_id": null,
		"last_login_at": "2024-06-27T07:21:02.000000Z",
		"twitter_id": null,
		"linkedin_id": null,
		"phone": null,
		"old_store": false
	},
	"authorisation": {
		"access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FyYWJoYXJkd2FyZS5jb20vYXBpL3YxL3JlZ2lzdGVyIiwiaWF0IjoxNzE5NDcyODYyLCJleHAiOjE3MTk0NzY0NjIsIm5iZiI6MTcxOTQ3Mjg2MiwianRpIjoiTDZ6U2dKWWF5MHFheFVDVyIsInN1YiI6IjI4NjEwIiwicHJ2IjoiOTEwZGQ4YWQwYjRmNDQ4MjBmZWVjNDQ4MjFmM2VhZmUwNGYzM2UwNSJ9._bM3saCAYtEASSV7NcmehtdsbZoLNiiieo2674p1YFs",
		"token_type": "bearer",
		"expires_in": 3600
	}
}