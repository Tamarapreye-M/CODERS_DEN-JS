// Error handling

try{
    let firstName = 'Tamara'
    let interest = 'Software development'
    let info = `${firstName} ${lastName} is interested in ${interest}`
} catch (err){
    console.log(err)
}

try{
    let firstName = 'Preye'
    let socialOpinnion = 'Feminist'
    let about = `${firstName} ${lastName} is a ${socialOpinnion}`
} catch (err) {
    console.error(err)
    console.log('Name of the error', err.name)
    console.log('Message of the error', err.message)
} finally{
    console.log("She still is a feminist")
}

const throwErrExample = () => {
    let x = prompt('Please enter a number')
    try{
        if(x == '') throw 'empty, enter a number na'
        if(isNaN(x)) throw 'not a number'
        x = +x
        if(x < 5) throw 'You can do better! Go higher'
        if(x > 20) throw 'I think you went too far'
    } catch (err){
        console.error(err)
        console.log(`name of error and message are: ${err.name} and ${err.message}`)
    }

}

throwErrExample()