export const Stats = ({ items }) => {
    if (!items.length) return (
        <p className="stats">
            <em>Start Adding some items to your packing List</em>
        </p>
    );


    const numItems = items.length;
    const numPacked = items.filter(item => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);
    return (
        <footer className="stats">
            <em>
                {percentage === 100 ? "You have packed everything and Ready to Go" :
                    `You have ${numItems} items in your list and you already packed ${numPacked} ${percentage}%`}
            </em>
        </footer>
    );
};
