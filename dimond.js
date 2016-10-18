<script>
const char = function(y, s){
	let emp = "" ;
	for(let i = 1 ; i<=y ; i++ ) {
		emp = emp + s;
	}
		return emp;
}

const diamond = function(n) {
let x = ""
	if(n%2 === 0) {
		n = n + 1;
	}
	for (let i = 1; i<n; i=i+2){
		x = x + char((n-i)/2, " ") + char(i, "*")+"\n";
	}
	x = x + char(n, "*")+"\n";
	for (let i = n-2; i>=1; i=i-2){
		x = x + char((n-i)/2, " ") + char(i, "*")+"\n";
	}
	return x;

}
let diamondsize=8
console.log(diamond(diamondsize));

</script>