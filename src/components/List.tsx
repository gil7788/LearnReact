export default function List({ data = [], renderItem, renderEmpty }) {
    return !data.length ?  (
        renderEmpty
    ) : (
        <ul>
            {data.map((item, index) => (
                <li key={index}>{renderItem(item)}</li>
            ))}
        </ul>
    );
}