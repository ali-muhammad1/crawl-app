import React from 'react';

const StatsTableRow = ({rows}) => {
    return (
        <tbody>
        {
            rows.map((r) => {
                return(
                    <tr>
                        <td>{r.url}</td>
                        <td>{r.internal_links.length}</td>
                        <td>{r.external_links.length}</td>
                        <td>{r.images.length}</td>
                        <td>{r.page_load.toFixed(2)}</td>
                        <td>{r.word_count}</td>
                        <td>{r.title_length}</td>
                    </tr>
                )
            })
        }
        </tbody>
    )
}

export default StatsTableRow;