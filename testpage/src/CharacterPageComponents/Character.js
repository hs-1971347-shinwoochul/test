import React,{useState} from 'react';
import { Button, Card } from 'react-bootstrap';
import './Character.css'; // Import the styles

export default function Character({ user }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const controlModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <Card className="card"> {/* Apply the 'card' class */}
      <Card.Img
        variant="top"
        src={user.imgUrl}
        className="card-img" // Apply the 'card-img' class
      />
      <Card.Body className="card-body"> {/* Apply the 'card-body' class */}
        <div className="flex flex-col space-y-1">
          <Button variant="link" className="button-link" onClick={controlModal}>더 많은 세부 정보 보기</Button>
          
        </div>
      </Card.Body>
      <Card.Header className="card-header"> {/* Apply the 'card-header' class */}
        <div className="flex items-center space-x-4">
          <Card.Title className="card-title">{user.name}</Card.Title>
        </div>
      </Card.Header>
      {isModalOpen && (
        <div className="modal">
            <p>{user.description_kr}</p>
        </div>
      )}
    </Card>
    
  );
}
