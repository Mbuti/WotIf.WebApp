import React from "react";

export default class Login extends React.Component {
	render() {
		return (
			<div class="container">
				<div class="row">
					<div class="col-sm-6 col-md-4 col-md-offset-4">
						<h1 class="text-center login-title">Login</h1>

						<div class="account-wall">
							<center>
								<img class="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120" alt="" />
							</center>
							
							<form class="form-signin">
								<input type="text" class="form-control" placeholder="Email" required />
								<input type="password" class="form-control" placeholder="Password" required />
								<button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
								<label class="checkbox pull-left">Remember me</label>
								<input type="checkbox" value="remember-me" />
								<a href="#" class="pull-right need-help">Need help? </a><span class="clearfix"></span>
							</form>
						</div>
						<a href="#" class="text-center new-account">Create an account </a>
					</div>
				</div>
			</div>
			)
	}
}