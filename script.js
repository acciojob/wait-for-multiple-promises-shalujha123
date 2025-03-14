//your JS code here. If required.
function createPromise(index){
	const time = Math.random()*(3-1)+1
	return new Promise(resolve => {
		setTimeout(() => resolve({index,time:time.toFixed(3)}), time*1000)
	})
}

const promises = [createPromise(1),createPromise(2),createPromise(3)]

Promise.all(promises).then(results => {
	const output = document.getElementById("output")
	output.innerHTML = ""
	results.forEach(result => {
		let row = document.createElement("tr")
		row.innerHTML = `<td>Promise ${result.index}</td><td>${result.time}</td>`
		output.append(row)
	})
	let maxTime = Math.max(...results.map(res => parseFloat(res.time))).toFixed(3)

	let totalRow = document.createElement("tr")
	totalRow.innerHTML = `<td>Total</td><td>${maxTime}</td>`
	output.append(totalRow)
})













