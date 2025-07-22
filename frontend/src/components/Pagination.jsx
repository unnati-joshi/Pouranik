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
export default function Pagination({ currentPage, totalPages, onPageChange, loading }) {
  // Don't render pagination if there's only one page or no pages
  if (totalPages <= 1) return null;

  // Calculate the range of page numbers to show
  const getPageNumbers = () => {
    const delta = 2; // Number of pages to show on each side of current page
    const range = [];
    const rangeWithDots = [];

    // Always show first page
    range.push(1);

    // Calculate the range of pages to show
    for (let i = currentPage - delta; i <= currentPage + delta; i++) {
      if (i > 1 && i < totalPages) {
        range.push(i);
      }
    }

    // Always show last page
    if (totalPages !== 1) {
      range.push(totalPages);
    }

    // Add dots where needed
    let prev = 0;
    for (const i of range) {
      if (prev) {
        if (i - prev === 2) {
          rangeWithDots.push(prev + 1);
        } else if (i - prev !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      prev = i;
    }

    return rangeWithDots;
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