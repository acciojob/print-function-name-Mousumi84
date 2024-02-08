function functionName() {
	let ans=arguments.callee.name;
	console.log(ans);
}

functionName();
