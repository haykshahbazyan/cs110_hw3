<script>
const rivers = function(rey) {
let aut=[];
	for(let i = rey.length - 1; i>=0; i--) {
	  j=rey.lenght - 1 - i;
	  aut.push(rey[i]);
	}
return aut;
};
let notes=["do","re","mi","fa","sol","lya","si"];
console.log(rivers(notes));
</script>

