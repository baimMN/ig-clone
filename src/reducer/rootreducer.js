const iniState={
	route:"yaa",
	test:'tes'
}

const root= (state=iniState,action)=> {
	if(action.type === "changeRoute"){
		return {...inistate,route:action.route}
	}
	return state
}

export default root