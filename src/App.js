import  { useState, useEffect } from 'react';
import './App.scss';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function App() {
  // state
  const [isLoading, setLoading] = useState(true);
  const [animalData, setAnimalData] = useState()
  const [itemData, setItemData] = useState()
  const [pageData, setPageData] = useState()
  const [show, setShow] = useState(false);

  // on mount, app fetches from APIs
  useEffect(() => {
    fetch("https://bovisync.bitbucket.io/sample_data/animal_data.json")
    .then(res => res.json())
    .then(res => {
      setAnimalData(res)
    })

    fetch("https://bovisync.bitbucket.io/sample_data/page_meta.json")
    .then(res => res.json())
    .then(res => {
      setPageData(res)

    })

    fetch("https://bovisync.bitbucket.io/sample_data/item_meta.json")
    .then(res => res.json())
    .then(res => {
      setItemData(res)
      setLoading(false)
    })
  }, [])

  // handles Modal show and hide
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // Loading text
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  
  return (
    <div className="App">
      <div className="App-header">
        <div className="nav">
          Bovisync 
        </div>
        <div className="accordion">
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  {pageData.sections[0].label}
               </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <div>
                    <span onClick={handleShow}>
                      {`EART: ${animalData.EART}`}
                    </span>
                  </div>
                  <div>
                    <span onClick={handleShow}>
                    {`Pen: ${animalData.Pen}`}
                    </span>
                    
                  </div>
                  <div>
                    <span onClick={handleShow}>
                    {`BRD: ${animalData.BRD}`}
                    </span>
                    
                  </div>
                  <div>
                    <span onClick={handleShow}>
                    {`SIR: ${animalData.SIR}`}
                    </span>
                  </div>
                  <div>
                    <span onClick={handleShow}>
                      {`Barn: ${animalData.Barn}`}
                    </span>
                   
                  </div>
                  <div>
                    <span onClick={handleShow}>
                      {`AGEMO: ${animalData.AGEMO}`}
                    </span>
                  </div>
                  <div>
                    <span onClick={handleShow}>
                      {`FAKE: `}
                    </span>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                {pageData.sections[1].label}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <div>
                    <span onClick={handleShow}>
                      {`Repro: ${animalData.Repro}`}
                    </span>                    
                  </div>
                  <div>
                    <span onClick={handleShow}>
                      {`DCC: ${animalData.DCC}`}
                    </span>
                  </div>
                  <div>
                    <span onClick={handleShow}>
                      {`REPRDate: ${animalData.REPRDate}`}
                    </span>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                {pageData.sections[2].label}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <div>
                    <span onClick={handleShow}>
                    {`EART: ${animalData.EART}`}
                    </span>
                  </div>
                  <div>
                    <span onClick={handleShow}>
                    {`DIM: ${animalData.DIM}`}
                    </span>
                  </div>
                  <div>
                    <span onClick={handleShow}>
                      {`LACT: ${animalData.LACT}`}
                    </span>                   
                  </div>
                  <div>
                    <span onClick={handleShow}>
                     {`LMILK: ${animalData.LMILK}`}
                    </span>
                  </div>
                  <div>
                    <span onClick={handleShow}>
                      {`ECM: ${animalData.ECM}`}
                    </span>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                {pageData.sections[3].label}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <div>
                    <span onClick={handleShow}>
                      {`DIM: ${animalData.DIM}`}
                    </span>
                  </div>
                  <div>
                    <span onClick={handleShow}>
                      {`LACT: ${animalData.LACT}`}
                    </span>
                  </div>
                  <div>
                    <span onClick={handleShow}>
                      {`LMILK: ${animalData.LMILK}`}
                    </span>
                  </div>
                  <div>
                    <span onClick={handleShow}>
                     {`ECM: ${animalData.ECM}`}
                    </span>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Description Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>Description of Report Item</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default App;
