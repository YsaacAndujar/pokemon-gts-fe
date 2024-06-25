import { LoadingContext } from "context/loading";
import { deleteTrade, getTradeDetails, patchTrade } from "helpers/trades";
import { Trade } from "interfaces/pokemon";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { showModal } from "utils/modal";

export const useMyTradeDetails = (id: number | string) => {
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

    const onDelete = () => {
        Swal.fire({
            title: "Are you sure you want to delete this trade from your collection?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                onDeleteTrade()
            }
        });
    }

    const onDeleteTrade = () => {
        setLoading(true)
        deleteTrade(id as number)
            .then(() => {
                showModal({ title: 'Trade deleted', text: 'Trade deleted successfully', type: 'success' })
                navigate('/trades')
            })
            .finally(() => {
                setLoading(false)
            })
    }
    const handleEditBtn = () => {
        setPokemonSelectorOpened(true)
    }

    const onEdit = (pokemonsWanted: number[]) => {
        setLoading(true)
        patchTrade(id as number, pokemonsWanted)
            .then(() => {
                showModal({ 
                    type: 'success', 
                    title: "Trade updated", 
                    text: "Trade updated successfully", 
                    didClose: () => window.location.reload() 
                })
                setPokemonSelectorOpened(false)

            })
            .finally(() => {
                setLoading(false)
            })
    }
    return { trade, onDelete, onReturn, handleEditBtn, pokemonSelectorOpened, setPokemonSelectorOpened, onEdit }
}
