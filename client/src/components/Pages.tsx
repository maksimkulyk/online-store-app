import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Pagination } from "react-bootstrap";
import { AppContext } from "..";

interface Props {}

const Pages = observer((props: Props) => {
  const { device } = useContext(AppContext);
  const pageCount = device && Math.ceil(device.totalCount / device.limit);
  const pages = [];

  if (pageCount) {
    for (let i = 0; i < pageCount; i++) {
      pages.push(i + 1);
    }
  }

  return (
    <Pagination className="mt-5">
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          activeLabel=""
          active={device?.page === page}
          onClick={() => device?.setPage(page)}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
});

export default Pages;
