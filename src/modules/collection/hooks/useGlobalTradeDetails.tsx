import { LoadingContext } from "context/loading";
import { getTradeDetails, makeRequest } from "helpers/trades";
import { Trade } from "interfaces/pokemon";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { showModal } from "utils/modal";

export const useGlobalTradeDetails = (id: number | string) => {
    const navigate = useNavigate();
    const { setLoading } = useContext(LoadingContext)
    const [pokemonSelectorOpened, setPokemonSelectorOpened] = useState(false)

    const [trade, setTrade] = useState<Trade>({
        id: 0,
        pokemonsWanted: [],
        collection: {
            id: 0,
            pokemon: {
                id: 0,
                name: "",
                sprite: ""
            }
        }
    })
    
    useEffect(() => {
        setLoading(true)
        getTradeDetails(+id | 0)
            .then((result) => {
                setTrade(result)
            })
            .catch(() => {
                navigate('/trades')
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])

    const onReturn = () => {
        navigate('/trades')
    }

    const handleMakeOffer = () => {
        setPokemonSelectorOpened(true)
    }

    const onMakeOffer = (collectionId: number | number[]) => {
        if (Array.isArray(collectionId)) {
            console.error("pokemons shouldn't be an array");
            return
        }
        Swal.fire({
            title: "Are you sure you want to make this offer?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, make it!"
          }).then((result) => {
            if (result.isConfirmed) {
            setLoading(true)
            makeRequest({tradeId: +id, collectionId})
                .then(() => {
                    showModal({ 
                        type: 'success', 
                        title: "Request sended", 
                        text: "Request sended successfully", 
                    })
                    setPokemonSelectorOpened(false)
                })
                .finally(() => {
                    setLoading(false)
                })
            }
          });
    }
    return { trade, onReturn, handleMakeOffer, pokemonSelectorOpened, setPokemonSelectorOpened, onMakeOffer }
}
