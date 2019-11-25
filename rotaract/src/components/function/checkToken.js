
const checkToken = () => {    
    fetch('/api/checkToken')
        .then(res => {
            console.log(res.status)
            if(res.status === 200) 
                return true
        })
    
    return false
}

export default checkToken