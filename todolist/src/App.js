import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from './Form';
import Card from 'react-bootstrap/Card';


function App() {
  return (
    <div className="App">

        <h1 className="AppBold"style={{paddingTop:"250px", paddingBottom:"60px"}}> 
          Organize your work  
          <p>and life, finally.</p>
        </h1>
{/* backgroundColor:"#df5a31" */}
        <Button size="lg" style={{backgroundColor:"#df5a31", color:"#fff", padding:"15px", paddingLeft:"40px", paddingRight:"40px"}}>
            Sign up
        </Button>

        <Button size="lg" style={{backgroundColor:"white", color:"black", padding:"15px", paddingLeft:"40px", paddingRight:"40px", borderColor:"black", marginLeft:"10px"}}>
            Log In
        </Button>

        <div
                className="image-fluid come-in"
                style={{
                backgroundImage: "url('https://diaryofajournalplanner.com/wp-content/uploads/2020/03/Bullet-Journal-To-Do-List-2.jpg')",
                backgroundPosition:"center",
                backgroundRepeat:"no-repeat",
                maxWidth:"100%",
                width: "100%",
                height:"auto",
                paddingTop:"300px",
                paddingBottom:"500px",
                background:"cover",
                backgroundColor:"#ffd0d7 ",
                marginTop:"150px",
              }}> 
          </div>

              <div
                className="image-fluid come-in"
                style={{
                backgroundImage: "url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm252batch3-ning-instagramstory-01.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f5c005c846482dfb1783ddf3376fd93d')",
                backgroundPosition:"center",
                backgroundRepeat:"no-repeat",
                maxWidth:"100%",
                width: "100%",
                height:"auto",
                paddingBottom:"120px",
                background:"cover",
                // backgroundColor:"pink",
                marginTop:"100px",
              }}> 
          </div>
          <br/><br/>

{/* First Container */}

      <Container style={{paddingTop:"8%"}}>
            <div style={{textAlign:"left", float:"left", paddingTop:"100px" ,paddingLeft:"30px"}}>
              <h2 className="AppBold" style={{paddingTop:"5%",  textAlign:"left", padding:"5px"}}> 
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
            style={{width:"70vh", maxWidth:"100%", minHeight:"27px", height:"50vh",marginBottom:"130px", border:"solid", borderRadius:"20px", borderColor:"#575757", float:"right"
            }}
            /> 
      </Container>

      
{/* second container */}

      <Container>
            <img src="https://cdn.buymeacoffee.com/uploads/project_updates/2021/03/1728d022d80c229cdc8e7d786e17f008.jpg@1200w_0e.webp" className='come-in'
              style={{width:"70vh", maxWidth:"100%", minHeight:"27px", height:"50vh", border:"solid", borderRadius:"20px", borderColor:"#575757", float:"left", clear:"right", marginRight:"120px"}}/>
              <div style={{textAlign:"left", float:"left", paddingTop:"5%"
            }}>
                <h2 className="AppBold" style={{textAlign:"left",  padding:"5px", clear:"right", paddingLeft:"30px"}}> 
                  Add your tasks.
                  <p> Organize your life.
                  <p> Achieve more everyday.</p>
                  </p>
                </h2>

              <p id='font' className="float clearfix" style={{textAlign:"left", paddingLeft:"30px",  fontSize:"15px", color:"#575757", float:"right", clear:"right", marginBottom:"20%"}}>
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
