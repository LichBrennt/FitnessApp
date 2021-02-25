import { useState, useEffect } from 'react'

const useFecth = url =>{

    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ err, setErr ]= useState(null)

    useEffect(()=>{

        const fetchResource = async ()=>{
            try{
                let res = await fetch(url)
                let data = await res.json()

                setData(data)
                setLoading(false)

            } catch(err){
                setLoading(false)
                setErr(err)
            }
        }
        fetchResource()
    }, [url])

    return { data, err, loading }
}

export default useFecth