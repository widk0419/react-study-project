import propTypes, { number } from 'prop-types';

const PagiNation = ({currentPage = 1, numberOfPages, onClick, limit=5}) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                    <a className="page-link" href='#'>
                        Previous
                    </a>
                </li>
                {Array(numberOfPages).fill(1).map((value,index) => value + index )
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
                <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    )
}

PagiNation.propTypes = {
    currentPage: propTypes.number,
    numberOfPages: propTypes.number.isRequired,
    onClick: propTypes.func.isRequired
};

// PagiNation.defaultProps = {
//     currentPage: 1,
//     limit: 5
// }

export default PagiNation;