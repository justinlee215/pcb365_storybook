import React from 'react'

export default function form() {
  return (
    <form id="form" action="">
	<h1>Checkout</h1>

	<section>
		<h2>Billing info</h2>

		<div class="form-group">
			<label for="name">Name</label>
			<input id="name" type="text" />
		</div>

		<div class="form-group">
			<label for="street">Address</label>
			<input id="street" type="text" />
		</div>

		<div class="form-group">
			<label for="city">City</label>
			<input id="city" type="text" />
		</div>

		<div class="split split-2-1 form-group">
			<div class="form-group">
				<label for="state">State/province</label>
				<input id="state" type="text" />
			</div>

			<div class="form-group">
				<label for="zip">ZIP/postal code</label>
				<input id="zip" type="text" />
			</div>
		</div>
	</section>

	<section>
		<h2>Card details</h2>

		<div class="form-group">
			<label for="card">Card number</label>
			<input id="card" type="credit-card" />
		</div>

		<div class="form-group split split-1-1-2">
			<div class="form-group">
				<label for="expiration">Expiration</label>
				<input id="expiration" type="text" />
			</div>

			<div class="form-group">
				<label for="cvv">CVV</label>
				<input id="cvv" type="text" />
			</div>

			<div class="form-group">
				<label for="card-zip">ZIP</label>
				<input id="card-zip" type="text" />
			</div>
		</div>
	</section>
	
	<input type="submit" value="Complete transaction" />
	<a href="#">Cancel</a>
</form>
  )
}
