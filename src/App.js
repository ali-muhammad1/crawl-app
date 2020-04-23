import React, {useState} from 'react';
import axios from 'axios';
import Card from './components/Card';
import SideBar from './components/SideBar';
import StatsTable from './components/StatsTable';

import './App.css';
import Search from './components/Search';
import Loader from './components/Loader';


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [stats, setStats] = useState(null);
  const [message, setMessage] = useState('Please provide website URL!');

  const handleCrawlSite = (url) => {
    setMessage(`Loading data for "${url}"`);
    setIsLoading(true);
    axios.get(`http://crawlerapi.developerpro.co?url=${url}`).then(res => {
      setIsLoading(false);
      if(res.data.success) {
        setStats(res.data.data);
        setMessage(url);
      } else {
        setStats(null);
        setMessage(res.data.message);
      }
    }).catch(err => {
      setMessage(err);
    })
  }

  return (
    <div className="App">
      <div className="header">
        <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand" href="#">BRAND LOGO</a>
            <Search handleCrawlSite={handleCrawlSite}/>
        </nav>
     </div>

    <div className="container-fluid">
         <div className="row">
          <SideBar />

             <div className="col-md-12 main-body">
                 <div className="main-content">

                    <div className="site-score-box">
                      <h2>{message}</h2>
                    </div>
                   {
                     isLoading ? 
                      <Loader />
                      :
                      stats ?
                        <div>
                            <div className="row content-header">

                              <Card title="Number of pages crawled" value={stats.pages_crawled} boxClass="bg-warning"/>
                              <Card title="Number of a unique images" value={stats.total_images} boxClass="bg-info"/>
                              <Card title="Number of unique internal links" value={stats.totlal_internal_link} boxClass="bg-success"/>
                              <Card title="Number of unique external links" value={stats.total_external_link} boxClass="bg-primary"/>
                              <Card title="Avg page load" value={stats.avg_page_load.toFixed(2)} boxClass="bg-info"/>
                              <Card title="Avg word count" value={stats.avg_word_count} boxClass="bg-warning"/>
                              <Card title="Avg Title length" value={stats.avg_title_length} boxClass="bg-primary"/>


                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <StatsTable crawled={stats.crawl}/>
                                </div>
                            </div>
                        </div>
                      : null
                      }
                      </div>
             </div>
         </div>
    </div>
    </div>
  );
}

export default App;
