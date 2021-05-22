import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import {
  SSRMainContentFooter,
  SSRPagination,
  SSRPageNext,
  SSRPagePrev,
  SSRPageNumber,
} from './paginationStyle'

const Pagination = () => {
  return (
    <SSRMainContentFooter>
      <SSRPagination>
        <SSRPagePrev>{<i className="fas fa-chevron-left"></i>}</SSRPagePrev>
        <SSRPageNumber>{'1'}</SSRPageNumber>
        <SSRPageNumber>{'2'}</SSRPageNumber>
        <SSRPageNumber>{'3'}</SSRPageNumber>
        <SSRPageNumber>{'...'}</SSRPageNumber>
        <SSRPageNumber>{'11'}</SSRPageNumber>
        <SSRPageNext>{<i className="fas fa-chevron-right"></i>}</SSRPageNext>
      </SSRPagination>
    </SSRMainContentFooter>
  )
}

export default Pagination
