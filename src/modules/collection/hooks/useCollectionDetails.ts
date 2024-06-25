import { LoadingContext } from "context/loading";
import { deletePokemonFromCollection, getCollectionDetails } from "helpers/collection";
import { addTrade } from "helpers/trades";
import { Collection } from "interfaces/pokemon"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { showModal } from "utils/modal";

export const useCollectionDetails = (id: number | string) => {
    const navigate = useNavigate();
    const { setLoading } = useContext(LoadingContext)

    const [collection, setCollection] = useState<Collection>({
        id: 0,
        pokemon:{
            id: 0,
            name: "",
            sprite: "",
            types: []
        }
    })
    useEffect(()=>{
        setLoading(true)
        getCollectionDetails(+id | 0)
        .then((result)=>{
            setCollection(result)
        })
        .catch(()=>{
            navigate('/collection')
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [id])

    const onReturn = () =>{
        navigate('/collection')
    }
    
    const onDelete = () =>{
        Swal.fire({
            title: "Are you sure you want to delete this pokemon from your collection?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              onDeletePokemon()
            }
          });
    }

    const onDeletePokemon = () =>{
        setLoading(true)
        deletePokemonFromCollection(id as number)
        .then(()=>{
            showModal({title: 'Pokemon deleted', text:'Pokemon deleted successfully', type:'success'})
            navigate('/collection')
        })
        .finally(()=>{
            setLoading(false)
        })
    }
    
    const [pokemonSelectorOpened, setPokemonSelectorOpened] = useState(false)
    const handleMakeTrade  = () =>{
        setPokemonSelectorOpened(true)
    }

    const onMakeTrade = (pokemonsWanted: number[] | number) =>{
        if (!Array.isArray(pokemonsWanted)) {
            console.error("pokemons should be an array");
            return
        }
        setLoading(true)
        addTrade({collectionId:+id, pokemonsWanted})
        .then(()=>{
            showModal({type: 'success', title:"Trade created", text:"Trade created successfully", didClose: () => window.location.reload() })
            setPokemonSelectorOpened(false)
        })
        .finally(()=>{
            setLoading(false)
        })
    }
  return { collection, onReturn, onDelete, handleMakeTrade, pokemonSelectorOpened, setPokemonSelectorOpened, onMakeTrade }
}
