export const transfer_balance =(data)=>({
	type: "TRANSFER_BALANCE",
	data: data
})

export const initial_balance = ()=>(
	{type: "INITIAL_BALANCE"}
)
