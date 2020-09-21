import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import {CARDS} from './components/Card'
 import Cards from './components/Cards.js'
 import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

class App extends Component {

  constructor(props) {
		super(props);

		this.state = {
		cards:CARDS
		
			
		};
  }
  render(){ return (
    <>
    <div className="App">
      <div className="App-header">
          <div className="main-page">
            <div className="side-nav">
              <span><i class="far fa-dot-circle"></i> TenderFarm</span>
            
            <div className="navs">
           <div className="nav-item">
           <i class="fas fa-home"></i>  Compaany
           </div>
          
           <div className="nav-item active-tab">
           <i class="fas fa-search"></i>  Explore
           </div>
           <div className="nav-item">
             Latest Tenders
           </div>
           <div className="nav-item active">
             Best Tenders
           </div>
           <div className="nav-item">
             Team search
           </div>
           <div className="nav-item notification">
           <i class="fas fa-comment-dollar"></i> Notification
           <span>1</span>
           </div>
           <div className="box">
             <span><i class="fab fa-apple"></i> Apple inc</span>
             <p className="subtext">Ending Soon</p>
             <br/>
             <p>lorem ipsum dolor met io</p>
          

           </div>

           <div className="nav-item">
           <i class="fas fa-envelope"></i> Messages
           </div>
           <div className="nav-item">
           <i class="fas fa-user-alt"></i> Profile
           </div>
           <div className="nav-buttons">
           <i class="fas fa-cog"></i>
           <i class="fas fa-user-friends"></i>
            

           </div>
            </div>
            </div>
            <div className="App-wrapper">
              <Navbar />
              <div className="Cards">
              <SimpleBar style={{ maxHeight: 800 }}>
              <Cards cards={this.state.cards} />
             </SimpleBar>
                
              </div>
            </div>
          </div>
      </div>
    </div>

  </>
  );
}}
 

export default App;
