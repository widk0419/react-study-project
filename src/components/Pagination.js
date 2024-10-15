import propTypes from 'prop-types';

const Pagination = ({currentPage = 1, numberOfPages, onClick, limit = 5}) => {
    const currentSet = Math.ceil(currentPage/limit);
    const lastSet = Math.ceil(numberOfPages/limit);
    const startPage = limit * (currentSet - 1) + 1;
    console.log('currentPage',currentPage,'limit',limit,'numberOfPages',numberOfPages,'startPage',startPage);
    const numberOfPageForSet = currentSet === lastSet ? numberOfPages%limit : limit

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                {currentSet !== 1 && <li className="page-item">
                    <div className="page-link" href='#'
                        onClick={() => onClick(startPage - limit)}
                    >
                        Previous
                    </div>
                </li>}
                {Array(numberOfPageForSet).fill(startPage)
                .map((value, index) => value + index )
                .map((pageNum) => {
                    return <li key={pageNum} className={`page-item ${currentPage === pageNum ? 'active' : '' } `}>
                        <div className="page-link cursor-pointer"
                            onClick = {(e) => {
                                onClick(pageNum);
                            }}>  
                            {pageNum}
                        </div>
                    </li>
                })}
                {currentSet !== lastSet && <li className="page-item">
                    <div className="page-link cursor-pointer" href="#"
                        onClick={() => onClick(startPage + limit)}
                    >
                        Next</div>
                </li>}
            </ul>
        </nav>
    )
}

Pagination.propTypes = {
    currentPage: propTypes.number,
    numberOfPages: propTypes.number.isRequired,
    onClick: propTypes.func.isRequired,
    limit: propTypes.number
};

// Pagination.defaultProps = {
//     currentPage: 1,
//     limit: 5
// }

export default Pagination;