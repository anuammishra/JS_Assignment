
	var n;
	var sum;
	var product=1;
	var countNumber = 0;
	var i = prompt ("Please enter the number of  positive integers  = ");
	 i=parseInt(i);
	if (n > 0) {
		for (sum = 0;n > countNumber;)

		{
			sum = sum + n;
			product = product * n;
			n = n - 1;

		}
	}
	console.log ("The sum the integers number = "  sum );
	console.log (" The product number of integers = " product );

	
	
}