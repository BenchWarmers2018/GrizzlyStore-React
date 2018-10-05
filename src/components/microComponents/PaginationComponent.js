import React, {Component} from 'react';
import UltimatePagination from "react-ultimate-pagination-bootstrap-4";

class PaginationComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageProps: {
                currentPage : this.props.currentPage,
                totalPages : this.props.totalPages,
            },
        }
    }

    handlePageChange = (page) => {
        this.props.onPageChange(page);
    }

    componentDidUpdate(prevProps) {
        if(this.props.currentPage !== prevProps.currentPage || this.props.totalPages !== prevProps.totalPages)
        {
            const pageProps = {
                currentPage : this.props.currentPage,
                totalPages : this.props.totalPages,
            }
            this.setState({pageProps: pageProps})
        }
    }

    render() {

        /**
         * PaginationComponent data
         * */
        {/**
         *** Pgination ultimate boot 4 methods***
         *
         currentPage: _propTypes2.default.number.isRequired,
         totalPages: _propTypes2.default.number.isRequired,
         boundaryPagesRange: _propTypes2.default.number,
         siblingPagesRange: _propTypes2.default.number,
         hideEllipsis: _propTypes2.default.bool,
         hidePreviousAndNextPageLinks: _propTypes2.default.bool,
         hideFirstAndLastPageLinks: _propTypes2.default.bool,
         onChange: _propTypes2.default.func
         restProps = _objectWithoutProperties(props, ['currentPage', 'totalPages', 'boundaryPagesRange', 'siblingPagesRange', 'hideEllipsis', 'hidePreviousAndNextPageLinks', 'hideFirstAndLastPageLinks', 'onChange']);

         */}

        return (


            <UltimatePagination
                currentPage={this.state.pageProps.currentPage}
                totalPages={this.state.pageProps.totalPages}
                onChange={this.handlePageChange}
            />

        );
    }
}

export default PaginationComponent;