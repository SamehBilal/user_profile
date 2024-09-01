"use client"
import { useEffect, useState } from 'react';
import { Pagination } from "@nextui-org/react";

function PaginationSection({ totalPages = 10, currentPage = 1, searchValue = '', setCurrentPage }) {

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            {currentPage && (
                <div className="w-full mt-4 py-8 flex items-center justify-center">
                    <Pagination
                        shadow
                        total={totalPages}
                        page={currentPage}
                        onChange={(page) => onPageChange(page)}
                        size="lg"
                        color="primary"
                    />
                </div>
            )}
        </>
    );
}

export default PaginationSection;
