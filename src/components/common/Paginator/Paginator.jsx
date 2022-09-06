import React from 'react';
import styles from './Paginator.module.css';

const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (
    let i = Math.max(currentPage - 5, 1);
    i <= Math.max(1, Math.min(currentPage + 5, pagesCount));
    i++
  ) {
    pages.push(i);
  }

  return (
    <div className={styles.btnPages}>
      {pages.map((p) => {
        return (
          <span
            className={currentPage === p ? styles.selectedPage : ''}
            onClick={(e) => {
              onPageChanged(p);
            }}
            key={p}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
