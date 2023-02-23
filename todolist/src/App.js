import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from './Form';
import Card from 'react-bootstrap/Card';
import card from 'react-bootstrap/card';


function App() {
  return (
    <div className="App">
        <h1 className="AppBold"style={{paddingTop:"250px", paddingBottom:"60px"}}> 
          Organize your work  
          <p>and life, finally.</p>
        </h1>

        <Button size="lg" style={{backgroundColor:"#df5a31", color:"#fff", padding:"15px", paddingLeft:"40px", paddingRight:"40px"}}>
            Sign up
        </Button>

              <div
                className="image-fluid come-in"
                style={{
                backgroundImage: "url('https://marketplace.canva.com/EAE7Ot8Olcs/1/0/1600w/canva-pink-and-blue-retro-pop-up-to-do-list-desktop-wallpaper-bL3JG6SZJxo.jpg')",
                backgroundPosition:"center",
                backgroundRepeat:"no-repeat",
                maxWidth:"100%",
                width: "100%",
                height:"auto",
                paddingBottom:"800px",
                background:"cover",
                backgroundColor:"pink",
                marginTop:"150px",
              }}> 
          </div>
          <br/><br/>

{/* First Container */}

      <Container style={{paddingTop:"10%"}}>
            <div style={{textAlign:"left", float:"left", paddingTop:"100px" ,paddingLeft:"10px"}}>
              <h2 className="AppBold" style={{paddingTop:"5%",  textAlign:"left", padding:"10px"}}> 
                <p>
                  Add your tasks. <br/>
                  Organize your life. <br/>
                  Achieve more everyday. <br/>
                </p>
                </h2>
                <p id='font' style={{textAlign:"left", fontSize:"15px", color:"#575757", float:"left"}}>
                  <p>Add tasks like “Read work emails every day at 10am” </p>
                  <p id="left">to fill your to-do list in seconds using Todoist’s </p>
                  <p id="left">powerful natural language recognition and recurring </p>
                  dates.
                </p>
              </div>
            <img src="https://d33wubrfki0l68.cloudfront.net/ec621e304136ab6d4f3220e6d89019fd9341e86b/78171/images/ghost/2022-08-22-how-to-set-your-notion-to-do-list-as-desktop-wallpaper-automatically-free-notion-template/10.png" className="come-in"
            style={{width:"70vh", maxWidth:"100%", minHeight:"27px", height:"50vh",marginBottom:"130px", border:"solid", borderRadius:"20px", borderColor:"#575757", float:"right"}}/> 
      </Container>
      
{/* second container */}

      <Container>
            <img src="https://cdn.buymeacoffee.com/uploads/project_updates/2021/03/1728d022d80c229cdc8e7d786e17f008.jpg@1200w_0e.webp" className='come-in'
              style={{width:"70vh", maxWidth:"100%", minHeight:"27px", height:"50vh", border:"solid", borderRadius:"20px", borderColor:"#575757", float:"left"}}/>
              <div style={{textAlign:"left", float:"left", paddingTop:"5%"}}>
                <h2 className="AppBold" style={{paddingLeft:"130px",  textAlign:"left", float:"right", padding:"10px"}}> 
                  Add your tasks.
                  <p> Organize your life.
                  <p> Achieve more everyday.</p>
                  </p>
                </h2>

              <p id='font' className="float clearfix" style={{textAlign:"left", paddingLeft:"140px", fontSize:"15px", color:"#575757", float:"right", clear:"right"}}>
                <p>Add tasks like “Read work emails every day at 10am” </p>
                <p id="left">to fill your to-do list in seconds using Todoist’s </p>
                <p id="left">powerful natural language recognition and recurring </p>
                dates.
                </p>
              </div>
      </Container>

    <br/>
          <img src="https://i.etsystatic.com/30544979/r/il/1f9880/3219549903/il_fullxfull.3219549903_n06f.jpg"
          style = {{maxWidth:"100%", width:"140vh", marginTop:"10%"}}/>
            <p style={{paddingTop:"50px"}}> Get organized now. </p>

          <Button size="lg" style={{backgroundColor:"#df5a31", color:"#fff",padding:"15px", paddingLeft:"40px", paddingRight:"40px", marginBottom:"70px"}}>
              Sign up
          </Button>

    </div>
    
  );
}

export default App;
