export const SearchItem = ({data}) => {
    return (
        <div 
            className="result-item" 
            onClick={() => alert(`Selected: ${data.name}`)}
        >
            {data.name}
        </div>
    );
};
