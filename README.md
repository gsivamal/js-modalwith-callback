# js-modalwith-callback
Bootstrap modal plugin with callback, to invoke and pass data to method inside modal html

How to use
1. import the modal.js plugin code
	<script src="modal.js"></script>

2. From the caller html

	modal.registercallback(
			function(){ editcustomer(value,row); }
		).open("./pages/edit-customer.hrml");