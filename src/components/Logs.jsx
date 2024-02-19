import React, {useState, useEffect} from 'react';
import '../assets/css/Research.css';
import SeparatorWide from './SeparatorWide.jsx';

const Logs = () => {
  // sort this by date? or add an ID?

  const initialLogs  = [
    { id: 1, title: 'Week 1 Log', date: "05 Feb 2024", url: process.env.PUBLIC_URL + '/logPDFs/log-05Feb2024.pdf' },



    // actually work on this, and the real file as well, then change the links accordingly!
    { id: 2, title: 'Week 2 Log', date: "12 Feb 2024", url: process.env.PUBLIC_URL + '/logPDFs/log-12Feb2024.pdf' },


    // // delete this: this was for the sole purpose of testing the sorting
    // { id: 3, title: 'Week 3 Log', date: "05 Feb 2024", url: process.env.PUBLIC_URL + '/logPDFs/log-05Feb2024.pdf' },
    // { id: 4, title: 'Week 4 Log', date: "05 Feb 2024", url: process.env.PUBLIC_URL + '/logPDFs/log-05Feb2024.pdf' },
    // { id: 5, title: 'Week 45 Log', date: "05 Feb 2024", url: process.env.PUBLIC_URL + '/logPDFs/log-05Feb2024.pdf' },
    // { id: 6, title: 'Week 46 Log', date: "05 Feb 2024", url: process.env.PUBLIC_URL + '/logPDFs/log-05Feb2024.pdf' },
    // { id: 7, title: 'Week 47 Log', date: "05 Feb 2024", url: process.env.PUBLIC_URL + '/logPDFs/log-05Feb2024.pdf' },
    // { id: 8, title: 'Week 48 Log', date: "05 Feb 2024", url: process.env.PUBLIC_URL + '/logPDFs/log-05Feb2024.pdf' },


  ];




  // State variable to track sorting order
  const [sortOrder, setSortOrder] = useState('asc'); 

  // State variable to store logs array
  const [logs, setLogs] = useState(initialLogs);

  // State variable to store search input
  const [searchInput, setSearchInput] = useState('');

  // Function to handle toggling the sorting order
  const toggleSortOrder = () => {
    // Toggle the sortOrder state
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Use effect to sort logs whenever sortOrder changes
  useEffect(() => {
    // Sort the logs array based on id in the desired order
    const sortedLogs = sortOrder === 'asc' ? [...logs].sort((a, b) => a.id - b.id) : [...logs].sort((a, b) => b.id - a.id);
    setLogs(sortedLogs);
  }, [sortOrder]);


  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  // Filter logs based on search input
  const filteredLogs = logs.filter(log => log.title.toLowerCase().includes(searchInput.toLowerCase()));




  // useEffect(() => {
    
  //   const mostRecentLog = logs.length > 0 ? logs[logs.length - 1] : null;

  //   console.log(mostRecentLog);

  // }, [logs, initialLogs]);

  






  const handleViewPDF = (url) => {
    window.open(url, '_blank');
  };

  const handleDownloadPDF = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.substring(url.lastIndexOf('/') + 1);
    link.click();
  };

  return (
    <div>
      <SeparatorWide rotation={-5} />
      <div className="research-container">

        <div className="research-title">Logs</div>





        <div className='research-config'>

          {/* Search input */}
          <input
            type="text"
            placeholder="Search logs by name..."
            value={searchInput}
            onChange={handleSearchInputChange}
            className="research-search-input"
          />

          

          {/* Sort button */}
          <button onClick={toggleSortOrder} className="toggle-sort-button">
            
            <svg version="1.1" id="Layer_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className='sortIcon'>
              <g>
                <path d="M123.177,505.18c0.545,0.543,1.117,1.058,1.713,1.547c0.264,0.219,0.546,0.408,0.818,0.613   c0.334,0.251,0.661,0.51,1.008,0.742c0.33,0.222,0.675,0.413,1.013,0.616c0.312,0.186,0.616,0.383,0.937,0.554   c0.349,0.186,0.704,0.343,1.06,0.51c0.334,0.158,0.662,0.324,1.004,0.467c0.346,0.143,0.697,0.258,1.049,0.383   c0.366,0.132,0.728,0.272,1.1,0.385c0.352,0.105,0.706,0.185,1.061,0.273c0.382,0.098,0.76,0.203,1.15,0.281   c0.408,0.081,0.816,0.129,1.227,0.188c0.341,0.048,0.678,0.113,1.022,0.147c0.765,0.074,1.531,0.115,2.298,0.115   s1.533-0.04,2.296-0.116c0.346-0.034,0.681-0.099,1.022-0.147c0.411-0.059,0.819-0.107,1.227-0.188   c0.389-0.078,0.768-0.185,1.15-0.281c0.355-0.088,0.709-0.166,1.061-0.273c0.372-0.113,0.734-0.253,1.1-0.385   c0.352-0.126,0.703-0.24,1.049-0.383c0.343-0.143,0.672-0.309,1.004-0.467c0.355-0.166,0.711-0.324,1.06-0.51   c0.321-0.172,0.625-0.368,0.937-0.554c0.34-0.203,0.683-0.394,1.013-0.616c0.349-0.233,0.676-0.492,1.008-0.742   c0.273-0.205,0.554-0.394,0.818-0.613c0.596-0.489,1.168-1.004,1.713-1.547l116.359-116.361c9.089-9.087,9.089-23.824,0-32.912   c-9.087-9.089-23.824-9.089-32.912,0l-76.632,76.637V23.273C162.91,10.42,152.49,0,139.637,0s-23.273,10.42-23.273,23.273v409.27   l-76.636-76.634c-9.087-9.089-23.824-9.089-32.912,0c-9.089,9.087-9.089,23.823,0,32.912L123.177,505.18z"/>
                <path d="M387.113,5.274c-0.261-0.216-0.538-0.402-0.807-0.604c-0.34-0.254-0.67-0.515-1.021-0.751   c-0.327-0.219-0.667-0.408-1.002-0.608c-0.316-0.189-0.625-0.388-0.953-0.562c-0.343-0.183-0.694-0.338-1.046-0.504   c-0.338-0.16-0.67-0.329-1.016-0.472c-0.341-0.141-0.689-0.256-1.035-0.379c-0.369-0.133-0.737-0.276-1.116-0.389   c-0.346-0.104-0.694-0.18-1.043-0.268c-0.388-0.098-0.771-0.206-1.167-0.285c-0.399-0.079-0.802-0.126-1.202-0.183   c-0.349-0.051-0.694-0.116-1.049-0.152c-0.74-0.073-1.482-0.11-2.225-0.112C372.409,0.003,372.389,0,372.364,0   s-0.045,0.003-0.07,0.003c-0.743,0.003-1.485,0.039-2.225,0.112c-0.355,0.036-0.7,0.101-1.049,0.152   c-0.402,0.057-0.805,0.104-1.202,0.183c-0.396,0.078-0.779,0.186-1.167,0.285c-0.349,0.088-0.697,0.164-1.043,0.268   c-0.379,0.115-0.745,0.256-1.116,0.389c-0.346,0.124-0.694,0.237-1.035,0.379c-0.348,0.143-0.68,0.312-1.016,0.472   c-0.352,0.164-0.703,0.32-1.046,0.504c-0.327,0.174-0.636,0.372-0.953,0.562c-0.335,0.2-0.675,0.389-1.002,0.608   c-0.352,0.236-0.681,0.496-1.021,0.751c-0.268,0.202-0.546,0.388-0.807,0.604c-0.596,0.489-1.168,1.004-1.713,1.547   L239.542,123.179c-9.089,9.087-9.089,23.824,0,32.912c9.087,9.089,23.824,9.089,32.912,0l76.637-76.632v409.268   c0,12.853,10.42,23.273,23.273,23.273s23.273-10.42,23.273-23.273V79.459l76.636,76.634c4.543,4.544,10.499,6.816,16.455,6.816   c5.956,0,11.913-2.271,16.455-6.817c9.089-9.087,9.089-23.824,0-32.912L388.826,6.82C388.281,6.277,387.709,5.762,387.113,5.274z"/>
              </g>
            </svg>

            {sortOrder === 'asc' ? 'Sort Newest First' : 'Sort Oldest First'}

          </button>

        </div>



        





        {filteredLogs.map((log, index) => (
          <div key={index} className="research-item">
            <div className="research-title">{log.title} — {log.date}</div>
            <div className="research-links">
              <button onClick={() => handleViewPDF(log.url)} className="research-link">View PDF</button>
              <button onClick={() => handleDownloadPDF(log.url)} className="research-link">Download PDF</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Logs;
