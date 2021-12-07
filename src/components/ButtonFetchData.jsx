import { useQueryClient } from 'react-query'

function ButtonFetchData() {

    const queryClient = useQueryClient();
    const handleClick = () => {
        queryClient.invalidateQueries('housing');
    }

    return (
        <div>
            <button onClick={handleClick}>Fetch Data</button>
        </div>
    )
}

export default ButtonFetchData