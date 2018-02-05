export function keyGen(name){
	let key = Math.floor(Math.random() * Math.floor(1000));
	key += name;
	return key;
}
