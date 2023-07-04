

import ItemCardArticulos from "./ItemCardArticulos";

const ItemListArticulos = ( {items, lasSec} ) => {
    return (
        <div>
            {
                items.map((data) => (
                    <div key={data.sectionId}>
                      <ItemCardArticulos itemData={data} lasSec={lasSec}/>
                    </div>
                ))
            }
        </div>
    );
}

export default ItemListArticulos;
