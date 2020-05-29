import React from 'react';

const api = {
  key : "53c87f6eea40e94010bb89434b1f938e",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="App">
      <main className="container">
        <div className="row">
          <div className="col-4 bg-aqua">
            <div classNAme="search-box">
            </div>
            
            <div class="card" style={{width: '18rem;'}}>
              <input type="text" className="search-bar" placeholder="Search ..." />

              <img class="card-img-top" src="..." alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>

          </div>
        </div>
      </main>
    
    </div>
  );
}

export default App;
