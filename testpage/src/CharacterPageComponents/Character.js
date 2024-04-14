import React,{useState} from 'react';
import { Button, Card } from 'react-bootstrap';
import './Character.css'; // Import the styles

export default function Character({ character }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const controlModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <Card className="card">
      <Card.Img
        variant="top"
        src={character.imgUrl}
        className="card-img"
      />
      <Card.Body className="card-body">
        <div className="flex flex-col space-y-1">
          <Button variant="link" className="button-link" onClick={controlModal}>더 많은 세부 정보 보기</Button>
          
        </div>
      </Card.Body>
      <Card.Header className="card-header">
        <div className="flex items-center space-x-4">
          <Card.Title className="card-title">{character.name}</Card.Title>
        </div>
      </Card.Header>
      {isModalOpen && (
        <div className="modal">
            <p>{character.description_kr}</p>
        </div>
      )}
    </Card>
    
  );
}
