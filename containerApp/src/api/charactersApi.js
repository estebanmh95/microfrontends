const characters = fetch('https://rickandmortyapi.com/api/character/?status=alive&gender=genderless')
    .then(res=>res.json())
    .then((result)=>{
        // console.log(result)
        return{
            characters:result
        }
    })


export {
    characters
}