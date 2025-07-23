import React from 'react';

/**
 * @component Pagination
 * @param {Object} props Component props
 * @param {number} props.currentPage Current active page (1-based)
 * @param {number} props.totalPages Total number of pages
 * @param {Function} props.onPageChange Callback when page is changed
 * @param {boolean} props.loading Whether data is being loaded
 * @returns {JSX.Element}
 */
export default function Pagination({ currentPage, totalPages: rawTotalPages, onPageChange, loading }) {
  // Limit total pages to 40
  const totalPages = Math.min(rawTotalPages, 40);

  // Don't render pagination if there's only one page or no pages
  if (totalPages <= 1) return null;

  // Calculate the range of page numbers to show
  const getPageNumbers = () => {
    const range = [];
    
    // Always show first page
    range.push(1);
    
    if (totalPages <= 7) {
      // If total pages is 7 or less, show all pages
      for (let i = 2; i < totalPages; i++) {
        range.push(i);
      }
    } else {
      // For current page near the start
      if (currentPage <= 3) {
        range.push(2, 3, 4, '...', totalPages - 1);
      }
      // For current page near the end
      else if (currentPage >= totalPages - 2) {
        range.push('...', totalPages - 3, totalPages - 2, totalPages - 1);
      }
      // For current page in the middle
      else {
        range.push(
          '...',
          currentPage - 1,
          currentPage,
          currentPage + 1,
          '...'
        );
      }
    }
    
    // Always show last page if more than one page
    if (totalPages !== 1) {
      range.push(totalPages);
    }

    return range;
  };

  return (
    <div className="pagination-container">
      <div className="pagination-wrapper">
        {/* Previous Page Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1 || loading}
          className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
          aria-label="Previous page"
        >
          ←
        </button>

        {/* Page Numbers */}
        <div className="pagination-numbers">
          {getPageNumbers().map((pageNum, index) => (
            <button
              key={index}
              onClick={() => typeof pageNum === 'number' ? onPageChange(pageNum) : null}
              disabled={pageNum === '...' || pageNum === currentPage || loading}
              className={`pagination-number ${pageNum === currentPage ? 'active' : ''} ${pageNum === '...' ? 'dots' : ''}`}
              aria-label={typeof pageNum === 'number' ? `Go to page ${pageNum}` : 'More pages'}
            >
              {pageNum}
            </button>
          ))}
        </div>

        {/* Next Page Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages || loading}
          className={`pagination-button ${currentPage === totalPages ? 'disabled' : ''}`}
          aria-label="Next page"
        >
          →
        </button>
      </div>

      {/* Page Info */}
      <div className="pagination-info">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
} 