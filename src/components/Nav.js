import React from 'react'


import './Nav.scss'

function menuToggle() {
	console.log(document.getElementById('menulist').classList)
	document.getElementById('menubtn').classList.toggle("show");
	document.getElementById('menulist').classList.toggle("show");
}
function Nav() {

	return (
		<div>



			<nav className="navbar" role="navigation" aria-label="menu">
				<img src="logo.svg" alt="Logo" class="logo" />

				<ul className="menu" id='menulist'>
					<li className="dropdown"><a >Features </a>
						<ul className="dropdown-nav">
							<li><a > <img src='icon-todo.svg' /> Todo List</a></li>
							<li><a > <img src='icon-calendar.svg' />Calender</a></li>
							<li><a > <img src='icon-reminders.svg' />Reminders</a></li>
							<li><a > <img src='icon-planning.svg' />Planning</a></li>
						</ul>

					</li>
					<li className="dropdown"><a >Company</a>
						<ul className="dropdown-nav">
							<li><a >History</a></li>
							<li><a >Our Team</a></li>
							<li><a >Blog</a></li>
						</ul>
					</li>
					<li className="dropdown"><a href="#">Careers</a></li>
					<li class="dropdown"><a >About</a></li>
				</ul>
				<div className='btns'>
					<button id="login-btn">Login</button>&nbsp;
					<button className='border'>Register</button>
					<div className='menubutton ' id='menubtn'  onClick={() => menuToggle()}>
						
					
					</div>
				
					
				</div>
			</nav>

		</div>
	)
}

export default Nav