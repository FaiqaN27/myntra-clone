import React from 'react'
import '../Bag.css';
import BagSummary from '../components/BagSummary';
import BagItem from '../components/BagItem';
import { useSelector } from 'react-redux';

const Bag = () => {
    const bagItem = useSelector(store => store.bag);
    const items = useSelector(store => store.items);
    const finalItem = items.filter(item => {
        const itemIndex = bagItem.indexOf(item.id);
        return itemIndex >= 0;
    });

    return (
        <>
            <main>
                <div className="bag-page">
                    <div className="bag-items-container">
                        {finalItem.map((item) => <BagItem item={item} />)}
                    </div>
                    <BagSummary />
                </div>
            </main>
        </>
    )
}

export default Bag