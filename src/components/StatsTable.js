import React from 'react';
import StatsTableRow from './StatsTableRow';

const StatsTable = (props) => {
    return (
        <div className="table-wrapper table-responsive">
            <h4>Crawled Pages</h4>
            <table className="main-table table table-hover table-striped">
                <thead>
                    <tr>
                        <th>URL</th>
                        <th>Internal Pages</th>
                        <th>External Pages</th>
                        <th>Images</th>
                        <th>Load Time</th>
                        <th>Words</th>
                        <th>Title Length</th>
                    </tr>
                </thead>
                <StatsTableRow rows={props.crawled}/>
            </table>
        </div>
    )
}

export default StatsTable;