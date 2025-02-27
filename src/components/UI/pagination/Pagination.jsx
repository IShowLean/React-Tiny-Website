import React from 'react';
import {getPagesArray} from "../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages)

    return (
        <div className="page__wrapper" style={{display: 'flex', justifyContent: 'center'}}>
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page__current' : 'page'}
                >{p}</span>
            )}
        </div>
    );
};

export default Pagination;